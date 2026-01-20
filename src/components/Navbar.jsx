import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ onOpenCart }) => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between">
      <ul className="flex gap-10">
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
      </ul>

      <button
        onClick={onOpenCart}
        className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded"
      >
        cart <span>{totalQuantity}</span>
      </button>
    </nav>
  );
};

export default Navbar;
