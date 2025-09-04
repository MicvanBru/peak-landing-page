'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'

export default function TimeBackSection() {
  return (
    <section className="py-32 lg:py-40 px-6 relative overflow-hidden diagonal-cut-top mesh-gradient-1"
             style={{ background: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How to <span className="gradient-text-animated">ACTUALLY</span> Get Your Time Back{' '}
            <span className="block mt-2">Without Hiring More People</span>
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <Card variant="primary" padding="xl" hover glow>
          <div className="space-y-8">
            {/* The Secret */}
            <div className="text-center">
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-4">
                The secret to working less while growing your business is simple:
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
                Stop doing repetitive work manually.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="bg-gray-800/30 rounded-2xl p-6 lg:p-8 border border-gray-700/50">
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-4">
                Every week, you&apos;re doing the same 20+ tasks that a system should handle. Project updates, file distribution, team coordination, client communication - all of it eating{' '}
                <span className="text-cyan-400 font-semibold">5-15 hours you&apos;ll never get back</span>.
              </p>
            </div>

            {/* The "Normal" Solution */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                The best way to fix this is to spend months learning automation tools, testing different platforms, and building systems yourself.
              </p>
              <p className="text-lg lg:text-xl text-white font-semibold">
                But you don&apos;t have months. You barely have minutes.
              </p>
            </div>

            {/* Our Solution */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-full"></div>
              <div className="pl-8">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-6">
                  That&apos;s why we build the systems for you.
                </p>
                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                  Our custom AI systems handle the repetitive work that&apos;s eating your week. Not basic templates. Not simple N8N or Zapier automations.{' '}
                  <span className="text-white font-semibold">Real systems built for how YOUR business actually works</span>.
                </p>
              </div>
            </div>

          </div>
        </Card>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900/50 backdrop-blur-sm border border-accent/20 rounded-full">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <p className="text-neutral-300 text-sm">
              <span className="text-white font-semibold">Ready to get your time back?</span> Let&apos;s talk about your systems.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle cyan overlay */}
      <div className="absolute inset-0 bg-cyan-400/2 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-400/8 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-cyan-400/6 rounded-full blur-[150px]"></div>
      </div>
    </section>
  )
}