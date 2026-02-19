import React from 'react';
import { Link } from 'react-router-dom';

export default function Families() {
  return (
    <div className="pt-32 bg-beejam-beige text-beejam-brown">
      <div className="max-w-5xl mx-auto px-6 pb-24">

        <h1 className="font-heritage text-7xl mb-12">For Families</h1>

        {/* Intro context */}
        <p className="font-premium text-2xl opacity-70 max-w-3xl mb-20 leading-relaxed">
          Beejam is not a grocery service.
          It is a long-term relationship between your family, the land,
          and the farmer who feeds you.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — DETAILS */}
          <div className="space-y-16">

            <section>
              <h2 className="font-premium text-3xl mb-4 text-beejam-clay underline decoration-1 underline-offset-8">
                What you receive
              </h2>
              <ul className="space-y-4 font-sans text-lg opacity-80">
                <li>• Seasonal, lab-tested vegetables grown on fixed acreage.</li>
                <li>• Direct connection to the farmer growing your food.</li>
                <li>• Open invitation to visit the farm and see practices firsthand.</li>
                <li>• Food grown without exhausting soil or exploiting labor.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-premium text-3xl mb-4 text-beejam-clay underline decoration-1 underline-offset-8">
                What you must accept
              </h2>
              <ul className="space-y-4 font-sans text-lg opacity-80">
                <li>• Nature decides the supply. We do not force growth.</li>
                <li>• No cosmetic perfection. Real food has variation.</li>
                <li>• Complete transparency — including failures and shortfalls.</li>
              </ul>
            </section>

            {/* NEW — Clear expectations */}
            <section>
              <h2 className="font-premium text-3xl mb-4 text-beejam-clay underline decoration-1 underline-offset-8">
                What this is not
              </h2>
              <ul className="space-y-4 font-sans text-lg opacity-80">
                <li>• This is not an on-demand grocery subscription.</li>
                <li>• This is not year-round access to every vegetable.</li>
                <li>• This is not a discount-driven organic brand.</li>
              </ul>
            </section>

            {/* NEW — Why price exists */}
            <section>
              <h2 className="font-premium text-3xl mb-4 text-beejam-clay underline decoration-1 underline-offset-8">
                Why families choose Beejam
              </h2>
              <p className="font-sans text-lg opacity-80 leading-relaxed">
                Beejam families are not paying for vegetables alone.
                They are funding soil regeneration, fair farmer income,
                and a system that refuses to grow beyond ecological limits.
                This cost reflects restraint — not luxury.
              </p>
            </section>

          </div>

          {/* RIGHT — ACTION CARD */}
          <div className="bg-beejam-brown p-12 rounded-3xl text-beejam-beige sticky top-32">
            <h3 className="font-heritage text-3xl mb-6">
              A Conscious Choice
            </h3>

            <p className="font-premium text-xl mb-8 opacity-90 leading-relaxed">
              Typical urban families spend ₹25,000–₹35,000 per month on groceries
              without knowing where their food comes from.
              Beejam families choose to spend consciously —
              investing in their health and the farmer’s dignity.
            </p>

            {/* FIXED — ROUTING */}
            <Link
              to="/contact"
              state={{ role: "Family seeking honest food" }}
              className="block text-center w-full py-4 border border-beejam-beige/30 hover:bg-beejam-beige hover:text-beejam-brown transition-all font-heritage text-2xl tracking-widest uppercase"
            >
              Request to Join
            </Link>


            <p className="mt-4 text-xs text-center opacity-40 uppercase tracking-tighter">
              We currently maintain a waitlist to protect farm capacity.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
