"use client";

import { useContext, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const re = await fetch("/api/products"); 
        const pd = await re.json();
        setProducts(pd);
        setLoading(false);
      } catch (error) {
        console.error("couldn't get products:", error);
        setLoading(false);
      }
    }
//     // pages/products.js

// import React, { useState, useEffect } from 'react';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <img src={product.image} alt={product.title} style={{ width: '100px' }} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Products;

    fetchProducts();
  }, []);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return (
    <CartContext.Provider
      value={{ products, loading, cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const change = useContext(CartContext);
  return change;
}
