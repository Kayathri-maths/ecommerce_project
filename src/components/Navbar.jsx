const Navbar = ({ onOpenCart }) => {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <ul className="flex gap-10 text-sm font-semibold">
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
      </ul>

      <button
        onClick={onOpenCart}
        className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded"
      >
        cart <span>0</span>
      </button>
    </nav>
  );
};

export default Navbar;
