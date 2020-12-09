import React from "react";

function ToDoItem(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <li
        className="list-item"
        onClick={() => {
          props.onCheck(props.item, props.index, props.isChecked);
        }}
        style={props.isChecked ? { textDecoration: "line-through" } : null}
        key={props.index}
      >
        {props.item}
      </li>
      <button
        className="delete-btn"
        value={props.index}
        onClick={() => {
          props.onDelete(props.isChecked, props.index);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
