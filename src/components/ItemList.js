import React from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, name: "Laptop", description: "A high-performance laptop for developers." },
  { id: 2, name: "Smartphone", description: "A fast and sleek smartphone." },
  { id: 3, name: "Headphones", description: "Noise-cancelling wireless headphones." },
];

const ItemList = () => {
  return (
    <div>
      <h2>Available Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
