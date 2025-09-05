"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from '@/components/buttons';

// Centralized text content
const sectionContent = {
  heading: <>The Process is <span className="text-accent">Simple</span></>,
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
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
            {sectionContent.heading}
          </h2>
          {sectionContent.subheading && (
            <p className="text-xl text-muted max-w-3xl mx-auto">
              {sectionContent.subheading}
            </p>
          )}
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  className={`bg-surface/30 backdrop-blur-sm rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeStep === index
                      ? "border-accent/50 shadow-[0_0_30px_hsl(190_85%_55%_/_0.15)]"
                      : "border-accent/10 hover:border-accent/30"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  onClick={() =>
                    setActiveStep(activeStep === index ? null : index)
                  }
                >
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-accent/20 border-2 border-accent/30 flex items-center justify-center">
                            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">
                              {step.number}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-50"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Expanded Content */}
                        {activeStep === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-accent/20">
                              <p className="text-base lg:text-lg text-muted leading-relaxed">
                                {step.details}
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {/* Click indicator */}
                        <div className="flex items-center gap-2 mt-4 text-sm text-accent/70">
                          <span>
                            Click to{" "}
                            {activeStep === index ? "collapse" : "expand"}
                          </span>
                          <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="transition-transform duration-200"
                            animate={{ rotate: activeStep === index ? 180 : 0 }}
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-6">
                    <div className="w-[2px] h-8 bg-gradient-to-b from-accent/50 to-accent/20"></div>
                  </div>
                )}
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
          <p className="text-xl text-muted mb-8">
            Ready to stop working for your business and start living your life?
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/systems-audit"
            asLink
          >
            Book Your Systems Audit
          </Button>
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
