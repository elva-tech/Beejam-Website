import { Link } from 'react-router-dom';

const people = [
  {
    title: "Masanobu Fukuoka",
    desc: "The philosophy of doing nothing.",
    slug: "fukuoka",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.c0nFspyj6womy81bfhaxZwHaD4?pid=Api&P=0&h=180",
  },
  {
    title: "Subhash Palekar",
    desc: "Zero budget, infinite life.",
    slug: "palekar",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.o0aiDpDSqHFGArAk1uQCoQHaEK?pid=Api&P=0&h=180",
  },
];

export default function Foundations() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-beejam-beige">
      <div className="max-w-5xl mx-auto">

        <h1 className="font-heritage text-7xl mb-6">
          Foundations
        </h1>

        <p className="font-premium text-2xl opacity-60 mb-16">
          The thinking that shaped Beejam.
        </p>

        <div className="space-y-16">
          {people.map((p) => (
            <Link
              key={p.slug}
              to={`/foundations/${p.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-beejam-brown/20">

                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-beejam-brown/70 group-hover:bg-beejam-brown/55 transition-colors flex items-center justify-between px-8">

                  <div>
                    <h2 className="font-heritage text-4xl text-white group-hover:text-beejam-clay transition-colors">
                     {p.title}

                    </h2>
                    <p className="text-white/80 mt-2">
                      {p.desc}
                    </p>
                  </div>

                  <span className="text-4xl text-white group-hover:translate-x-4 transition-transform">
                    →
                  </span>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
