import "./App.css";
import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import { useDispatch, useSelector } from "react-redux";
import { setHtmlData } from "./action";

function App() {
  const htmlData = useSelector((store) => store.htmlData);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  const clearClickHandler = () => {
    setIndex((index) => index + 1);
    dispatch(setHtmlData([]));
  };

  return (
    <div className="app">
      <div className="left-side">
        <Chatbot key={index} />
      </div>
      <div className="rightside">
        <div className="right-top">
          <button className="clearbtn" onClick={clearClickHandler}>
            Clear
          </button>
        </div>
        {htmlData.length > 0 ? (
          <ul className="rendered-list">
            {htmlData.map((data, key) => {
              return (
                <li key={key} className="rendered-list-item">
                  <div
                    dangerouslySetInnerHTML={{ __html: data }}
                    className="rendered-data"
                  ></div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="empty-list">
            <p>Ask your question to bot</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
