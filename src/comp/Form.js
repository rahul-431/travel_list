import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <div className="form_div">
      <h3>What do you need for your trip 😴</h3>
      <form onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Your items..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
}
