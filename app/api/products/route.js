import { NextResponse } from "next/server";

const API_URL = "https://fakestoreapi.com/products";

import { useEffect, useState } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Fetch products from Amazon API
//         const amazonResponse = await fetch('https://api.amazon.com/products');
//         const amazonData = await amazonResponse.json();

//         // Fetch products from Walmart API
//         const walmartResponse = await fetch('https://api.walmart.com/products');
//         const walmartData = await walmartResponse.json();

//         // Combine products from both APIs
//         const combinedProducts = [...amazonData.products, ...walmartData.products];
        
//         // Set the combined products to state
//         setProducts(combinedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>{product.name} - ${product.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

export async function GET() {
  try {
    const re = await fetch(API_URL);
    const lst = await re.json();
    return NextResponse.json(lst);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error",
    });
  }
}
