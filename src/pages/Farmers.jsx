import { Link } from 'react-router-dom';

export default function Farmers() {
  const steps = [
    {
      title: "The Vow",
      desc:
        "A complete commitment to zero-chemical farming. This is not partial, seasonal, or experimental. Once inside Beejam, chemical inputs are permanently abandoned."
    },
    {
      title: "The Training",
      desc:
        "You will be trained in the Beejam 1-Acre Blueprint, soil biology fundamentals, and Zero Budget Natural Farming principles inspired by Subhash Palekar."
    },
    {
      title: "The Buyback",
      desc:
        "Beejam guarantees the purchase of your entire harvest at stable, pre-decided prices — insulating you from market volatility."
    }
  ];

  return (
    <div className="pt-32 bg-beejam-beige min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pb-32">

        <h1 className="font-heritage text-7xl mb-10">
          For Farmers
        </h1>

        <p className="font-premium text-2xl mb-16 opacity-80 leading-relaxed">
          Beejam does not hire farmers.
          We partner with those willing to rebuild soil,
          income stability, and dignity — slowly and honestly.
        </p>

        {/* CORE STEPS */}
        <div className="space-y-10 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="font-heritage text-2xl text-beejam-clay">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-premium text-xl font-bold mb-1">
                  {step.title}
                </h3>
                <p className="font-sans opacity-70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT THIS MEANS IN REAL LIFE */}
        <section className="mb-20">
          <h2 className="font-heritage text-4xl mb-6 text-beejam-clay">
            What this means in practice
          </h2>

          <div className="space-y-6 font-sans text-lg opacity-80 leading-relaxed">
            <p>
              Beejam farms are intentionally small and finite.
              We do not chase maximum yield.
              We design for soil recovery, predictable income,
              and long-term sustainability.
            </p>

            <p>
              This means your first year may not look impressive on paper.
              Yield stabilizes slowly as soil biology rebuilds.
              We plan for this.
            </p>

            <p>
              You are not pushed to overproduce,
              hide crop failures,
              or take loans to “fix” nature.
              Transparency is expected — even when results are uncomfortable.
            </p>
          </div>
        </section>

        {/* ECONOMICS */}
        <section className="mb-20">
          <h2 className="font-heritage text-4xl mb-6 text-beejam-clay">
            How farmers earn
          </h2>

          <div className="space-y-6 font-sans text-lg opacity-80 leading-relaxed">
            <p>
              Income at Beejam does not depend on volume.
              It depends on cost control, soil stability,
              and long-term relationships with families.
            </p>

            <p>
              Input costs reduce drastically over time.
              Debt is actively discouraged.
              Price certainty replaces market gambling.
            </p>

            <p>
              Farmers who seek rapid expansion,
              speculative profit,
              or shortcuts will find this system restrictive.
            </p>
          </div>
        </section>

        {/* WHO SHOULD NOT APPLY */}
        <section className="mb-24 bg-beejam-brown/5 p-10 rounded-3xl border border-beejam-brown/10">
          <h2 className="font-heritage text-4xl mb-6">
            Who should not partner with Beejam
          </h2>

          <ul className="space-y-4 font-sans text-lg opacity-80">

            <li>• Those unwilling to abandon chemical inputs completely.</li>
            <li>• Anyone uncomfortable with transparency and audits.</li>
            <li>• Farmers dependent on subsidies to survive.</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="font-premium text-xl opacity-70 mb-10">
            If you’ve read this fully and still feel aligned,
            we’d like to hear from you.
          </p>

          <Link
            to="/contact"
            state={{ role: "Farmer seeking soil recovery" }}
            className="
    inline-flex items-center justify-center
            px-16 py-6
            bg-beejam-beige
            text-beejam-brown
            font-heritage text-2xl
            tracking-widest uppercase
            rounded-full
            shadow-lg
            hover:shadow-xl
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-beejam-clay/40
          "
          >
            Partner with Beejam
          </Link>

        </div>

      </div>
    </div>
  );
}
