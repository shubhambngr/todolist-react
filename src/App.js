import React, { useState } from "react";
import "./App.css";
import InputArea from "./InputArea";
import ListItem from "./ListItem";
import Zoom from "@material-ui/core/Zoom";

export default function App() {
  const [uncheckedItems, setUncheckedItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [emptyInput, setEmptyInput] = useState(false);

  function addItem(addToChecked, inputValue) {
    if (inputValue.trim() !== "") {
      addToChecked
        ? setCheckedItems((prevItems) => {
            return [...prevItems, inputValue];
          })
        : setUncheckedItems((prevItems) => {
            return [...prevItems, inputValue];
          });
      setEmptyInput(false);
    } else {
      setEmptyInput(true);
    }
  }

  function deleteItem(isChecked, deleteIndex) {
    isChecked
      ? setCheckedItems((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== deleteIndex;
          });
        })
      : setUncheckedItems((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== deleteIndex;
          });
        });
  }

  function checkItem(checkedItem, checkedIndex, isCrossed) {
    deleteItem(isCrossed, checkedIndex);
    addItem(!isCrossed, checkedItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <InputArea isEmpty={emptyInput} onAdd={addItem} />
      <div>
        <ul>
          {uncheckedItems.map((item, index) => (
            <ListItem
              key={index}
              onCheck={checkItem}
              isChecked={false}
              item={item}
              index={index}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      </div>
      {checkedItems.length !== 0 && (
        <Zoom in={true}>
          <div className="checked-items">
            <p>Checked Items</p>
            <ul>
              {checkedItems.map((item, index) => (
                <ListItem
                  key={index}
                  onCheck={checkItem}
                  isChecked={true}
                  item={item}
                  index={index}
                  onDelete={deleteItem}
                />
              ))}
            </ul>
          </div>
        </Zoom>
      )}
    </div>
  );
}
