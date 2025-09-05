'use client';

import { motion } from 'framer-motion';
import OptionCard from '@/components/shared/OptionCard';
import { Button } from '@/components/buttons';

export default function FinalCTA() {

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            You&apos;ve Got{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
          <Button
            variant="gradient"
            size="xl"
            href="/systems-audit"
            asLink
            className="relative group"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            
            <span className="relative z-10">I&apos;m Done Wasting My Life - Let&apos;s Talk</span>
          </Button>

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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}