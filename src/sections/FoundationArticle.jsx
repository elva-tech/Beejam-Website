import { useParams, Link } from 'react-router-dom';

const CONTENT = {
fukuoka: {
    title: "Masanobu Fukuoka",
    text: `
Masanobu Fukuoka was a Japanese farmer and philosopher
best known for his book *The One-Straw Revolution*.

He argued that most agricultural intervention
was based on human arrogance rather than necessity.

Fukuoka advocated:
• No tilling
• No chemical fertilizers
• No pesticides
• No unnecessary weeding

His principle of “do-nothing farming”
did not mean inaction,
but minimal interference with natural processes.

He repeatedly emphasized that nature,
when not disrupted,
maintains balance on its own.
    `,
    quote: `“The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.”`,
  },

  palekar: {
    title: "Subhash Palekar",
    text: `
Subhash Palekar is an Indian agriculturalist
known for formulating Zero Budget Natural Farming (ZBNF).

His work focused on the economic collapse of farmers
caused by chemical input dependency.

Palekar consistently argued that:
• High yields are meaningless if input costs rise faster
• Debt, not climate, is the primary farmer crisis
• Indigenous cow-based inputs restore soil biology

ZBNF emphasizes farm-made inputs,
local resources, and elimination of external dependency.
    `,
    quote: `“Chemical farming has pushed farmers into debt. Natural farming brings them out of it.”`,
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
}

export default function FoundationArticle() {
  const { slug } = useParams();
  const article = CONTENT[slug];

  if (!article) {
    return <div className="pt-40 text-center">Not found</div>;
  }

  return (
    <div className="pt-32 pb-20 px-6 bg-beejam-beige text-beejam-brown min-h-screen">
      <div className="max-w-3xl mx-auto">

        <h1 className="font-heritage text-6xl mb-10">
          {article.title}
        </h1>

        <p className="font-premium text-xl whitespace-pre-line leading-relaxed opacity-80">
          {article.text}
        </p>

        <blockquote className="mt-10 border-l-4 border-beejam-clay pl-6 italic text-xl">
          {article.quote}
        </blockquote>

        <Link to="/foundations" className="block mt-10 underline">
          Back
        </Link>

      </div>
    </div>
  );
}
