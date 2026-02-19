import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: 'Philosophy', path: '/philosophy' },
    // { name: '1-Acre Blueprint', path: '/farm-system' },
    { name: 'Knowledge', path: '/knowledge' },
    { name: 'Families', path: '/for-families' },
    { name: 'Farmers', path: '/for-farmers' },
    { name: 'Landowners', path: '/for-landowners' },
    { name: 'Trust', path: '/transparency' },
    { name: 'Journal', path: '/journal' },
    { name: "Foundations", path: "/foundations" },
  ];

  /* scroll state (NO animation here) */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* GSAP animation runs ONLY when state changes */
  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      backgroundColor: scrolled
        ? 'rgba(36,48,34,0.65)'
        : 'rgba(36,48,34,1)',
      backdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)',
      duration: 0.45,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, [scrolled]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-[#f5f1e8]">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img style={{borderRadius:'5px'}} src="/logo.jpeg" alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex gap-6 font-sans text-[11px] tracking-[0.3em] uppercase opacity-60">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="hover:opacity-100 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#243022]/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="h-full flex flex-col justify-center items-center text-[#f5f1e8]"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6"
              >
                <X size={30} />
              </button>

              <div className="flex flex-col gap-6 font-sans text-[13px] tracking-[0.3em] uppercase">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
