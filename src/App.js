import "./App.css";
import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import { useDispatch, useSelector } from "react-redux";
import { setHtmlData } from "./action";

function App() {
  const htmlData = useSelector((store) => store.htmlData);
  const dispatch = useDispatch();

  const clearClickHandler = () => {
    dispatch(setHtmlData([]));
  };

  return (
    <div className="app">
      <div className="left-side">
        <Chatbot />
        <button className="clearbtn" onClick={clearClickHandler}>
          Clear
        </button>
      </div>
      <div className="rightside">
        {htmlData.length > 0 ? (
          <ul>
            {htmlData.map((data) => {
              return <li dangerouslySetInnerHTML={{ __html: data }}></li>;
            })}
          </ul>
        ) : (
          <p>Ask your question to bot</p>
        )}
      </div>
    </div>
  );
}

export default App;
