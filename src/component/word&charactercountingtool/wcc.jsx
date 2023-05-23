// wcc.jsx

import React, { useState } from "react";
import "./wcc.css";

function WordCharCounter() {
  const [text, setText] = useState("");

  const countWords = () => {
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
  };

  const countChars = () => {
    return text.length;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="WordCharCounter">
        <h1>Word and Character Counter</h1>
      <textarea value={text} onChange={handleTextChange} />
      <div className="WordCharCounter-row">
        <div className="WordCharCounter-label">Words:</div>
        <div className="WordCharCounter-value">{countWords()}</div>
      </div>
      <div className="WordCharCounter-row">
        <div className="WordCharCounter-label">Characters:</div>
        <div className="WordCharCounter-value">{countChars()}</div>
      </div>
    </div>
  );
}

export default WordCharCounter;
