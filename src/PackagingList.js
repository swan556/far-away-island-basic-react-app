import Item from "./Item";

export default function PackagingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  sorting_pref,
  handlesorting,
  clearItems,
}) {
  let sortedItems;
  if (sorting_pref === 0) sortedItems = items;
  if (sorting_pref === 1)
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sorting_pref === 2)
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div>
        <select
          value={sorting_pref}
          onChange={(e) => handlesorting(Number(e.target.value))}
        >
          <option value={0}>sort by input order</option>
          <option value={1}>sort by description</option>
          <option value={2}>sort by status</option>
        </select>
        <button onClick={() => clearItems()}>Clear List</button>
      </div>
    </div>
  );
}
