export default function UrgencySection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container-narrow text-center">
        <h2 className="heading-section text-foreground mb-header tracking-tight opacity-0 animate-fadeInUp">
          Here&apos;s The Reality:
        </h2>
        
        <div className="space-y-8 opacity-0 animate-fadeInUp [animation-delay:200ms]">
          <p className="text-fluid-lg leading-relaxed text-foreground">
            You need systems. You know it. We know it.
          </p>
          
          <p className="text-fluid-base leading-relaxed text-muted">
            We can build them for you, or you can keep doing everything manually for another year.
          </p>
          
          <p className="text-fluid-xl font-bold text-accent urgency-glow">
            Your call.
          </p>
        </div>
      </div>
    </section>
  );
}