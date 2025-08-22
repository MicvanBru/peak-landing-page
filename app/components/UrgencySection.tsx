export default function UrgencySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0f1629] to-[#0a0f1f] py-32 px-5">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-16 tracking-tight opacity-0 animate-fadeInUp">
          Look, Here&apos;s the Truth
        </h2>
        
        <div className="space-y-10 opacity-0 animate-fadeInUp [animation-delay:200ms]">
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-gray-200">
            <span className="text-white font-semibold">Every week you wait</span> is{' '}
            <span className="text-cyan-400 font-bold urgency-glow">
              another week of your life gone.
            </span>
          </p>
          
          <div className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-400 font-light space-y-2">
            <p>Another week of missing dinner.</p>
            <p>Another week of weekend work.</p>
            <p>Another week of being too tired to enjoy what you&apos;ve built.</p>
          </div>
          
          <div className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-300 space-y-2">
            <p>Those weeks add up to months.</p>
            <p>Those months become years.</p>
            <p className="text-red-400 font-bold animate-pulse">
              Years you&apos;ll never get back.
            </p>
          </div>
          
          <div className="pt-10 mt-10 border-t border-white/10">
            <p className="text-xl sm:text-2xl text-gray-400 italic font-light mb-8">
              I can&apos;t get those weeks back for you.
            </p>
            
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <p className="text-white font-semibold mb-2">But I can make sure</p>
              <p className="text-cyan-400 font-extrabold urgency-promise">
                you don&apos;t lose any more of them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}