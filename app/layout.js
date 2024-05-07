import Navbar from "@/components/Navbar";
import "../styles/main.scss";

import { CartProvider } from "@/components/CartContext";



export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body>

        <CartProvider>

          <Navbar />

          {children}

        </CartProvider>

      </body>
      
    </html>
  );
}
