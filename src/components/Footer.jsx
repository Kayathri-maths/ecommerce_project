const Footer = () => {
  return (
    <footer className="bg-cyan-400 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h2 className="text-2xl font-serif text-white">The Generics</h2>

        <div className="flex gap-6 text-white text-lg">
          <span className="cursor-pointer">🎵</span>
          <span className="cursor-pointer">📘</span>
          <span className="cursor-pointer">▶️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
