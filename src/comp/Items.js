import React from "react";

export default function Items(props) {
  function handleDeleteItem() {
    props.onDeleteItem(props.i.id);
  }
  return (
    <li>
      <input
        type="checkbox"
        value={props.i.packed}
        onChange={() => props.onToggleItem(props.i.id)}
      />
      <span style={props.i.packed ? { textDecoration: "line-through" } : {}}>
        {props.i.quantity} {props.i.desc}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
