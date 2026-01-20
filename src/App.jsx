import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar onOpenCart={() => setShowCart(true)} />
      {showCart && <Cart onClose={() => setShowCart(false)} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
