'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import OptionCard from '@/components/shared/OptionCard';

export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-40 lg:py-48 px-6 diagonal-cut-top relative overflow-hidden mesh-gradient-2"
             style={{ background: 'linear-gradient(135deg, var(--secondary-bg) 0%, var(--primary-bg) 100%)' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 pulse-gentle">
            You&apos;ve Got{' '}
            <span className="gradient-text-animated">
              Two Options
            </span>
          </h2>
        </motion.div>

        {/* Options Container */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <OptionCard
            variant="negative"
            title="Keep doing what you're doing"
            optionNumber="Option 1"
            delay={0.2}
            points={[
              "Continue doing the same repetitive tasks every week",
              "Stay the bottleneck for every decision",
              "Keep working 70+ hours thinking it'll get better",
              "Lose another 5-15 hours every single week"
            ]}
            result="Another year passes. Nothing changes."
          />
          
          <OptionCard
            variant="positive"
            title="Get the systems built"
            optionNumber="Option 2"
            delay={0.3}
            points={[
              "Stop doing manual work that systems should handle",
              "Get back 5-15 hours every week",
              "Focus on strategy and growth instead of operations",
              "Let automation handle the repetitive stuff"
            ]}
            result="You work reasonable hours. Your business still runs."
          />
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-4 px-12 py-8 text-2xl font-black rounded-3xl glow-magnetic ripple-effect gpu-accelerated text-black"
            style={{ 
              background: 'linear-gradient(135deg, var(--accent-cyan) 0%, hsl(180 90% 65%) 25%, var(--accent-purple) 50%, hsl(180 90% 65%) 75%, var(--accent-cyan) 100%)',
              backgroundSize: '300% 100%',
              animation: 'gradientShift 3s ease-in-out infinite'
            }}
          >
            <span className="relative z-10">I&apos;m Done Wasting My Life - Let&apos;s Talk</span>
            <ArrowRight className="w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            30 minutes. I&apos;ll show you exactly what&apos;s possible. 
            <span className="block mt-2 text-gray-500">No fluff. No sales BS.</span>
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>100% Custom Built</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>You Own Everything</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>30-Day Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}