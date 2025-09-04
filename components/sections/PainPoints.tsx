'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const painPoints = [
  "Can't take a day off without everything backing up",
  "Doing the same tasks every week that should be automated",
  "Working nights and weekends just to keep up",
  "Watching your competitors grow while you're stuck in the daily grind",
  "Knowing you need systems but having zero time to build them"
];

export default function PainPoints() {
  const { elementRef } = useIntersectionObserver<HTMLHeadingElement>();

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden diagonal-cut-top-reverse diagonal-cut-bottom mesh-gradient-2"
             style={{ background: 'linear-gradient(135deg, var(--secondary-bg) 0%, var(--primary-bg) 100%)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 ref={elementRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white animated-underline">
              Does This Sound Like <span className="gradient-text-animated">You?</span>
            </h2>
          </div>

          {/* Pain Points List */}
          <div className="space-y-3 max-w-3xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl light-beam glass-card-hover transition-all duration-300"
              >
                {/* Simple bullet */}
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                
                {/* Pain point text */}
                <p className="text-lg text-gray-300">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle cyan overlay */}
      <div className="absolute inset-0 bg-cyan-400/2 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-400/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}