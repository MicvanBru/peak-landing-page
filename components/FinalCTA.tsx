'use client';

import { motion } from 'framer-motion';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          {/* Option 1 - Negative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-red-900/30 rounded-2xl p-8 h-full relative overflow-hidden group">
              {/* Subtle negative pulse effect */}
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <span className="text-red-500 font-semibold text-lg">Option 1</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-400 mb-6 leading-tight">
                  Keep doing what you&apos;re doing
                </h3>

                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500/50 mt-1">•</span>
                    <span>Stay buried in repetitive tasks that drain your soul</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500/50 mt-1">•</span>
                    <span>Watch weeks turn into months with no progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500/50 mt-1">•</span>
                    <span>Keep telling yourself &quot;someday&quot; while competitors pull ahead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500/50 mt-1">•</span>
                    <span>Continue losing 30+ hours every single week</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-400/80 italic">
                    Result: Nothing changes. Time keeps slipping away.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Option 2 - Positive */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border-2 border-cyan-500/50 rounded-2xl p-8 h-full relative overflow-hidden group transform hover:scale-[1.02] transition-transform duration-300">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold text-lg">
                    Option 2
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Let me build the systems that actually fix this
                </h3>

                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Reclaim 30+ hours every week starting next month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Finally focus on the work that actually matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Watch your business run itself while you sleep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Join 100+ people who already made the switch</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg">
                  <p className="text-sm text-cyan-300 font-medium">
                    Result: Everything changes. You get your life back.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
            className="group relative inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-bold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            
            <span className="relative z-10">I&apos;m Done Wasting My Life - Let&apos;s Talk</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
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