import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuoteRotator from '../components/QuoteRotator';

const CONTENT = {
  purpose: {
    title: "Why Farming Exists",
    text: `
Farming did not begin as an industry; it began as a biological covenant. Anthropological records show that early agriculture emerged to ensure food continuity, not profit. The goal was stability—not maximization. Only in the last 150 years did we shift from sustenance to extraction. When food became a commodity, the soil was downgraded to an input, and the farmer was reduced to a machine operator. This shift solved short-term hunger but created a long-term geological debt that our children will have to pay.

This shift solved short-term hunger,
but created long-term dependency.
    `,
  },

  history: {
    title: "History of Soil",
    text: `
Soil is not dirt, it is a biological archive. Traditional cultures understood that soil has memory—it remembers the rains of a decade ago and the minerals of a century past. Industrial agriculture reframed soil as a neutral medium requiring chemical correction. By treating it like a blank slate, we erased its self-regeneration.

Dead soil must be supported.
Living soil supports itself.
    `,
  },
  rhythms: {
    title: "Nakshatras & Rain",
    text: `
Traditional Indian agriculture followed observational calendars.

Farmers tracked rainfall patterns,
soil moisture,
wind behavior,
and celestial markers like Nakshatras.

These were not religious practices,
but long-term empirical observations.

Modern systems replaced observation with schedules.
The loss of local listening reduced resilience to climate variation.
    `,
  },
};

export default function KnowledgeArticle() {
  const { slug } = useParams();
  const article = CONTENT[slug];

  if (!article) {
    return (
      <div className="pt-40 text-center">
        <p>Content not found.</p>
        <Link to="/knowledge" className="underline">Back to Knowledge</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-beejam-beige text-beejam-brown">
      <div className="max-w-3xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heritage text-6xl mb-10"
        >
          {article.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-premium text-xl leading-relaxed whitespace-pre-line opacity-85 space-y-6"
        >
          {article.text}

          {article.quote && (
            <blockquote className="mt-10 border-l-4 border-beejam-clay pl-6 italic opacity-90">
              {article.quote}
            </blockquote>
          )}
        </motion.div>

      </div>
      <QuoteRotator />
    </div>
  );
}
