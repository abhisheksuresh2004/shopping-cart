import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";


export default function Product({ data }) {
  const { addToCart } = useCart();
  return (
    <div className="product">
      <div className="product-image">
        <Image src={data.image} fill alt={data.title} />
      </div>
      <h2 className="product-title">{data.title}</h2>
      <div className="details">
        <button onClick={() => addToCart(data)}>Click to Add to Cart!!!</button>
      </div>
    </div>
  );
}
