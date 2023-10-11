import "./App.css";
import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import { useSelector } from "react-redux";

function App() {
  const htmlData = useSelector((store) => store.htmlData);

  return (
    <div className="app">
      <div className="left-side">
        <Chatbot />
      </div>
      <div className="rightside">
        {htmlData.length>0 ? (
          <ul dangerouslySetInnerHTML={{ __html: htmlData }} />
        ) : (
          <p>Ask your question to bot</p>
        )}
      </div>
    </div>
  );
}

export default App;
