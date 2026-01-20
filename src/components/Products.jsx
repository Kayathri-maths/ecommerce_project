import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
];

const Products = () => {
  const { addItem } = useContext(CartContext);

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-10">MUSIC</h2>

      <div className="grid grid-cols-3 gap-10">
        {productsArr.map((product) => (
          <div key={product.title} className="text-center">
            <h3 className="mb-3 font-semibold">{product.title}</h3>

            <img src={product.imageUrl} className="mx-auto mb-4" />

            <div className="flex justify-between px-4">
              <span>${product.price}</span>
              <button
                onClick={() => addItem(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
