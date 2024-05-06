"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <header className="header">
      <Link href="/">Welcome to Abhi's Shop</Link>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <Link href="/cart">Shopping Cart</Link>
    </header>
  );
}
