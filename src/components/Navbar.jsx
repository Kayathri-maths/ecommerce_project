import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ onOpenCart }) => {
  const { totalQuantity } = useContext(CartContext);

  const linkClass = ({ isActive }) =>
    isActive ? "text-cyan-400" : "text-white";

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <ul className="flex gap-10 text-sm font-semibold">
        <li>
          <NavLink to="/" className={linkClass}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" className={linkClass}>
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            ABOUT
          </NavLink>
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
