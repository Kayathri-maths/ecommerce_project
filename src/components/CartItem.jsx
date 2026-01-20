import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between border-b py-4">
      <img src={item.imageUrl} className="w-16" />
      <span>{item.title}</span>
      <span>${item.price}</span>
      <span>{item.quantity}</span>

      <button
        onClick={() => removeItem(item.title)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        REMOVE
      </button>
    </div>
  );
};

export default CartItem;
