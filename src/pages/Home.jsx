import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import HonestySection from '../sections/HonestySection';
import LoopDiagram from '../sections/LoopDiagram';
import RituChakra from '../sections/RituChakra';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollHeroRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollHeroRef.current,
        start: 'top top',
        end: '+=160%', // Reduced to prevent dead space for 2 frames
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // ONLY FRAME 1 & 2 ACTIVE
    tl.to('.frame-1', { opacity: 0, scale: 1.05, duration: 1 })
      .fromTo(
        '.frame-2',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1 }
      );
        // .fromTo('.frame-3', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 })
      // .to('.frame-3', { opacity: 0, scale: 1.1, duration: 1 })

      // .fromTo('.frame-4', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 });
  }, { scope: containerRef });

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="overflow-x-hidden bg-beejam-beige"
    >
      {/* ===== 1. INITIAL LANDING AREA (UNCHANGED) ===== */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-beejam-beige">
        <motion.img
          src="/logo.jpeg"
          alt="Beejam"
          className="w-24 h-auto md:w-32 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.p
          className="font-premium text-2xl md:text-4xl italic text-beejam-clay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A regenerative food system.
        </motion.p>
        <motion.p
          className="max-w-xl mt-4 text-sm md:text-base opacity-60 leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          We do not optimise yield. We optimise soil memory, <br />
          seasonal intelligence, and biological honesty.
        </motion.p>

        <motion.div
          className="mt-10 font-sans text-[11px] tracking-[0.3em] uppercase opacity-40 flex flex-col items-center gap-3 sm:flex-row sm:gap-6 sm:justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="hidden sm:inline">•</span>
          <span>Open-Farm Transparency</span>
          <span className="hidden sm:inline">•</span>
          <span>Regenerative by Design</span>
        </motion.div>
      </section>

      {/* ===== 2. PINNED SCROLLING NARRATIVE ===== */}
      <section ref={scrollHeroRef} className="relative h-screen overflow-hidden bg-beejam-beige">

        <div className="absolute inset-0 flex items-center justify-center">

          {/* FRAME 1 */}
          <div className="frame-1 absolute inset-0 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 pointer-events-none">

            <img
              src="/soil.png"
              alt="Soil"
              className="
                w-full md:w-1/2
                aspect-[16/9]
                h-[40vh] md:h-[55vh]
                object-cover
                grayscale
                hover:grayscale-0
                transition-all duration-700 ease-out
                brightness-95
                shadow-2xl
                rounded-xl
                pointer-events-auto
              "
            />

            <div className="w-full md:w-1/2 p-6 md:p-10 md:pl-16 backdrop-blur-sm bg-beejam-beige/30">
              <h3 className="font-heritage text-4xl md:text-7xl mb-4 md:mb-6">
                Soil is not dirt
              </h3>
              <p className="font-premium text-lg md:text-2xl opacity-80 leading-relaxed italic">
                It is a living intelligence built over centuries.
                Destroy it once, and generations pay the price.
              </p>
            </div>
          </div>

          {/* FRAME 2 */}
          <div className="frame-2 absolute inset-0 flex flex-col md:flex-row-reverse items-center justify-center max-w-7xl mx-auto px-6 opacity-0 pointer-events-none">

            <img
              src="/nutrition.png"
              alt="Nutrition"
              className="
                w-full md:w-1/2
                aspect-[16/9]
                h-[40vh] md:h-[65vh]
                object-cover
                grayscale
                hover:grayscale-0
                transition-all duration-700 ease-out
                brightness-95
                shadow-2xl
                rounded-xl
                pointer-events-auto
              "
            />

            <div className="w-full md:w-1/2 p-6 md:p-10 md:pr-16 text-left md:text-right backdrop-blur-sm bg-beejam-beige/30">
              <h3 className="font-heritage text-4xl md:text-7xl mb-4 md:mb-6">
                Yield is not nutrition
              </h3>
              <p className="font-premium text-lg md:text-2xl opacity-80 leading-relaxed italic">
                Quantity without micronutrients is an illusion of abundance.
                We feed the soil to feed the soul.
              </p>
            </div>
          </div>




{/* FRAME 3 (UNCHANGED) */}
          {/* <div className="frame-3 absolute inset-0 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 opacity-0 pointer-events-none">
            <img src="/hero-3.jpg" alt="Seasons" className="w-full md:w-1/2 h-[50vh] md:h-[70vh] object-cover grayscale brightness-90 shadow-2xl" />
            <div className="w-full md:w-1/2 p-10 md:pl-16 backdrop-blur-sm bg-beejam-beige/30">
              <h3 className="font-heritage text-5xl md:text-7xl mb-6">Seasons are instructions</h3>
              <p className="font-premium text-xl md:text-2xl opacity-80 leading-relaxed italic">
                Ignoring them breaks the body and the land equally. We farm in resonance with the Ritu.
              </p>
            </div>
          </div> */}

          {/* FRAME 4 (UNCHANGED) */}
          {/* <div className="frame-4 absolute inset-0 flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto px-6 opacity-0 pointer-events-none">
            <img src="/hero-4.jpg" alt="Regeneration" className="w-full md:w-1/2 h-[50vh] md:h-[70vh] object-cover grayscale brightness-90 shadow-2xl" />
            <div className="w-full md:w-1/2 p-10 md:pr-16 text-right backdrop-blur-sm bg-beejam-beige/30">
              <h3 className="font-heritage text-5xl md:text-7xl mb-6">Slow by design</h3>
              <p className="font-premium text-xl md:text-2xl opacity-80 leading-relaxed italic">
                Anything fast enough to impress usually destroys something unseen. Restoration is a patient art.
              </p>
            </div>
          </div> */}

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.5em] uppercase opacity-30 flex flex-col items-center">
          <span className="mb-2">Continue</span>
          <div className="w-[1px] h-12 bg-beejam-brown animate-pulse"></div>
        </div>

      </section>

      {/* ===== REST CODE (UNCHANGED) ===== */}
      <Suspense fallback={<div className="h-96" />}>
        <HonestySection />
      </Suspense>

      <Suspense fallback={null}>
        <LoopDiagram />
      </Suspense>

      <Suspense fallback={null}>
        <RituChakra />
      </Suspense>

      {/* 7. FINAL CTA */}
      <section className="py-60 text-center bg-beejam-brown text-beejam-beige relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none italic font-premium text-[25vw] leading-none"> Restoration </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heritage text-7xl md:text-9xl mb-8 leading-none"> Ready to <br /> reclaim? </h2>
          <p className="font-premium text-2xl italic mb-12 opacity-60 text-beejam-clay max-w-lg mx-auto"> Food is a biological covenant, not a commercial transaction. </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/knowledge" className="group relative inline-flex items-center justify-center px-12 py-5 bg-beejam-beige text-beejam-brown font-heritage text-2xl tracking-widest uppercase rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl" >
              <span className="relative z-10">Read the Repository</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}