'use client';

import { useState } from 'react';

const objections = [
  {
    question: "My business is too complicated for this",
    answer: "Every business owner thinks their situation is unique. You're right - it is. That's exactly why cookie-cutter solutions don't work. What I do is different. I don't force your business into a pre-made box. I study your specific workflows, understand your unique challenges, and build custom systems that fit your business like a glove. The more complex your business, the more you need this."
  },
  {
    question: "I tried automation. It broke everything",
    answer: "Let me guess - someone sold you an 'all-in-one' solution that was supposed to revolutionize your business overnight? Then everything went sideways and you spent weeks cleaning up the mess? I've seen it a hundred times. That's not what this is. We start small. Test everything. Build gradually. Nothing breaks because we're not ripping out your foundation - we're strengthening it, one beam at a time."
  },
  {
    question: "I don't have time for this",
    answer: "You don't have time NOT to do this. Every week you delay is another 70 hours you'll never get back. Another weekend missed with your family. Another opportunity lost because you were too buried in operations to see it. The implementation takes 8-12 weeks. You'll reclaim 20-30 hours every single week after that. Do the math."
  },
  {
    question: "What if it breaks?",
    answer: "Systems don't break. People break systems. That's why everything I build comes with documentation your team can actually understand, training that sticks, and redundancies for critical processes. Plus, you're not on your own after we launch. But here's the real question - what's already broken that you're living with because you don't have time to fix it?"
  },
  {
    question: "How much?",
    answer: "Wrong question. The right question is: What's it costing you to NOT do this? 70-hour weeks at your hourly value. Missed opportunities because you're drowning in operations. The toll on your health and relationships. Staff turnover because everything depends on you. Add that up. My fee is a fraction of what you're already losing. The investment varies based on complexity, but most engagements run between $15-50k. You'll save that in reclaimed time within the first year."
  }
];

export default function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The Stuff You&apos;re Thinking
            <span className="block mt-2 text-accent">But Not Saying</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted max-w-2xl mx-auto">
            Let&apos;s address the elephant in the room. Here&apos;s what&apos;s really on your mind.
          </p>
        </div>

        {/* Objections List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {objections.map((item, index) => (
            <div
              key={index}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className={`
                  border rounded-xl transition-all duration-300
                  ${openIndex === index 
                    ? 'border-accent bg-card shadow-lg shadow-accent/10' 
                    : 'border-border/50 bg-background hover:border-accent/50 hover:bg-card/50'}
                `}>
                  <div className="p-6 lg:p-8">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className={`
                        text-xl lg:text-2xl font-semibold transition-colors duration-300
                        ${openIndex === index ? 'text-accent' : 'text-foreground group-hover:text-accent'}
                      `}>
                        {item.question}
                      </h3>
                      <div className={`
                        mt-1 transition-transform duration-300 text-2xl
                        ${openIndex === index ? 'rotate-45 text-accent' : 'text-muted'}
                      `}>
                        +
                      </div>
                    </div>
                    
                    {/* Answer */}
                    <div className={`
                      grid transition-all duration-300
                      ${openIndex === index 
                        ? 'grid-rows-[1fr] opacity-100 mt-6' 
                        : 'grid-rows-[0fr] opacity-0'}
                    `}>
                      <div className="overflow-hidden">
                        <p className="text-muted leading-relaxed lg:text-lg">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted mb-8">
            Still have questions? Let&apos;s talk about your specific situation.
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)]">
            <span className="relative z-10">Schedule a Conversation</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}