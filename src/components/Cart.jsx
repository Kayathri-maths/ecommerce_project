import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const removeItemHandler = (title) => {
    setCartItems(cartItems.filter((item) => item.title !== title));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed top-0 right-0 h-full w-[450px] bg-white shadow-lg z-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">CART</h2>
        <button onClick={onClose} className="text-xl">
          ✖
        </button>
      </div>

      <div className="flex font-bold border-b pb-2 mb-4">
        <span className="w-1/2">ITEM</span>
        <span className="w-1/4">PRICE</span>
        <span className="w-1/4">QUANTITY</span>
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.title} item={item} onRemove={removeItemHandler} />
      ))}

      <div className="flex justify-end mt-6 text-xl font-bold">
        Total&nbsp; ${totalAmount}
      </div>

      <button className="block mx-auto mt-8 bg-cyan-400 text-white px-8 py-3 rounded text-lg">
        PURCHASE
      </button>
    </div>
  );
};

export default Cart;
