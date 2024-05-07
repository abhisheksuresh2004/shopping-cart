import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";


export default function Product({ data }) {
  const { cartAd } = useCart();
  return (
    // writing all of our speciifc product data that will be added to the cart
    //want to still improve functionality for accounting for price
    <div className="product">

      <div className="product-image">
        
        <Image src={data.image} fill alt={data.title} />
      
      </div>

      <h2 className="product-title">{data.title}</h2>

      <div className="details">

        <button onClick={() => cartAd(data)}>Click to Add to Cart!!!</button>

      </div>
    </div>
  );
}
