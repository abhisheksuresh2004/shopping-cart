"use client";
import { useCart } from "@/components/CartContext";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  const { products, loading, addToCart } = useCart();
  console.log(addToCart);
  return (
    <section className="products">
      <h2 className="section-title">Choose the Items You Wish to Add!</h2>
      {loading ? (
        <div>
          {/* <h2>Loading Products...</h2> */}
        </div>
      ) : (
        <div className="grid-4-col">
          {products.map((product) => {
            return <Product data={product} key={product.id} />;
          })}
        </div>
      )}
    </section>
  );
}
