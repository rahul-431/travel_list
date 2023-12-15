import { useState } from "react";
import Footer from "./comp/Footer";
import Form from "./comp/Form";
import Header from "./comp/Header";
import PackingList from "./comp/PackingList";

function App() {
  const [item, setItem] = useState([]);

  function handleAddItem(newItem) {
    setItem((item) => [...item, newItem]);
  }
  function handleDeleteItem(itemId) {
    setItem((item) => item.filter((item) => item.id !== itemId));
  }
  function handleToggleItem(itemId) {
    setItem(
      item.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to clear the list?"
    );
    if (confirmed) setItem([]);
  }
  return (
    <div className="main">
      <Header />
      <Form onAddItem={handleAddItem} />
      <Footer item={item} />
      <PackingList
        item={item}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
    </div>
  );
}

export default App;
