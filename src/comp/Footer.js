import React from "react";

export default function Footer({ item }) {
  if (!item.length)
    return (
      <div className="footer">
        <p>Start adding some items to your packing list 🚀</p>
      </div>
    );

  const numItem = item.length;
  const numPackedItem = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItem / numItem) * 100);
  return (
    <div className="footer">
      <p>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${numItem} items in your list, and you already packed ${numPackedItem} ie.(${percentage}%)`}
      </p>
    </div>
  );
}
