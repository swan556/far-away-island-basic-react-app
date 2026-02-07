import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PakagingList from "./PackagingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const [sorting_pref, setSpf] = useState(0);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handlesorting(trgt) {
    setSpf(trgt);
    console.log(trgt);
  }

  function clearItems() {
    const confirm = window.confirm(
      "are you sure you want to delte the list??!",
    );
    if (confirm) setItems((items) => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={handleAddItems} />
      <PakagingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        sorting_pref={sorting_pref}
        handlesorting={handlesorting}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
