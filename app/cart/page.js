"use client";
import { useCart } from "@/components/CartContext";
import CartProduct from "@/components/CartProduct";
import React from "react";

export default function CartPage() {
  const { check } = useCart();
  console.log(check);
  return (
    <section>
      <h2 className="section-title">Items that you have added to cart can be seen here</h2>

      <div className="cart-page">

        <div className="cart-products">

          {check?.map((im) => {
            return <CartProduct data={im} key={im.id} />;
          })}
        </div>
       
      </div>
    </section>
  );
}
