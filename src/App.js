import React, { useState } from "react";
import "./App.css";
import InputArea from "./InputArea";
import ListItem from "./ListItem";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [emptyInput, setEmptyInput] = useState(false);

  function addItem(inputValue) {
    if (inputValue.trim() !== "") {
      setListItems((prevValue) => {
        return [...prevValue, inputValue];
      });
      setEmptyInput(false);
    } else {
      setEmptyInput(true);
    }
  }

  function deleteItem(event) {
    const deleteIndex = event.target.value;
    listItems.splice(deleteIndex, 1);
    const filteredListItems = listItems.filter((newItems) => newItems !== "");
    setListItems(filteredListItems);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <InputArea isEmpty={emptyInput} onAdd={addItem} />
      <div>
        <ul>
          {listItems.map((item, index) => (
            <ListItem item={item} index={index} onDelete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
