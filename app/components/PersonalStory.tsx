'use client';

import { useState } from 'react';

interface StoryPhase {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  quote?: {
    text: string;
  };
}

const storyPhases: StoryPhase[] = [
  {
    id: 'rock-bottom',
    title: 'Rock Bottom',
    subtitle: 'The panic attacks started',
    content: [
      'Three years ago, I was having panic attacks in my car before walking into my own office.',
      'The business I\'d built from nothing—the one that was supposed to give me freedom—had become the thing that trapped me.',
      'Every morning, I\'d check my phone before my eyes were fully open. 47 Slack messages. 23 "urgent" emails. 3 missed calls from clients who "just had a quick question" at 10 PM.',
      'My family ate dinner without me most nights. My kids stopped asking when I\'d be home. My wife stopped being surprised when I canceled another vacation.'
    ]
  },
  {
    id: 'breaking-point',
    title: 'Breaking Point',
    subtitle: 'Thursday, 11:47 PM',
    content: [
      'One Thursday night at 11:47 PM, while fixing yet another "emergency" that only I could handle, something in me just... broke.',
      'I looked around my empty office. At the cold coffee on my desk. At the 14 tabs open on my computer, each one a different fire I was putting out.'
    ],
    quote: {
      text: 'And honestly? I felt relief.'
    }
  },
  {
    id: 'realization',
    title: 'The Realization',
    subtitle: 'I WAS the business',
    content: [
      'The next morning, instead of diving into emails, I did something different. I grabbed a notebook and wrote down every single thing I did in my business. Every decision I made. Every problem I solved. Every question only I could answer.',
      'The list was 7 pages long.',
      'That\'s when it hit me: I wasn\'t running a business. I WAS the business.',
      'And I was both the warden and the only prisoner.'
    ],
    quote: {
      text: 'I hadn\'t built a business.\nI\'d built a prison.'
    }
  },
  {
    id: 'journey',
    title: 'The Journey',
    subtitle: '18 months of transformation',
    content: [
      'So I made a decision that terrified me: I was going to build myself out of it. Process by process. System by system. Person by person.',
      'It took me 18 months. There were setbacks. Moments I wanted to give up and just go back to doing everything myself because it was "easier."',
      'But then something incredible happened...'
    ]
  },
  {
    id: 'breakthrough',
    title: 'The Breakthrough',
    subtitle: 'Best month ever',
    content: [
      'I took a two-week vacation. Completely offline. No email. No Slack. No "quick calls."',
      'When I came back, the business had its best month ever.',
      'Revenue was up 23%. Client satisfaction scores were the highest they\'d ever been. My team had solved problems I didn\'t even know existed.',
      'The business didn\'t just survive without me—it thrived.'
    ]
  },
  {
    id: 'freedom',
    title: 'Freedom',
    subtitle: 'The life I wanted',
    content: [
      'Today, I work 20 hours a week. I\'m home for dinner every night. I coach my kid\'s soccer team. I take real vacations where I actually vacation.',
      'And my business? It runs like a Swiss watch. With or without me.',
      'Not because you\'re lazy. Not because you don\'t care.',
      'But because you built a business to have a life—not to become a slave to it.',
      'And you deserve to actually live that life.'
    ],
    quote: {
      text: 'That\'s what I help you build.\nA business that runs without you.'
    }
  }
];

export default function PersonalStory() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              My Story{' '}
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted block mt-2">
                (Because It's Probably Yours Too)
              </span>
            </h2>
          </div>

          {/* Timeline Navigation */}
          <div className="mb-12">
            <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide">
              {storyPhases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(index)}
                  className="flex-shrink-0 relative group"
                >
                  {/* Connection line */}
                  {index < storyPhases.length - 1 && (
                    <div className="hidden sm:block absolute left-full top-1/2 w-full h-0.5 bg-muted/20" />
                  )}
                  
                  {/* Timeline dot and label */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activePhase === index 
                        ? 'bg-accent shadow-[0_0_20px_hsl(190_85%_55%_/_0.5)]' 
                        : 'bg-muted/40 group-hover:bg-muted'
                    }`} />
                    <span className={`mt-2 text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                      activePhase === index ? 'text-accent' : 'text-muted group-hover:text-foreground'
                    }`}>
                      {phase.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Story Content */}
          <div className="min-h-[400px]">
            {storyPhases.map((phase, index) => (
              <div
                key={phase.id}
                className={`${activePhase === index ? 'block' : 'hidden'}`}
              >
                {/* Phase Header */}
                <div className="mb-8 text-center">
                  <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xl text-muted">{phase.subtitle}</p>
                </div>

                {/* Content */}
                <div className="space-y-6 text-lg leading-relaxed text-foreground/85 max-w-3xl mx-auto">
                  {phase.content.map((paragraph, idx) => (
                    <p key={idx} className={paragraph.includes('I WAS the business') || paragraph.includes('it thrived') ? 'font-semibold text-foreground' : ''}>
                      {paragraph.includes('I wasn\'t running a business. I WAS the business.') ? (
                        <>That's when it hit me: <span className="font-semibold text-foreground">I wasn't running a business. I WAS the business.</span></>
                      ) : paragraph.includes('it thrived') ? (
                        <>The business didn't just survive without me—<span className="font-semibold text-foreground">it thrived</span>.</>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>

                {/* Quote if exists */}
                {phase.quote && (
                  <div className="relative py-8 mt-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
                    <blockquote className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-accent text-center leading-tight whitespace-pre-line">
                      {phase.quote.text}
                    </blockquote>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Always Visible */}
          <div className="mt-16 text-center">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)] glow-cyan-sm">
              <span className="relative z-10">Let's Build Your Freedom</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(180_90%_65%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/3 rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
}