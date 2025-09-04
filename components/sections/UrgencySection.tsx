export default function UrgencySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0f1629] to-[#0a0f1f] py-20 lg:py-32 px-5">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-16 tracking-tight opacity-0 animate-fadeInUp">
          Here&apos;s The Reality:
        </h2>
        
        <div className="space-y-10 opacity-0 animate-fadeInUp [animation-delay:200ms]">
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-gray-200">
            You need systems. You know it. We know it.
          </p>
          
          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-300">
            We can build them for you, or you can keep doing everything manually for another year.
          </p>
          
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 urgency-glow">
            Your call.
          </p>
        </div>
      </div>
    </section>
  );
}