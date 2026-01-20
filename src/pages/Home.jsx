const tours = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-gray-500 py-20 text-center text-white">
        <h1 className="text-6xl font-serif mb-6">The Generics</h1>

        <button className="border border-cyan-400 px-6 py-2 mb-6">
          Get our Latest Album
        </button>

        <div className="mt-6">
          <button className="border border-cyan-400 rounded-full w-16 h-16 text-cyan-400 text-2xl">
            ▶
          </button>
        </div>
      </div>

      {/* TOURS SECTION */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">TOURS</h2>

        {tours.map((tour, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b py-4"
          >
            <span className="font-bold w-24">{tour.date}</span>
            <span className="w-40">{tour.city}</span>
            <span className="flex-1">{tour.venue}</span>

            <button className="bg-cyan-400 text-white px-4 py-1 rounded">
              BUY TICKETS
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
