'use client';

import { useState, useEffect, useRef } from 'react';

export default function Credibility() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className={`mb-16 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Here's What Nobody <span className="text-accent">Tells You</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Left Column - What Others Do */}
            <div className="relative">
              <div className="relative bg-card/30 backdrop-blur-sm border border-muted/10 rounded-2xl p-8 lg:p-10 h-full">
                {/* Subtle "X" overlay to indicate "wrong" approach */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5"/>
                    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-muted">Most "automation experts"...</h3>
                
                <div className="space-y-4">
                  <p className="text-lg text-foreground/70">
                    Have never actually run a business.
                  </p>
                  <p className="text-lg text-foreground/70">
                    They've read all the books. Taken all the courses. Got all the certifications.
                  </p>
                  <p className="text-lg text-foreground/70">
                    They know the theory inside and out.
                  </p>
                  <p className="text-lg text-foreground/70 italic">
                    They talk a good game about "10x productivity" and "scaling infinitely."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Real Experience */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 lg:p-10 h-full">
                {/* Subtle checkmark overlay to indicate "right" approach */}
                <div className="absolute top-4 right-4">
                  <svg className="w-8 h-8 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-accent">But here's the truth...</h3>
                
                <div className="space-y-4">
                  <p className="text-lg text-foreground/90 font-semibold">
                    They've never felt that 3am panic when a key client threatens to leave.
                  </p>
                  <p className="text-lg text-foreground/90 font-semibold">
                    They've never had to choose between payroll and rent.
                  </p>
                  <p className="text-lg text-foreground/90 font-semibold">
                    They've never watched their family eat dinner alone while they handle another "emergency."
                  </p>
                  <p className="text-xl text-accent font-bold mt-6">
                    I have.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statement - The Differentiator */}
          <div className={`relative transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-gradient-to-r from-transparent via-accent/5 to-transparent p-12 rounded-3xl">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full"></div>
              
              <div className="relative text-center space-y-6">
                <p className="text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto">
                  That's why I don't build cute automations that save you 5 minutes.
                </p>
                
                {/* The Bold Statement */}
                <div className="pt-4">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent leading-tight">
                    I build the stuff that gives you your
                    <span className="block mt-2 text-4xl sm:text-5xl lg:text-6xl">
                      actual life back.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional credibility points */}
          <div className={`mt-16 grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">7 Years</div>
              <p className="text-muted">Running real businesses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">$2M+</div>
              <p className="text-muted">In time saved for clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">40+ Hours</div>
              <p className="text-muted">Given back per week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-accent/3 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
}