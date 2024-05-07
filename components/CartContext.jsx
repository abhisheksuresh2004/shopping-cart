"use client";

import { useContext, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [buff, setter] = useState(true);
  const [cart, cartTrack] = useState([]);
  const [products, detailsProduct] = useState([]);


  useEffect(() => {
    async function fetchProducts() {
      try {
        //will try to implement for other apis in the future
        const re = await fetch("/api/products"); 
        const pd = await re.json();
        detailsProduct(pd);
        setter(false);
      } catch (error) {
        console.error("couldn't get products:", error);
        setter(false);
      }
    }
//     // pages/products.js


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


// const ExampleComponent = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       {/* When the button is clicked, call setCount to update the count state */}
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }



// export default Products;

    fetchProducts();
  }, []);

  const cartAd = (product) => {
    cartTrack((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    cartTrack((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  

  return (

    //want to get the provider which acts as a wrapper here, where we can accordingly change our state
    <CartContext.Provider
      value={{ products, buff, cart, cartAd, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  const constantlyUpdates = useContext(CartContext);
  return constantlyUpdates;
}
