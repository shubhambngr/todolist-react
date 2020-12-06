import React, { useState } from "react";
import "./App.css";

export default function App() {

    const [inputText, setInputText] = useState("");
    const [listItems, setListItems] = useState([]);
    const [emptyInput, setEmptyInput] = useState(false);

    function handleInputChange(event) {
        const value = event.target.value;
        setInputText(value);
    }

    function addItem() {
        if (inputText !== "") {
            setListItems((prevValue) => {
              return [...prevValue, inputText];
            });
            setInputText("");
            setEmptyInput(false);
        } else {
            setEmptyInput(true);
        }
    }

    function deleteItem(event) {
        const deleteIndex = event.target.value;
        listItems.splice(deleteIndex, 1);
        const filteredListItems = listItems.filter(newItems => newItems !== "");
        setListItems(filteredListItems);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addItem();
        }
    }

    return (
      <div className="container">
        <div className="heading">
          <h1>To Do List</h1>
        </div>
        <div className="form">
          <input
            onKeyPress={handleKeyPress}
            onChange={handleInputChange}
            type="text"
            value={inputText}
            placeholder={emptyInput ? "Empty Entry!" : "Enter Item"}
            autoFocus
          />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                {item}
                <button value={index} onClick={deleteItem} style={{float: "right"}}>
                    Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}