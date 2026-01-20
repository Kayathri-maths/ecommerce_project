import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./pages/About";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar onOpenCart={() => setShowCart(true)} />

      {showCart && <Cart onClose={() => setShowCart(false)} />}

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/store" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
