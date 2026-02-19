import React from 'react';

const updates = [
  {
    date: "JAN 15, 2026",
    title: "The Soil is Waking Up",
    excerpt:
      "Recent soil analysis indicates a measurable rise in microbial activity. This confirms that reduced disturbance and natural inputs are rebuilding biological balance.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
  {
    date: "JAN 08, 2026",
    title: "Learning from Failure",
    excerpt:
      "Late sowing combined with unseasonal rainfall caused crop loss. This entry documents what failed, why it failed, and how future cycles will adapt.",
    image:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  },
];

export default function Journal() {
  return (
    <div className="pt-32 pb-28 bg-beejam-beige min-h-screen text-beejam-brown">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="font-heritage text-6xl mb-8 text-center">
          The Journal
        </h1>

        <p className="font-premium text-xl text-center opacity-60 mb-24 leading-relaxed">
          This is not a blog.
          It is a living record of decisions, failures, recovery,
          and soil health over time.
        </p>

        <div className="space-y-32">
          {updates.map((post, i) => (
            <article key={i} className="group cursor-pointer">

              <div className="overflow-hidden rounded-sm mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>

              <span className="font-sans text-xs tracking-widest opacity-40 uppercase">
                {post.date}
              </span>

              <h2 className="font-heritage text-4xl mt-4 mb-4 group-hover:text-beejam-clay transition-colors">
                {post.title}
              </h2>

              <p className="font-premium text-xl opacity-70 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-6 w-12 h-[1px] bg-beejam-brown group-hover:w-full transition-all duration-500"></div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
