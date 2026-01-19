import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Navbar onOpenCart={() => setShowCart(true)} />
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;
