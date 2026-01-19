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
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">MUSIC</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {productsArr.map((product, index) => (
          <div key={index} className="text-center">
            <h3 className="font-semibold mb-3">{product.title}</h3>

            <img
              src={product.imageUrl}
              alt={product.title}
              className="mx-auto mb-4"
            />

            <div className="flex items-center justify-between px-4">
              <span className="font-bold">${product.price}</span>
              <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded">
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
