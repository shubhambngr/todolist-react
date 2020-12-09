import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
        type="text"
        value={inputText}
        placeholder={props.isEmpty ? "Empty Entry!" : "Enter Item"}
        autoFocus
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
