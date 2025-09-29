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

        {/* Content Flow */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* The Secret */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
              The secret to working less while growing your business is simple:
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-accent">
              Stop doing repetitive work manually.
            </p>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Every week, you&apos;re doing the same 20+ tasks that a system should handle. Project updates, file distribution, team coordination, client communication - all of it eating{' '}
              <span className="text-accent font-bold">5-15 hours you&apos;ll never get back</span>.
            </p>
          </motion.div>

          {/* The "Normal" Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              The best way to fix this is to spend months learning automation tools, testing different platforms, and building systems yourself.
            </p>
            <p className="text-xl lg:text-2xl text-white font-bold">
              But you don&apos;t have months. You barely have minutes.
            </p>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="relative inline-block">
              <div className="absolute -left-2 -right-2 -top-2 -bottom-2 bg-gradient-to-r from-accent/20 to-transparent rounded-lg blur-sm"></div>
              <p className="relative text-3xl lg:text-4xl font-bold text-accent">
                That&apos;s why we build the systems for you.
              </p>
            </div>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              Our custom AI systems handle the repetitive work that&apos;s eating your week. Not basic templates. Not simple N8N or Zapier automations.{' '}
              <span className="text-white font-bold">Real systems built for how YOUR business actually works</span>.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          <Button
            variant="primary"
            size="lg"
            href="/systems-audit"
            asLink
            trackingLocation="time_back"
          >
            See What&apos;s Possible in Your Business
          </Button>

        </motion.div>
      </div>
    </section>
  )
}