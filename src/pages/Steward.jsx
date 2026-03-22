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
          
          {/* Left: The Image - FIXED STICKY & MOBILE COLOR */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="aspect-[3/4] overflow-hidden shadow-2xl relative rounded-sm group cursor-pointer"
            >
              <motion.img 
                src="/image-3.png" 
                alt="Sai Krishna E.L" 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                // Mobile color fix: stays black/white until tapped or hovered
                initial={{ filter: 'grayscale(100%) brightness(90%)' }}
                whileHover={{ filter: 'grayscale(0%) brightness(100%)' }}
                whileTap={{ filter: 'grayscale(0%) brightness(100%)' }}
              />
              {/* Minimalist Border - Hairline thin */}
              <div className="absolute inset-0 border-[1px] border-beejam-brown/10 pointer-events-none" />
            </motion.div>

            <div className="mt-8 text-center lg:text-left">
               <h2 className="font-heritage text-3xl text-beejam-brown tracking-tighter mb-1">
                 Sai Krishna E.L
               </h2>
               <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40">
                 Founder & Architect
               </p>
            </div>
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
                  I saw our soil—once a vibrant, living archive of biological intelligence—transformed into a sterile, chemical-dependent medium. I saw the "Empty Food" crisis firsthand.
                </p>
              </div>
            </section>

            <section className="bg-beejam-brown text-beejam-beige p-8 md:p-16 rounded-sm shadow-xl relative overflow-hidden">
              <h3 className="font-heritage text-2xl md:text-3xl mb-6 text-beejam-clay text-center uppercase tracking-[0.2em]">Why Beejam?</h3>
              <p className="font-premium text-xl md:text-3xl italic leading-tight text-center opacity-90">
                "I am doing this because there is no 'Plan B' for the soil. Beejam is my response to a biological debt."
              </p>
            </section>

            <section className="pt-10">
              <h3 className="font-heritage text-3xl mb-8 text-beejam-brown">The Commitment</h3>
              <div className="font-premium text-lg md:text-xl opacity-75 leading-relaxed space-y-8">
                <p>
                  Every acre we steward is a laboratory for the return of life. We are rebuilding the carbon-sponge of the planet. We are restoring the relationship between the human hand and the indigenous seed.
                </p>
              </div>
              
              <div className="mt-20 flex items-center gap-6">
                 <div className="h-[1px] w-16 bg-beejam-clay/40" />
                 <div>
                    <p className="font-heritage text-4xl text-beejam-brown tracking-tighter italic">The Founder</p>
                    <p className="font-sans text-[9px] uppercase tracking-[0.5em] mt-1 opacity-40 text-beejam-brown">Beejam Agriculture Protocol</p>
                 </div>
              </div>

              {/* CONTACT SECTION: THE PERSONAL CHANNEL */}
              <div className="mt-24 pt-12 border-t border-beejam-brown/10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4">Direct Channel</p>
                  <a href="mailto:founder@beejam.in" className="font-premium text-l hover:text-beejam-clay transition-colors block">
                    beejam.organics@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4">The Connection</p>
                  <a href="tel:+91XXXXXXXXXX" className="font-premium text-l hover:text-beejam-clay transition-colors block tracking-widest">
                    +91 96111 49957
                  </a>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </motion.main>
  );
}