import React from 'react';

export default function Home() {
  return (
    <main className="pt-20">

      {/* Philosophy Teaser */}
      <section className="bg-beejam-brown text-beejam-beige py-32 px-10">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="font-heritage text-5xl mb-10">
            The Message
          </h2>

          {/* Core Quote */}
          <p className="font-premium text-3xl leading-relaxed opacity-95">
            “Natural farming is not a choice.  
            It is an effort to correct long-term imbalances in agriculture.”
          </p>

          <div className="mt-6 font-sans text-xs tracking-widest uppercase opacity-50">
            — Subhash Palekar
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-beejam-beige opacity-30 mx-auto my-14"></div>

          {/* Educational Content */}
          <div className="space-y-8 text-lg font-sans leading-relaxed opacity-85 text-left md:text-center">
            <p>
              Over the decades, agriculture has focused heavily on short-term productivity.
              While this approach increased output, it also introduced challenges such as
              declining soil health, rising cultivation costs, and increased dependence on external inputs.
            </p>

            <p>
              Natural farming does not dismiss modern science.
              Instead, it encourages closer attention to soil biology, crop diversity,
              and natural processes that support long-term stability.
            </p>

            <p>
              When soil is treated as a living system rather than a production surface,
              farms tend to become more resilient to climate stress, input price fluctuations,
              and ecological damage.
            </p>
          </div>

          {/* Gentle Closing Line */}
          <div className="mt-16 font-premium text-2xl opacity-90">
            “Sustainable farming begins by understanding the land,  
            not overpowering it.”
          </div>

        </div>
      </section>

    </main>
  );
}
