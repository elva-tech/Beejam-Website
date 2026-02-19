import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const seasons = [
  {
    name: 'Vasanta',
    months: 'Spring: Mar – Apr',
    headline: 'The Biological Awakening',
    info: 'As the earth tilts toward the sun, the soil microbiome enters a frenzy of decomposition. We do not force growth; we apply liquid Jeevamrutha to wake up the indigenous earthworms.',
    technical: 'Microbial Activity: Peak | Soil Moisture: Moderate',
    wisdom: 'Governed by the Ashwini Nakshatra, this is the time for "Prana" to ascend.'
  },
  {
    name: 'Grishma',
    months: 'Summer: May – Jun',
    headline: 'Thermal Discipline',
    info: 'When the sun becomes a furnace, the land must become a shield. We practice intensive mulching to keep the ground 10°C cooler than the air.',
    technical: 'Carbon Retention: Critical | Evaporation Control: Active',
    wisdom: 'Sun-dried mulch acts as a biological capacitor, storing solar energy.'
  },
  {
    name: 'Varsha',
    months: 'Monsoon: Jul – Aug',
    headline: 'The Great Replenishment',
    info: 'Rain is the only irrigation we truly trust. We transform the farm into a sponge, forcing nitrogen-rich rainwater into the subsoil aquifers.',
    technical: 'Nitrogen Fixation: High | Aquifer Recharge: Active',
    wisdom: 'The thunder triggers a nitrogen-fixation process no factory can replicate.'
  },
  {
    name: 'Sharad',
    months: 'Autumn: Sep – Oct',
    headline: 'The Nutrient Bridge',
    info: 'As the rains recede, we sow deep-taproot cover crops to break the soil crust and pull subterranean minerals to the surface.',
    technical: 'Mineral Solubility: Peak | Photosynthetic Efficiency: High',
    wisdom: 'A time of balance where the earth exhales its excess moisture.'
  },
  {
    name: 'Hemanta',
    months: 'Pre-Winter: Nov – Dec',
    headline: 'The Density Period',
    info: 'Cold weather accelerates cellular density. This creates the "Beejam Flavor"—a sweetness industrial produce can never achieve.',
    technical: 'Brix Levels: Maximum | Root Expansion: Vertical',
    wisdom: 'The cold forces the plant to concentrate its "Essence" into the fruit.'
  },
  {
    name: 'Shishira',
    months: 'Winter: Jan – Feb',
    headline: 'Metabolic Silence',
    info: 'The earth enters deep rest. We focus on "Seed Sovereignty"—collecting heirloom seeds that carry the genetic memory of this soil.',
    technical: 'Decomposition Rate: Slow | Fungal Network: Consolidation',
    wisdom: 'In silence, the DNA of the seed records the history of the soil.'
  }
];

export default function RituChakra() {
  const [active, setActive] = useState(0);
  const mainRef = useRef(null);
  const indicatorRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ritu-header', {
        scrollTrigger: { trigger: '.ritu-header', start: 'top 80%' },
        y: 50, opacity: 0, duration: 1.2, ease: 'power4.out'
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    gsap.to(indicatorRef.current, {
      y: active * 80, // Updated height for easier tapping
      duration: 0.6,
      ease: 'expo.out',
    });
  }, [active]);

  return (
    <section ref={mainRef} className="py-40 bg-[#141a14] text-[#f5f1e8] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN - NAVIGATOR */}
        <div className="lg:col-span-5">
          <div className="ritu-header mb-16">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.6em] text-beejam-clay mb-4">The Cycle of Life</h4>
            <h2 className="font-heritage text-6xl md:text-8xl mb-6 leading-none">Ritu Chakra</h2>
            <p className="text-sm uppercase tracking-widest opacity-40">Select a season to explore</p>
          </div>

          <div className="relative pl-10">
            {/* The Active Bar - High Visibility */}
            <div 
              ref={indicatorRef}
              className="absolute left-0 top-0 w-1 h-16 bg-beejam-clay shadow-[0_0_20px_#a68a64] z-10"
            >
              <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-white/50" />
            </div>

            {/* Background vertical line */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10" />

            <div className="space-y-4">
              {seasons.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative group w-full text-left h-16 flex flex-col justify-center px-4 transition-all duration-300 rounded-r-lg ${
                    active === i 
                      ? 'bg-white/5 opacity-100' 
                      : 'opacity-40 hover:opacity-70 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className={`font-heritage text-3xl block leading-none transition-transform duration-300 ${active === i ? 'translate-x-2 text-beejam-clay' : ''}`}>
                    {s.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60">
                    {s.months}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - CONTENT DISPLAY */}
        <div className="lg:col-span-7 flex items-center">
          <div className="bg-white/[0.03] p-8 md:p-16 rounded-2xl border border-white/10 backdrop-blur-md relative w-full min-h-[500px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <span className="font-heritage text-beejam-clay text-sm uppercase tracking-[0.4em] mb-4 block">
                   Season {active + 1} // Phase of Bloom
                </span>
                
                <h3 className="font-heritage text-5xl md:text-6xl mb-6 tracking-tight leading-tight">
                  {seasons[active].headline}
                </h3>
                
                <div className="h-[2px] w-24 bg-beejam-clay mb-10" />
                
                <p className="font-premium text-2xl md:text-3xl leading-relaxed mb-12 italic text-white/90">
                  "{seasons[active].info}"
                </p>

                <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-white/10">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-beejam-clay font-bold">Indigenous Knowledge</p>
                    <p className="font-premium italic text-base opacity-70 leading-snug">{seasons[active].wisdom}</p>
                  </div>
                  <div className="bg-black/20 p-6 rounded-lg">
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-3 underline decoration-beejam-clay">Soil Intelligence Metric</p>
                    <p className="font-sans text-xs leading-relaxed">{seasons[active].technical}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}