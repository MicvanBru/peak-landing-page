'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/buttons';

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

  const storyContent = [
    {
      type: 'section',
      content: [
        "Every task went through me, video editing, client management, finances, strategy, coordinating brand deals, tracking deliverables, and… well, you get the idea.",
        "I was the bottleneck for everything.",
        "I knew we needed systems. Every business book said so. But here's the problem nobody talks about: When you're drowning in work, you can't stop long enough to build the boat that would save you."
      ],
      delay: 0
    },
    {
      type: 'section',
      header: 'When COVID hit, we lost 90% of our clients. The business collapsed.',
      content: [
        "I took a job at Think Media. And for the first time in years, I had room to breathe.",
        "They had the same operational chaos I'd dealt with - content workflows, team coordination, project tracking. But now I had time to do something about it."
      ],
      delay: 200
    },
    {
      type: 'section',
      header: 'I started building systems, but not the kind you\'re thinking of.',
      content: [
        "Not basic Zapier connections. Not simple templates. I built systems that handled the messy reality of how work actually flows - all the exceptions, edge cases, and \"but what if\" scenarios that make business complicated.",
        "I'll show you exactly how they work in a minute, but...",
        "Here's what happened: Tasks that took hours started happening automatically. Not just the simple stuff - complex multi-step processes that everyone said \"had to be done manually.\""
      ],
      delay: 400
    },
    {
      type: 'section',
      header: 'Now I work 20-40 hours a week by choice.',
      content: [
        "Not because I'm working less hard - because systems handle what used to eat up my life.",
        "When my son was born, I was actually there. Not checking emails during labor. Not worried about what was breaking. Just present.",
      ],
      delay: 600
    },
    {
      type: 'section',
      header: 'But I had to know - would this work for other businesses too?',
      content: [
        "So I took what I'd built and started creating systems for other business owners. The process was straightforward:",
        "• **Audit** where your time actually goes",
        "• **Optimize** your workflow to work smarter", 
        "• **Build** systems that run automatically",
        "• **Relax** while systems handle the work"
      ],
      delay: 800
    },
    {
      type: 'section',
      header: 'The results were consistent across every business.',
      content: [],
      delay: 900
    },
    {
      type: 'section',
      header: 'Every business owner I work with says the same thing:',
      content: [
        "\"I can't believe we used to do this manually.\"",
        "I get it. Three years ago, I was doing everything manually too.",
        "The difference is, now I know exactly how to fix it. And more importantly, I can build the systems that fix it for you."
      ],
      delay: 1000
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Three years ago, I was working <span className="text-accent">70+ hours a week</span> running my agency... and I thought that was <span className="text-accent">just how business worked.</span>
            </h2>
          </div>

          {/* Story Content */}
          <div className="relative">
            {/* Background card with subtle gradient */}
            <div className="relative bg-card/30 backdrop-blur-sm border border-muted/10 rounded-3xl p-8 lg:p-12">
              {/* Subtle accent line on the left */}
              <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-transparent via-accent/30 to-transparent rounded-full"></div>
              
              {/* Story content */}
              <div className="space-y-10 relative">
                {storyContent.map((section, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      visible 
                        ? `opacity-100 translate-y-0` 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      transitionDelay: visible ? `${section.delay}ms` : '0ms' 
                    }}
                  >
                    {section.type === 'section' && (
                      <div className="space-y-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                          {section.header}
                        </h3>
                        {section.content && section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-lg text-foreground/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}>
                          </p>
                        ))}
                      </div>
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
                  <Button
                    variant="primary"
                    size="lg"
                    href="/systems-audit"
                    asLink
                  >
                    Save 5-15 Hours Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators - subtle social proof */}
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