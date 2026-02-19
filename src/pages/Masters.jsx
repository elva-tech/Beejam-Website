export default function MasterPage({ name, quote, bio, image }) {
  return (
    <div className="min-h-screen pt-32 bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-sans text-xs tracking-[0.3em] uppercase opacity-40">The Masters of Natural Farming</span>
          <h1 className="font-heritage text-8xl mt-4">{name}</h1>
        </div>
        
        <div className="border-y border-beejam-brown/10 py-16 mb-16">
          <p className="font-premium text-4xl leading-snug text-center italic opacity-80">
            "{quote}"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 font-sans leading-relaxed text-lg">
          <div className="space-y-6">
            <p>{bio.para1}</p>
          </div>
          <div className="space-y-6">
            <p>{bio.para2}</p>
            <div className="p-8 bg-beejam-beige rounded-2xl border border-beejam-clay/20">
              <h4 className="font-heritage text-xl mb-2">Key Takeaway</h4>
              <p className="text-base italic opacity-70">{bio.takeaway}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}