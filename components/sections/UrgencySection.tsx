export default function UrgencySection() {
  return (
    <section className="relative overflow-hidden diagonal-cut-top mesh-gradient-2 py-32 lg:py-40 px-6"
             style={{ background: 'linear-gradient(135deg, hsl(220 20% 12%) 0%, hsl(220 25% 8%) 100%)' }}>
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
          
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-animated urgency-glow">
            Your call.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-400/8 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-cyan-400/5 rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
}