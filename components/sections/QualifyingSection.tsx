'use client';

import { motion } from 'framer-motion';
import OptionCard from '@/components/shared/OptionCard';
import { Button } from '@/components/buttons';

const forYouPoints = [
  "You make over $300K profit but are working too many hours",
  "You have repetitive tasks that eat up your week",
  "You're ready to invest in systems that actually work",
  "You want to focus on growth, not repetitive tasks",
  "You're tired of being the bottleneck in your own business"
];

const notForYouPoints = [
  "You're looking for overnight miracles",
  "You think manual work is \"part of the grind\"",
  "You're not willing to share how your processes currently work",
  "Your business model is still changing weekly",
  "You want n8n templates you can find on YouTube"
];

export default function QualifyingSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Is This For <span className="text-accent">You?</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Let&apos;s be honest about whether we&apos;re a good fit
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <OptionCard
            variant="positive"
            title="THIS IS FOR YOU IF:"
            delay={0.2}
            points={forYouPoints}
            result="If this sounds like you, we should talk."
          />
          
          <OptionCard
            variant="negative"
            title="THIS IS NOT FOR YOU IF:"
            delay={0.2}
            points={notForYouPoints}
            result="If this sounds like you, we probably won't be a good fit."
          />
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            size="lg"
            href="/systems-audit"
            asLink
            trackingLocation="qualifying"
          >
            Start Building Your First System Now
          </Button>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-destructive/10 rounded-full blur-[100px]"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Static Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-accent/5 via-transparent to-destructive/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}