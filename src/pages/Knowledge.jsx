import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: "Why Farming Exists",
    desc: "Before it was business, it was survival.",
    slug: "purpose",
    image:
      "/farming.jpg",
  },
  {
    title: "History of Soil",
    desc: "The journey from the plow to the laboratory.",
    slug: "history",
    image:
      "/soil.jpg",
  },
 
  {
    title: "Nakshatras & Rain",
    desc: "Listening to the cosmic rhythm.",
    slug: "rhythms",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.RfunFPB_JMscDBIg99SdXwHaE8?pid=Api&P=0&h=180",
  },
];

export default function Knowledge() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-beejam-beige">
      <div className="max-w-5xl mx-auto">

        <h1 className="font-heritage text-7xl mb-6">The Repository</h1>
        <p className="font-premium text-2xl opacity-60 mb-16">
          What we forgot, we must now remember.
        </p>

        <div className="space-y-16">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              to={`/knowledge/${topic.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-beejam-brown/20">

                {/* IMAGE */}
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-beejam-beige/80 group-hover:bg-beejam-beige/60 transition-colors" />

                {/* TEXT */}
                <div className="absolute inset-0 bg-beejam-brown/70 group-hover:bg-beejam-brown/55 transition-colors" >
                  <div>
                    <h2 className="font-heritage text-4xl mb-2 text-white group-hover:text-beejam-clay transition-colors">
                      {topic.title}
                    </h2>
                    <p className="font-sans text-white/80">
                      {topic.desc}
                    </p>

                  </div>
                  <span className="text-4xl font-light group-hover:translate-x-4 transition-transform">
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
