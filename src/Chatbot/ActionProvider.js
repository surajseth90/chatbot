import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHtmlData } from "../action";

function useActionProvider() {
  const [messages, setMessages] = useState([]);
  const htmlData = useSelector((state) => state.htmlData);
  const dispatch = useDispatch();
  const createChatBotMessage = (content) => {
    return {
      type: "chat",
      content,
    };
  };

  const createClientMessage = (content) => {
    return {
      type: "client",
      content,
    };
  };

  const handleDataRedering = (message) => {
    fetch(
      "https://1dc2-2001-420-5440-1250-bce9-7280-e49d-6ebf.ngrok-free.app",
      {
        method: "POST",
        body: JSON.stringify({
          payload: message,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        let html_Data = [...htmlData];
        html_Data.push(data);
        dispatch(setHtmlData(html_Data));
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };

  return {
    messages,
    createChatBotMessage,
    createClientMessage,
    handleDataRedering,
  };
}

export default useActionProvider;
