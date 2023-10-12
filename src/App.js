import "./App.css";
import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import { useDispatch, useSelector } from "react-redux";
import { setHtmlData, setPrevData } from "./action";

function App() {
  const htmlData = useSelector((store) => store.htmlData);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  const clearClickHandler = () => {
    setIndex((index) => index + 1);
    // dispatch(setHtmlData([]));
    dispatch(setPrevData(""))
  };

  return (
    <div className="app">
      <div className="left-side">
        <button className="clearbtn" onClick={clearClickHandler}>
          Clear
        </button>
        <Chatbot key={index} />
      </div>
    </div>
  );
}

export default App;
