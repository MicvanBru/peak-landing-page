'use client'

import { motion } from 'framer-motion'

export default function WhatWeDoSection() {
  const benefits = [
    "Focus on strategy and growth instead of daily operations",
    "Leave work at 5pm knowing everything's handled",
    "Take a vacation without your phone blowing up",
    "Stop being the bottleneck for every single task",
    "Actually doing the work that you're good at",
    "Scale without burning out or hiring an army of VAs"
  ]

  return (
    <section className="py-32 lg:py-40 px-6 relative overflow-hidden diagonal-cut-top mesh-gradient-2"
             style={{ background: 'linear-gradient(135deg, hsl(220 20% 12%) 0%, hsl(220 25% 8%) 100%)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            This is <span className="gradient-text-animated">EXACTLY</span> what we do:
          </h2>
        </motion.div>

        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-xl lg:text-2xl font-bold text-white leading-relaxed">
            We give you back <span className="gradient-text-animated">5-15+ hours every week</span> so you can:
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-2 mb-12 max-w-3xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200"
            >
              {/* Checkmark icon */}
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Benefit text */}
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 lg:p-10">
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              <span className="gradient-text-animated font-bold">And the best part?</span> You don&apos;t have to learn a single automation tool or how to code. We build it, test it, and hand it over, ready to work.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-400/4 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-cyan-400/6 rounded-full blur-[150px]"></div>
      </div>
    </section>
  )
}