import React from 'react';
import { motion } from 'framer-motion';
import { ShieldOff, Eye, Handshake } from 'lucide-react';

export default function Philosophy() {
  return (
    <div className="pt-32 pb-20 bg-beejam-beige text-beejam-brown">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-heritage text-7xl mb-12"
        >
          Our Cultural Firewall
        </motion.h1>

        {/* WHY */}
        <section className="mb-24">
          <h2 className="font-premium text-3xl mb-6">Why Beejam exists</h2>
          <p className="font-premium text-xl leading-relaxed opacity-80">
          <span className='italic'>Farming is not an industry,</span> it is a biological service. Beejam exists because the 
            bridge between the city and the soil has been broken by chemicals and greed. 
            We are here to rebuild that bridge using trust as the primary mortar.
          </p>
        </section>

        {/* VISUAL BREAK (NEW) */}
        <section className="mb-32">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
              alt="Living soil and farming"
              className="w-full h-[420px] object-cover grayscale"
            />
            <div className="absolute inset-0 bg-beejam-brown/40 flex items-center justify-center">
              <p className="font-premium text-2xl text-beejam-beige max-w-xl text-center opacity-90">
                Systems built on extraction eventually collapse.  
                Systems built on biology compound.
              </p>
            </div>
          </div>
        </section>

        {/* NON-NEGOTIABLES */}
        <section className="mb-24 border-t border-beejam-brown/20 pt-12">
          <h2 className="font-heritage text-4xl mb-10 text-beejam-clay">
            What we will never do
          </h2>
          <div className="grid md:grid-cols-2 gap-12 font-sans uppercase tracking-widest text-sm">
            <div className="space-y-4">
              <p className="border-l-2 border-beejam-brown pl-4">
                Never use "Organic" as a marketing shield.
              </p>
              <p className="border-l-2 border-beejam-brown pl-4">
                Never prioritize yield over soil health.
              </p>
              <p className="border-l-2 border-beejam-brown pl-4">
                Never hide a failure from our families.
              </p>
            </div>
            <div className="space-y-4">
              <p className="border-l-2 border-beejam-brown pl-4">
                Never squeeze a farmer on price.
              </p>
              <p className="border-l-2 border-beejam-brown pl-4">
                Never scale faster than the soil allows.
              </p>
              <p className="border-l-2 border-beejam-brown pl-4">
                Never automate human relationships.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT BEEJAM IS NOT (ICON FIXED) */}
        <section className="bg-beejam-brown text-beejam-beige p-12 rounded-3xl mb-24">
          <h2 className="font-heritage text-4xl mb-10">
            What Beejam is NOT
          </h2>

          <div className="grid md:grid-cols-2 gap-8 opacity-90 font-premium">
            <div className="flex gap-4 items-start">
              <ShieldOff size={22} />
              <p>We are not an e-commerce grocery app.</p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldOff size={22} />
              <p>We are not a discount-driven startup.</p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldOff size={22} />
              <p>We are not a volume-first aggregator.</p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldOff size={22} />
              <p>We are not a greenwashed corporate entity.</p>
            </div>
          </div>
        </section>

        {/* VALUES SNAPSHOT (NEW, SMALL, STRONG) */}
        <section className="mb-24 grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-4 opacity-80">
            <Eye size={28} />
            <p className="uppercase tracking-widest text-xs">
              Radical Transparency
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 opacity-80">
            <Handshake size={28} />
            <p className="uppercase tracking-widest text-xs">
              Shared Risk
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 opacity-80">
            <ShieldOff size={28} />
            <p className="uppercase tracking-widest text-xs">
              No Shortcuts
            </p>
          </div>
        </section>

        {/* CLOSING */}
        <section className="text-center italic">
          <p className="font-premium text-2xl opacity-60">
            "Our real competition is not other brands, it is the collective 
            indifference toward the earth."
          </p>
        </section>

      </div>
    </div>
  );
}
