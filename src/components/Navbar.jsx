const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <ul className="flex gap-10 text-sm font-semibold">
          <li className="cursor-pointer hover:text-gray-300">HOME</li>
          <li className="cursor-pointer hover:text-gray-300">STORE</li>
          <li className="cursor-pointer hover:text-gray-300">ABOUT</li>
        </ul>

        <button className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded-md">
          cart <span className="ml-1">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
