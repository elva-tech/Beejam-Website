import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FarmSystem() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=1600',
        pin: true,
        scrub: true,
      },
    });

    /* STEP 1 — what this diagram is */
    tl.from('.explain-1', {
      opacity: 0,
      y: 20,
      duration: 1,
    });

    /* STEP 2 — explain the grid */
    tl.from('.explain-2', {
      opacity: 0,
      y: 20,
      duration: 1,
    });

    /* STEP 3 — fill beds SLOWLY across scroll */
    tl.to('.family-bed', {
      backgroundColor: '#a68a64',
      stagger: {
        each: 0.15,
      },
      duration: 6, // LONG on purpose
      ease: 'none', // important: no easing
    });

    /* STEP 4 — refusal explanation */
    tl.from('.explain-3', {
      opacity: 0,
      y: 20,
      duration: 1,
    });

    /* STEP 5 — consequence explanation (END) */
    tl.from('.explain-4', {
      opacity: 0,
      y: 20,
      duration: 1,
    });
  }, { scope: container });
  

  return (
    <div ref={container} className="bg-beejam-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — VISUAL SYSTEM */}
        <div>
          <p className="font-sans text-sm uppercase tracking-widest opacity-60 mb-6">
            One acre • fixed capacity
          </p>

          <div className="grid grid-cols-10 gap-1 w-full aspect-square max-w-[480px] mx-auto border border-beejam-brown/20 p-2">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className={`w-full h-full rounded-sm border border-beejam-brown/10 ${
                  i < 10 ? 'family-bed bg-transparent' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-6 mt-6 text-xs font-sans opacity-70">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-beejam-clay inline-block" />
              <span>Food beds (1 per family)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-beejam-brown/30 inline-block" />
              <span>Land not used for production</span>
            </div>
          </div>
        </div>

        {/* RIGHT — SIMPLE EXPLANATION */}
        <div className="space-y-14 blueprint-text">
               <p className="font-sans text-sm uppercase tracking-widest opacity-60 mb-6">
            Please Scroll to continue.
          </p>
          <div className="explain-1">
            <h1 className="font-heritage text-6xl mb-6 uppercase tracking-tighter">
              The 1-Acre Blueprint
            </h1>
            <p className="font-premium text-2xl opacity-80">
              This page shows how much food one acre of land can safely produce.
              There is no symbolism here. This is a capacity limit.
            </p>
          </div>

          <div className="explain-2">
            <p className="font-sans text-lg leading-relaxed opacity-80">
              We divide one acre into 100 small growing beds.
              Each bed represents a controlled portion of land.
            </p>
          </div>

          <div className="explain-3">
            <p className="font-sans text-lg leading-relaxed opacity-80">
              As you scroll, each bed fills one by one.
              Each filled square represents food grown for one family.
            </p>

            <blockquote className="border-l-4 border-beejam-clay pl-6 italic text-beejam-brown font-premium text-xl mt-6">
              “Only ten families are supported per acre.”
            </blockquote>
          </div>

          <div className="explain-4">
            <p className="font-sans text-lg leading-relaxed opacity-80">
              When the tenth bed is filled, the system stops.
              Producing more would damage the soil.
            </p>

            <p className="mt-4 font-sans text-lg leading-relaxed opacity-80">
              This is why Beejam does not scale endlessly.
              The land decides the limit — not demand.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
