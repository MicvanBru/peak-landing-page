'use client';

const painPoints = [
  "Can't take a day off without everything backing up",
  "Doing the same tasks every week that should be automated",
  "Working nights and weekends just to keep up",
  "Watching your competitors grow while you're stuck in the daily grind",
  "Knowing you need systems but having zero time to build them"
];

export default function PainPoints() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Does This Sound Like <span className="text-accent">You?</span>
            </h2>
          </div>

          {/* Opening Statement */}
          <div className="mb-12">
            <div className="text-center space-y-4">
              <p className="text-xl lg:text-2xl text-foreground/90">
                You&apos;re working <span className="font-bold text-accent">70+ hours a week</span>. 
                Not because the work requires it - because <span className="font-bold">everything runs through you</span>.
              </p>
              <p className="text-lg lg:text-xl text-foreground/80">
                Every task. Every decision. Every question.
              </p>
              <p className="text-lg lg:text-xl font-semibold text-foreground">
                You already know this isn&apos;t sustainable.
              </p>
            </div>
          </div>

          {/* Pain Points List */}
          <div className="space-y-2 max-w-3xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-card/50 transition-colors duration-200"
              >
                {/* Simple bullet */}
                <div className="w-2 h-2 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                
                {/* Pain point text */}
                <p className="text-lg text-foreground/85">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}