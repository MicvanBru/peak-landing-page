"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from '@/components/ui/Button';

// Centralized text content
const sectionContent = {
  heading: <>The Process is <span className="gradient-text-animated">Simple</span></>,
  subheading: "", // Removed the "No magic. No BS." text
};

const processSteps = [
  {
    number: "1",
    title: "Audit",
    description:
      "We audit your time to identify where it's actually going and what's eating your week",
    details:
      "Through detailed analysis of your daily operations, we map out exactly where your time disappears and identify the biggest bottlenecks holding you back from scaling your business.",
  },
  {
    number: "2",
    title: "Optimize",
    description:
      "We optimize your workflow to remove unnecessary steps and create a better way of working",
    details:
      "We redesign your processes from the ground up, eliminating redundancies and creating streamlined workflows that actually make sense for how you work.",
  },
  {
    number: "3",
    title: "Build",
    description: "We build the systems that handle everything automatically",
    details:
      "Custom automation systems are built specifically for your business, handling repetitive tasks and freeing you to focus on what only you can do.",
  },
  {
    number: "4",
    title: "Relax",
    description: "Relax while systems do what you used to do manually",
    details:
      "Your business runs smoothly without constant oversight. You finally have time to think strategically, spend time with family, or simply take a real vacation.",
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
              {sectionContent.heading}
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden diagonal-cut-top mesh-gradient-1"
             style={{ background: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)' }}>
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
            {sectionContent.heading}
          </h2>
          {sectionContent.subheading && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {sectionContent.subheading}
            </p>
          )}
        </motion.div>

        {/* Process Steps - 2x2 Grid Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card glass-card-hover rounded-2xl p-6 lg:p-8 h-full">
                  {/* Number Badge */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-cyan-400/20 border-2 border-cyan-400/30 flex items-center justify-center">
                          <span className="text-lg lg:text-xl font-bold text-cyan-400">
                            {step.number}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-50"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 gradient-text-animated">
                        {step.title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="pl-16">
                    <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Visual connectors for grid */}
                  {index < 2 && (
                    <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-400/50 to-cyan-400/20"></div>
                    </div>
                  )}
                  {index % 2 === 0 && index < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                      <div className="h-8 w-[2px] bg-gradient-to-b from-cyan-400/50 to-cyan-400/20"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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
          <p className="text-xl text-gray-300 mb-8">
            Ready to stop working for your business and start living your life?
          </p>
          <Button variant="primary" size="md" showArrow>
            Let&apos;s Talk About Your Freedom
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}
