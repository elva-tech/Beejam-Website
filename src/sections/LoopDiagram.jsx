import React, { useState } from 'react';
import { motion } from 'framer-motion';

const loops = [
  {
    id: '01',
    name: 'Rural Loop',
    front: 'The Farmer Comes First',
    back:
      'We support farmers with indigenous seeds, zero-debt methods, and guaranteed buyback. Dignity is restored when risk is shared.',
    image:
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80',
  },
  {
    id: '02',
    name: 'Urban Loop',
    front: 'Food With Accountability',
    back:
      'Families are no longer consumers — they are participants. Every harvest is traceable, seasonal, and lab-tested.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
  },
  {
    id: '03',
    name: 'Land Loop',
    front: 'Soil Is Capital',
    back:
      'Idle land becomes living infrastructure. Biodiversity, carbon, and water retention compound year after year.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
  },
];

function FlipCard({ loop }) {
  const [flipped, setFlipped] = useState(false);

  return (
    
    <div
      className="h-[480px] relative"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
        className="relative"
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white rounded-2xl overflow-hidden border"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={loop.image}
            alt=""
            className="h-1/2 w-full object-cover grayscale"
          />
          <div className="p-8">
            <h3 className="font-heritage text-3xl">{loop.name}</h3>
            <p className="italic opacity-60 mt-4">{loop.front}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-beejam-brown text-beejam-beige p-10 rounded-2xl flex items-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-lg italic leading-relaxed">
            {loop.back}
          </p>
        </div>
      </motion.div>
    </div>
  );
}


export default function LoopDiagram() {
  return (
    <section className="py-40 px-6 bg-beejam-beige">
      <h2 className="font-heritage text-6xl text-center mb-20">
        The Triad Of Integrity
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {loops.map(loop => (
          <FlipCard key={loop.id} loop={loop} />
        ))}
      </div>
    </section>
  );
}
