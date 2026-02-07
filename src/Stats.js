export default function Stats({ items }) {
  const num_items = items.length;
  const num_packed = items.filter((item) => item.packed).length;
  const percent_completion =
    num_items === 0 ? "-" : Math.round((num_packed / num_items) * 100);
  return (
    <footer className="stats">
      <em>
        {percent_completion === 100
          ? "You have everything packed. Lets goo!!"
          : `You have ${num_items} items on your list, and you have already packed 
        ${num_packed} items. (${percent_completion}% completion)`}
      </em>
    </footer>
  );
}
