import Navbar from "@/components/Navbar";
import "../styles/main.scss";

import { CartProvider } from "@/components/CartContext";

export const metadata = {
  title: "My shop Website",
  description: "Generated by create next app",
};

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