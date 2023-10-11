import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHtmlData, setPrevData } from "../action";

function useActionProvider() {
  const [messages, setMessages] = useState([]);
  const htmlData = useSelector((state) => state.htmlData);
  const prevData = useSelector((state) => state.prevData);

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
    console.log("message", message);
    fetch(
      "https://ada5-2401-4900-1cb9-6efb-117c-ba30-6d31-dbb9.ngrok-free.app",
      {
        method: "POST",
        body: JSON.stringify({
          question: message,
          Context: prevData,
          tags: ["what", "is", "your", "name"],
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
        dispatch(setPrevData(message));
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
