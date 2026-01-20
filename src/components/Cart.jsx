import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed top-0 right-0 w-[450px] h-full bg-white p-6 shadow-lg">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">CART</h2>
        <button onClick={onClose}>✖</button>
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.title} item={item} />
      ))}

      <div className="text-right font-bold mt-6">Total ${totalAmount}</div>
    </div>
  );
};

export default Cart;
