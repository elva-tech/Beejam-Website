

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [ "Healthy soil is not dirt. It is a living system.",
  "Agriculture fails when it forgets regeneration.",
  "Short-term yield hides long-term damage.",
  "Food security begins with soil security.",
  "Farming is ecology before it is economics.",
  "Nature does not need force. It needs patience.",
  "High output means nothing without sustainability.",
  "Soil fertility cannot be manufactured indefinitely.",
  "The land remembers how it is treated.",
  "Extraction creates speed. Regeneration creates time.",
  "Chemical dependence is economic dependence.",
  "A farm should reduce inputs every year, not increase them.",
  "Yield is not profit if debt grows faster.",
  "Living systems collapse when pushed beyond limits.",
  "Agriculture is local knowledge applied daily.",
  "Healthy food cannot come from unhealthy soil.",
  "Farming succeeds when observation guides action.",
  "The cheapest input is understanding.",
  "Sustainability is not a trend. It is a boundary.",
  "A resilient farm survives variation.",
  "Nature compounds slowly but reliably.",
  "Soil health is national health.",
  "True productivity protects the future.",
  "Farming is not control. It is cooperation.",
  "Damage hidden today appears tomorrow.",
  "Food systems reflect value systems.",
  "Debt is the most dangerous pesticide.",
  "Regeneration costs less than repair.",
  "The land always sends signals. Listening is optional.",
  "Agriculture collapses when limits are ignored." ];

export default function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * QUOTES.length));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 flex items-center justify-center text-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 100 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="font-premium text-xl opacity-60 italic"
        >
          {QUOTES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
