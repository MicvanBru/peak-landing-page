'use client';

import Button from '@/components/buttons/Button';

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
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Does This Sound Like <span className="text-accent">You?</span>
            </h2>
          </div>

          {/* Pain Points List */}
          <div className="space-y-3 max-w-3xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-2 rounded-lg hover:bg-card/50 transition-colors duration-200"
              >
                {/* Simple bullet */}
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                
                {/* Pain point text */}
                <p className="text-lg text-foreground/85">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button
              href="/system-audit"
              asLink
              variant="primary"
              size="lg"
              className="text-black shadow-2xl"
            >
              Get My Time Back Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}