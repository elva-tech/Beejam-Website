import React from 'react';
import { motion } from 'framer-motion';

export default function Steward() {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-beejam-beige min-h-screen pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: TITLE & PHILOSOPHY */}
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-8">
            <h1 className="font-premium text-5xl md:text-7xl lg:text-9xl mb-8 leading-[0.85] tracking-tighter">
              A Return to <br /> 
              <span className="italic font-light">Ancestral Duty.</span>
            </h1>
          </div>
          <div className="md:col-span-4 flex items-end">
            <p className="font-premium text-lg md:text-xl italic opacity-60 border-l border-beejam-brown/20 pl-6 mb-4">
              "We do not inherit the earth from our ancestors; we borrow it from our children."
            </p>
          </div>
        </header>

        {/* MAIN CONTENT: IMAGE & STORY */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: The Image - FIXED STICKY BEHAVIOR */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="aspect-[3/4] overflow-hidden shadow-2xl relative rounded-sm"
            >
              <img 
                src="/image-3.png" 
                alt="The founder" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-beejam-beige/10 pointer-events-none" />
            </motion.div>
            <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.4em] opacity-30 text-center lg:text-left">
              Founder & Architect
            </p>
          </div>

          {/* Right: The Narrative */}
          <div className="lg:col-span-7 space-y-16 md:space-y-24">
            <section>
              <h3 className="font-heritage text-3xl mb-8 text-beejam-brown">The Awakening</h3>
              <div className="font-premium text-xl md:text-2xl opacity-80 leading-relaxed space-y-8 italic">
                <p>
                  Beejam was born from a moment of profound realization: that our modern food system is built on a foundation of geological dishonesty. We have spent the last century extracting health from the future to pay for the convenience of the present.
                </p>
                <p>
                  I saw our soil—once a vibrant, living archive of biological intelligence—transformed into a sterile, chemical-dependent medium. I saw the "Empty Food" crisis firsthand: fruits that look perfect on a shelf but offer nothing to the human cellular structure.
                </p>
              </div>
            </section>

            <section className="bg-beejam-brown text-beejam-beige p-8 md:p-16 rounded-sm shadow-xl relative overflow-hidden">
              {/* Subtle background texture/glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-beejam-clay/10 blur-3xl rounded-full -mr-16 -mt-16" />
              
              <h3 className="font-heritage text-2xl md:text-3xl mb-6 text-beejam-clay text-center uppercase tracking-[0.2em]">Why Beejam?</h3>
              <p className="font-premium text-xl md:text-3xl italic leading-tight text-center opacity-90">
                "I am doing this because there is no 'Plan B' for the soil. Beejam is my response to a biological debt. We are re-learning the art of productive silence—allowing the earth to heal so that it may, in turn, heal us."
              </p>
            </section>

            <section className="pt-10">
              <h3 className="font-heritage text-3xl mb-8 text-beejam-brown">The Commitment</h3>
              <div className="font-premium text-lg md:text-xl opacity-75 leading-relaxed space-y-8">
                <p>
                  Every acre we steward is a laboratory for the return of life. We are not just growing vegetables; we are rebuilding the carbon-sponge of the planet. We are restoring the relationship between the human hand and the indigenous seed.
                </p>
                <p>
                  This is my life's work—not to command the land, but to serve as its custodian, ensuring that the legacy we leave behind is as fertile as the one we found.
                </p>
              </div>
              
              <div className="mt-20 flex items-center gap-6">
                 <div className="h-[1px] w-16 bg-beejam-clay/40" />
                 <div>
                    <p className="font-heritage text-3xl text-beejam-brown tracking-tighter italic">The Founder</p>
                    <p className="font-sans text-[9px] uppercase tracking-[0.5em] mt-1 opacity-40 text-beejam-brown">Beejam Agriculture Protocol</p>
                 </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </motion.main>
  );
}