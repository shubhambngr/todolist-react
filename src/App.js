import React, { useState } from "react";
import "./App.css";
import InputArea from "./InputArea";
import ListItem from "./ListItem";
import Zoom from "@material-ui/core/Zoom";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [emptyInput, setEmptyInput] = useState(false);

  function addItem(addToChecked, inputValue) {
    if (addToChecked === true) {
      if (inputValue.trim() !== "") {
        setCheckedItems((prevValue) => {
          return [...prevValue, inputValue];
        });
        setEmptyInput(false);
      } else {
        setEmptyInput(true);
      }
    } else {
      if (inputValue.trim() !== "") {
        setListItems((prevValue) => {
          return [...prevValue, inputValue];
        });
        setEmptyInput(false);
      } else {
        setEmptyInput(true);
      }
    }
  }

  function deleteItem(isChecked, deleteIndex) {
    isChecked
      ? setCheckedItems((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== deleteIndex;
          });
        })
      : setListItems((prevItems) => {
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
          {listItems.map((item, index) => (
            <ListItem
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
                <Zoom in={true}>
                  <ListItem
                    onCheck={checkItem}
                    isChecked={true}
                    item={item}
                    index={index}
                    onDelete={deleteItem}
                  />
                </Zoom>
              ))}
            </ul>
          </div>
        </Zoom>
      )}
    </div>
  );
}
