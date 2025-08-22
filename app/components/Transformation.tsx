'use client';

import { useState } from 'react';

export default function Transformation() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const clientResults = [
    {
      name: 'Sarah',
      before: 'Payroll until midnight every other Thursday',
      after: 'Payroll runs automatically while she sleeps',
      icon: '🌙',
      highlight: 'midnight → automatic'
    },
    {
      name: 'Mike',
      before: "Couldn't take vacations without chaos",
      after: 'Just got back from two weeks in Europe',
      icon: '✈️',
      highlight: 'chaos → Europe'
    },
    {
      name: 'Ashley',
      before: '15 hours/week creating reports',
      after: '30 minutes reviewing automated dashboards',
      icon: '📊',
      highlight: '15 hours → 30 minutes'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            What This Actually{' '}
            <span className="text-accent">Looks Like</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Here&apos;s what happens when we transform your operations from manual chaos to automated clarity.
          </p>
        </div>

        {/* FROM/TO Transformation */}
        <div className="mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* FROM Side - Pain State */}
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl group-hover:bg-red-500/10 transition-all duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-red-500/20 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="text-2xl">😩</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">FROM</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted">Your inbox is your task management system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted">Critical processes live in one person&apos;s head</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted">Every customer request becomes a fire drill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted">Data scattered across 17 different tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted">Working IN the business 70+ hours/week</span>
                  </li>
                </ul>
              </div>
            </div>


            {/* TO Side - Solution State */}
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-xl group-hover:bg-accent/10 transition-all duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-accent/20 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-accent">TO</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-foreground">Everything runs on documented systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-foreground">Any team member can handle any process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-foreground">Most issues resolve before you hear about them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-foreground">One source of truth for everything</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-foreground">Working ON the business 20 hours/week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real Results Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Results from Real{' '}
            <span className="text-accent">Business Owners</span>
          </h3>
          <p className="text-lg text-muted">
            These aren&apos;t hypotheticals. These are actual transformations from the last 90 days.
          </p>
        </div>

        {/* Client Result Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clientResults.map((client, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-accent/10 rounded-2xl blur-2xl transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-110' : 'opacity-0'
              }`}></div>
              
              {/* Card Content */}
              <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon and Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{client.icon}</div>
                  <h4 className="text-xl font-bold">{client.name}</h4>
                </div>

                {/* Before State */}
                <div className="mb-4 p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                  <p className="text-sm text-muted mb-1 font-medium">BEFORE</p>
                  <p className="text-red-400 line-through">{client.before}</p>
                </div>

                {/* After State */}
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent mb-1 font-medium">NOW</p>
                  <p className="text-foreground font-medium">{client.after}</p>
                </div>

                {/* Highlight Badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                  <span className="text-xs text-accent font-bold">{client.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-xl text-muted mb-6">
            Stop living in the &quot;before.&quot; Start building your &quot;after.&quot;
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)]">
            <span className="relative z-10">See How We&apos;ll Transform Your Business</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(180_90%_65%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}