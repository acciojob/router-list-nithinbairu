import React from "react";
import { useParams, Link } from "react-router-dom";

const items = [
  { id: 1, name: "Laptop", description: "A high-performance laptop for developers." },
  { id: 2, name: "Smartphone", description: "A fast and sleek smartphone." },
  { id: 3, name: "Headphones", description: "Noise-cancelling wireless headphones." },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <h2>Item not found!</h2>
        <Link to="/">Back to List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default ItemDetail;
