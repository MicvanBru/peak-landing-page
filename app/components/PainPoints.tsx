'use client';

import { useState, useEffect, useRef } from 'react';

const painPoints = [
  "Can't step away without something breaking",
  "Choosing which fire NOT to put out today",
  "Working after everyone's asleep because it's the only quiet time",
  "That sick feeling when you see how many hours you worked",
  "Telling yourself \"next month will be different\" (but it never is)"
];

export default function PainPoints() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12">
            You Know <span className="text-accent">Exactly</span> What I'm Talking About
          </h2>

          {/* Pain Points List */}
          <div className={`space-y-3 mb-12 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group transition-colors duration-200 hover:text-accent/90"
              >
                {/* Checkmark */}
                <svg 
                  className="w-5 h-5 text-accent mt-1 flex-shrink-0"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                {/* Text */}
                <p className="text-lg text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className={`text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl text-foreground/80">
              You didn't sign up for this. You wanted{" "}
              <span className="text-accent font-semibold">freedom</span>.
            </p>
            <p className="text-xl text-foreground/80 mt-2">
              Instead, you're <span className="text-accent font-semibold">chained to your desk</span>, 
              prisoner to something you created.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}