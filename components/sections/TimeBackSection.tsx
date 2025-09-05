'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/buttons'

export default function TimeBackSection() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How to <span className="text-accent">ACTUALLY</span> Get Your Time Back{' '}
            <span className="block lg:inline mt-2 lg:mt-0">Without Hiring More People</span>
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-neutral-900/50 backdrop-blur-sm border border-accent/20 rounded-3xl p-8 lg:p-12 hover:border-accent/40 transition-all duration-500"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            {/* The Secret */}
            <div className="text-center">
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-4">
                The secret to working less while growing your business is simple:
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-accent">
                Stop doing repetitive work manually.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="bg-neutral-800/30 rounded-2xl p-6 lg:p-8 border border-neutral-700/50">
              <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-4">
                Every week, you&apos;re doing the same 20+ tasks that a system should handle. Project updates, file distribution, team coordination, client communication - all of it eating{' '}
                <span className="text-accent font-semibold">5-15 hours you&apos;ll never get back</span>.
              </p>
            </div>

            {/* The "Normal" Solution */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
                The best way to fix this is to spend months learning automation tools, testing different platforms, and building systems yourself.
              </p>
              <p className="text-lg lg:text-xl text-white font-semibold">
                But you don&apos;t have months. You barely have minutes.
              </p>
            </div>

            {/* Our Solution */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent to-cyan-400 rounded-full"></div>
              <div className="pl-8">
                <p className="text-2xl lg:text-3xl font-bold text-accent mb-6">
                  That&apos;s why we build the systems for you.
                </p>
                <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
                  Our custom AI systems handle the repetitive work that&apos;s eating your week. Not basic templates. Not simple N8N or Zapier automations.{' '}
                  <span className="text-white font-semibold">Real systems built for how YOUR business actually works</span>.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-10">
              <div className="w-32 h-32 bg-gradient-to-br from-accent to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-transparent rounded-full blur-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
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
    </section>
  )
}