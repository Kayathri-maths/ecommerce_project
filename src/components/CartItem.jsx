const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center border-b py-4">
      <div className="flex items-center w-1/2 gap-4">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-16 h-16 rounded"
        />
        <span>{item.title}</span>
      </div>

      <span className="w-1/4">${item.price}</span>

      <div className="w-1/4 flex items-center gap-3">
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="w-12 border text-center"
        />
        <button
          onClick={() => onRemove(item.title)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItem;
