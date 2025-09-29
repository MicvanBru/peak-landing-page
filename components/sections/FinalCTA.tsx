'use client';

import { motion } from 'framer-motion';
import OptionCard from '@/components/shared/OptionCard';
import { Button } from '@/components/buttons';

export default function FinalCTA() {

  return (
    <section className="section-padding bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-standard relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary text-foreground mb-header">
            You&apos;ve Got{' '}
            <span className="text-accent">
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
            trackingLocation="final_cta"
          >
            I&apos;m Done Wasting My Life - Let&apos;s Talk
          </Button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-body-standard max-w-3xl mx-auto px-4"
          >
            30 minutes. I&apos;ll show you exactly what&apos;s possible. 
            <span className="block mt-2 text-gray-500">No fluff. No sales BS.</span>
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}