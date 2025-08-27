'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    number: '1',
    title: 'Figure Out What\'s Killing Your Time',
    description: 'We look at everything you\'re doing. Even the \'quick\' 2-minute tasks you do 50 times a day.',
  },
  {
    number: '2',
    title: 'Build Custom Systems That Actually Work',
    description: 'Not templates. Not \'best practices.\' Stuff built specifically for how YOU work.',
  },
  {
    number: '3',
    title: 'Give You Your Life Back',
    description: 'Your business runs. You do what you want. Novel concept, right?',
  },
];

export default function Process() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              How We <span className="text-accent">Actually</span> Do This
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              No magic. No BS. Just a proven process that works.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            How We <span className="text-accent">Actually</span> Do This
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            No magic. No BS. Just a proven process that works.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 lg:-translate-x-1/2 hidden sm:block"></div>

            {/* Steps */}
            <div className="space-y-16 lg:space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative ${
                    index % 2 === 0 ? 'lg:pr-[50%] lg:text-right' : 'lg:pl-[50%] lg:text-left'
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="flex gap-6 lg:hidden">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent">{step.number}</span>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:block">
                    <div className={`relative ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      {/* Content */}
                      <div className="space-y-4">
                        <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <h3 className="text-3xl font-bold">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xl text-muted leading-relaxed max-w-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}">
                          {step.description}
                        </p>
                      </div>

                      {/* Center Number Circle - positioned outside content area */}
                      <div className={`absolute top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? 'right-[calc(100%+2.5rem)]' : 'left-[calc(100%+2.5rem)]'
                      }`}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="relative"
                        >
                          <div className="w-20 h-20 rounded-full bg-background border-4 border-accent flex items-center justify-center relative z-10">
                            <span className="text-3xl font-bold text-accent">{step.number}</span>
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl"></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow indicator (except for last item) */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-12"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent/50"
                      >
                        <path
                          d="M12 5v14M19 12l-7 7-7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA at the end */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-muted mb-8">
            Ready to stop working for your business and start living your life?
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)]">
            <span className="relative z-10">Let&apos;s Talk About Your Freedom</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(180_90%_65%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}