'use client';

import { motion } from 'framer-motion';

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
            Is This For <span className="text-accent">You?</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Let&apos;s be honest about whether we&apos;re a good fit
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* For You Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Card Container */}
            <div className="relative h-full">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-cyan-500/5 to-transparent rounded-2xl blur-xl" />
              
              {/* Card Content */}
              <div className="relative bg-card/40 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 lg:p-10 h-full hover:border-accent/30 transition-all duration-300">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-2">
                    THIS IS FOR YOU IF:
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
                </div>

                {/* Points List */}
                <div className="space-y-4">
                  {forYouPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-accent/5 transition-all duration-200"
                    >
                      {/* Checkmark Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="relative">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                            <svg 
                              className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={3}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Not For You Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Card Container */}
            <div className="relative h-full">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-red-500/5 to-transparent rounded-2xl blur-xl" />
              
              {/* Card Content */}
              <div className="relative bg-card/40 backdrop-blur-sm border border-destructive/20 rounded-2xl p-8 lg:p-10 h-full hover:border-destructive/30 transition-all duration-300">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-destructive mb-2">
                    THIS IS NOT FOR YOU IF:
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-destructive to-red-400 rounded-full" />
                </div>

                {/* Points List */}
                <div className="space-y-4">
                  {notForYouPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-destructive/5 transition-all duration-200"
                    >
                      {/* X Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="relative">
                          <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center group-hover:bg-destructive/30 transition-colors duration-200">
                            <svg 
                              className="w-5 h-5 text-destructive group-hover:scale-110 transition-transform duration-200" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={3}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 bg-destructive/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-muted mb-8">
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