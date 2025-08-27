'use client';

import { useState, useEffect, useRef } from 'react';

export default function StorySection() {
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

  const storyParagraphs = [
    {
      text: "Three years ago, I was running a YouTube agency with my wife. We had over 100,000 subscribers, three employees, and I was working 70-80 hour weeks just to keep everything running.",
      delay: 0
    },
    {
      text: "I was the bottleneck for everything. Video editing, client management, finances, strategy - it all went through me. We were always one month from financial collapse, constantly in reaction mode.",
      delay: 100
    },
    {
      text: "Then one day, leaving my mom's house, I started having what I thought was a heart attack. Couldn't breathe, chest crushing, convinced I was dying. Drove straight to the ER.",
      delay: 200,
      emphasis: true
    },
    {
      text: "\"You're having a panic attack,\" the doctor said.",
      delay: 300,
      quote: true
    },
    {
      text: "That should have been my wake-up call. It wasn't. I went back to work the next day.",
      delay: 400
    },
    {
      text: "When COVID hit, everything I'd feared happened. We lost 90% of our clients in three weeks. The business died. I went into debt trying to save it.",
      delay: 500
    },
    {
      text: "But here's the thing - there was relief in that failure. The crushing anxiety lifted because there was nothing left to save.",
      delay: 600,
      insight: true
    },
    {
      text: "I took a job at Think Media, and that's when everything clicked. I saw they were doing the same manual tasks I used to do. So I started building systems that did the things I didn't want to do, so I could spend my time doing what I was actually good at.",
      delay: 700
    },
    {
      text: "Within months, I went from working 45 hours to doing the same work in 15 hours.",
      delay: 800,
      highlight: true
    },
    {
      text: "That's when I realized: It wasn't about working harder or hiring more people. It was about building systems to handle the work that was eating my time.",
      delay: 900,
      insight: true
    },
    {
      text: "I rebuilt my own business using this approach. Now I work 30-40 hours by choice. The business makes more money with less stress. And when my son was born, I was actually there - not checking emails during labor, not worried about what was breaking. Just present.",
      delay: 1000
    },
    {
      text: "Now we build these same systems for other business owners. Because I know what it's like when your business owns you. And I know exactly how to flip that equation.",
      delay: 1100,
      conclusion: true
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className={`mb-16 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              How I Went From <span className="text-accent">45 Hours</span> to <span className="text-accent">15</span>
            </h2>
          </div>

          {/* Story Content */}
          <div className="relative">
            {/* Background card with subtle gradient */}
            <div className="relative bg-card/30 backdrop-blur-sm border border-muted/10 rounded-3xl p-8 lg:p-12">
              {/* Subtle accent line on the left */}
              <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-transparent via-accent/30 to-transparent rounded-full"></div>
              
              {/* Story paragraphs */}
              <div className="space-y-6 relative">
                {storyParagraphs.map((paragraph, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      visible 
                        ? `opacity-100 translate-y-0` 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      transitionDelay: visible ? `${paragraph.delay}ms` : '0ms' 
                    }}
                  >
                    {paragraph.quote ? (
                      <blockquote className="pl-6 border-l-4 border-accent/50 py-2">
                        <p className="text-xl lg:text-2xl text-accent font-semibold italic">
                          {paragraph.text}
                        </p>
                      </blockquote>
                    ) : paragraph.emphasis ? (
                      <p className="text-lg lg:text-xl text-foreground/90 font-semibold">
                        {paragraph.text}
                      </p>
                    ) : paragraph.highlight ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent/10 blur-2xl"></div>
                        <p className="relative text-xl lg:text-2xl text-accent font-bold text-center py-4">
                          {paragraph.text}
                        </p>
                      </div>
                    ) : paragraph.insight ? (
                      <p className="text-lg lg:text-xl text-foreground font-medium bg-gradient-to-r from-transparent via-accent/5 to-transparent py-4 px-2 rounded-lg">
                        {paragraph.text}
                      </p>
                    ) : paragraph.conclusion ? (
                      <div className="mt-8 pt-8 border-t border-muted/20">
                        <p className="text-lg lg:text-xl text-foreground/90 font-semibold">
                          {paragraph.text}
                        </p>
                      </div>
                    ) : (
                      <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
                        {paragraph.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA - subtle but present */}
              <div className={`mt-12 pt-8 border-t border-muted/20 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: visible ? '1200ms' : '0ms' }}>
                <div className="text-center">
                  <p className="text-xl text-foreground/90 mb-6">
                    Ready to get <span className="font-bold text-accent">your</span> life back?
                  </p>
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)] glow-cyan-sm">
                    <span className="relative z-10">Start Your Transformation</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(180_90%_65%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators - subtle social proof */}
          <div className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: visible ? '1300ms' : '0ms' }}>
            <div className="flex items-center gap-2 text-muted">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm">Verified Story</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-sm">Real Results</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-sm">3 Years Later</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements - subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/2 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/3 rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
}