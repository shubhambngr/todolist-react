import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li key={props.index}>
        {props.item}
        <button
          value={props.index}
          onClick={props.onDelete}
          style={{ float: "right" }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
