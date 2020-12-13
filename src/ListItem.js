import React from "react";

function ListItem(props) {
  return (
    <div className="list-item">
      <li
        style={props.isChecked ? { textDecoration: "line-through" } : null}
        onClick={() => {
          props.onCheck(props.item, props.index, props.isChecked);
        }}
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

export default ListItem;
