"use client";
import { useCart } from "@/components/CartContext";
import CartProduct from "@/components/CartProduct";
import React from "react";

export default function CartPage() {
  const { cart } = useCart();
  console.log(cart);
  const totalPrice = cart.reduce((num, item) => num + item.price, 0);
  return (
    <section>
      <h2 className="section-title">Items that you have added to cart can be seen here</h2>
      <div className="cart-page">
        <div className="cart-products">
          {cart?.map((im) => {
            return <CartProduct data={im} key={im.id} />;
          })}
        </div>
        {/* <div className="total-card">
          <h1>Cart Total</h1>
          <hr />
          <h2>${totalPrice}</h2>
        </div> */}
      </div>
    </section>
  );
}
