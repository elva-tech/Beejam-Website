import { Link } from 'react-router-dom';



export default function Landowners() {

  return (

    <div className="pt-32 pb-28 bg-beejam-brown text-beejam-beige min-h-screen">

      <div className="max-w-4xl mx-auto px-6 text-center">



        <h1 className="font-heritage text-7xl mb-12">

          Urban Landowners

        </h1>



        <p className="font-premium text-3xl mb-20 leading-snug opacity-90">
Own a piece of the earth? Don't let it sit idle or be poisoned. Let Beejam manage it. We turn your property into a high-biodiversity natural farm.

        </p>



        {/* CORE MODEL */}

        <div className="grid md:grid-cols-3 gap-10 text-left border-t border-beejam-beige/20 pt-16 mb-20">



          <div>

            <h4 className="font-heritage text-xl text-beejam-clay mb-4">

              Restore

            </h4>

            <p className="font-sans opacity-70 leading-relaxed">

              We regenerate soil using proven natural farming methods

              inspired by Masanobu Fukuoka and Subhash Palekar.

              No chemicals. No soil mining.

            </p>

          </div>



          <div>

            <h4 className="font-heritage text-xl text-beejam-clay mb-4">

              Manage

            </h4>

            <p className="font-sans opacity-70 leading-relaxed">

              A Beejam-trained farmer is placed on-site.

              Beejam manages operations, compliance, crop planning,

              and reporting — end to end.

            </p>

          </div>



          <div>

            <h4 className="font-heritage text-xl text-beejam-clay mb-4">

              Steward

            </h4>

            <p className="font-sans opacity-70 leading-relaxed">

              Your land contributes to food security, biodiversity,

              and farmer livelihoods while remaining legally yours.

              Ownership and exit terms are respected.

            </p>

          </div>



        </div>



        {/* SAFEGUARDS */}

        <div className="bg-beejam-beige/10 border border-beejam-beige/20 rounded-3xl p-10 mb-24 text-left">

          <h3 className="font-heritage text-3xl mb-6 text-beejam-clay">

            What landowners usually ask

          </h3>



          <div className="space-y-6 font-sans opacity-80 leading-relaxed">

            <p>

              <strong>Do I lose control of my land?</strong><br />

              No. Beejam operates under clear agreements.

              Ownership and boundaries remain unchanged.

            </p>

            <p>
              <strong>Is this a lease or a partnership?</strong><br />
              It is a stewardship partnership.
             Terms are defined upfront and revisited periodically.
            </p>

            <p>
              <strong>What if I want to exit?</strong><br />
              Exit clauses are built in.
              Soil health improvements remain an asset to you.
            </p>
          </div>
        </div>

        <Link
          to="/contact"
           state={{ role: "Urban Landowner" }}
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
        Talk to Beejam
        </Link>
        <p className="mt-6 text-xs uppercase tracking-widest opacity-40">
          Initial conversations are exploratory, not commitments.
        </p>
      </div>
    </div>

  );

}
