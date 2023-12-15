import React, { useState } from "react";
import Items from "./Items";

export default function PackingList({ item, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = item;

  if (sortBy === "desc")
    sortedItems = item.slice().sort((a, b) => a.desc.localeCompare(b.desc));

  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="packingList">
      <h2>Packing Lists 😎😜</h2>
      <ul>
        {sortedItems.map((i) => (
          <Items
            i={i}
            key={i.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input order</option>
          <option value="desc">Sort by Description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
