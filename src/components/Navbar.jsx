import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ onOpenCart }) => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <ul className="flex gap-10 text-sm font-semibold">
        <li>
          <Link to="/" className="hover:text-gray-300">
            HOME
          </Link>
        </li>

        <li>
          <Link to="/store" className="hover:text-gray-300">
            STORE
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-gray-300">
            ABOUT
          </Link>
        </li>
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
