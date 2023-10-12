import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrevData } from "../action";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const prevData = useSelector((state)=>state.prevData)

  const html = `
  <h1>Welcome to My Website</h1>
    
    <p>This is a sample HTML page with paragraphs, lists, and hyperlinks.</p>
    
    <h2>Paragraphs</h2>
    
    <p>This is the first paragraph. It contains some text.</p>
    
    <p>This is the second paragraph. More text goes here.</p>
    
    <h2>Lists</h2>
    
    <h3>Unordered List</h3>
    <ul>
        <li>Item 1  'https://scripts.cisco.com/app/quicker_csone/?sr=688840557'</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    
    <h3>Ordered List</h3>
    <ol>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
    </ol>
    
    <h2>Hyperlinks</h2>
    
    <p>Visit the <a href="https://www.example.com">Example Website</a> for more information.</p>`;

  const handleHello = () => {
    const botMessage = createChatBotMessage(``);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDataRedering = (message) => {
    console.log("message", message);
    fetch(
      "http://test-model-cdvrqe1-01.tea2.tivo.com:5000",
      {
        method: "POST",
        body: JSON.stringify({
          question: message,
          Context: prevData,
          tags: message.split(" "),
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
        const botMessage = createChatBotMessage(``);

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

        setTimeout(() => {
          const divElement = document.querySelectorAll(
            ".react-chatbot-kit-chat-bot-message"
          );
          const last_div = divElement[divElement.length - 1];
          const spanElement = last_div.querySelector("span");
          spanElement.insertAdjacentHTML("afterend", data);
        }, 1000);

        dispatch(setPrevData(message));
        // let html_Data = [...htmlData];
        // html_Data.push(data);
        // dispatch(setHtmlData(html_Data));
      })
      .catch((err) => {
        const botMessage = createChatBotMessage(
          `L.I.S.A IS DOWN. WILL BE BACK SOON`
        );

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
        console.log("err", err.message);
      });
  };

  const handleName = (message) => {
    const botMessage = createChatBotMessage(`Nice to meet you, ${message}`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, handleName,handleDataRedering },
        });
      })}
    </div>
  );
};

export default ActionProvider;
