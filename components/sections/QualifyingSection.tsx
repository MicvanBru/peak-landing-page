'use client';

import { motion } from 'framer-motion';
import OptionCard from '@/components/shared/OptionCard';

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
    <section className="py-32 lg:py-40 relative overflow-hidden diagonal-cut-top mesh-gradient-2"
             style={{ background: 'linear-gradient(135deg, hsl(220 20% 12%) 0%, hsl(220 25% 8%) 100%)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Is This For <span className="gradient-text-animated">You?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
            result="If you checked more green than red, we should talk."
          />
          
          <OptionCard
            variant="negative"
            title="THIS IS NOT FOR YOU IF:"
            delay={0.2}
            points={notForYouPoints}
            result="We probably won't be a good fit."
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
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            If you checked more green than red, we should talk.
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)]">
            <span className="relative z-10">
              See If You Qualify
            </span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(180_90%_65%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* Subtle cyan overlay */}
      <div className="absolute inset-0 bg-cyan-400/2 -z-10"></div>
      
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Animated Orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]"
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
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-red-500/10 rounded-full blur-[100px]"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-cyan-400/5 via-transparent to-red-500/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}