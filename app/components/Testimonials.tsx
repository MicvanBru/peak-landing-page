'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Billy has this incredible ability to see what you can't see. He identified bottlenecks in our business that were costing us thousands of hours and millions in revenue. The systems he built didn't just solve our problems – they transformed how we operate.",
    name: "Sean Cannell",
    credential: "Think Media",
    initials: "SC",
    accentColor: "from-cyan-400 to-cyan-500"
  },
  {
    quote: "We were doing the same repetitive tasks every single day. Billy came in, automated everything, and now what took my team 8 hours takes 30 minutes. It's not just about the time saved – it's about finally being able to focus on growth instead of maintenance.",
    name: "Anthony O'Neal",
    credential: "Financial Expert & Author",
    initials: "AO",
    accentColor: "from-cyan-500 to-cyan-600"
  },
  {
    quote: "I haven't worked past 6pm in months. Billy didn't just automate our systems – he gave me my life back. My agency runs better without me in it every second, and that's the ultimate freedom.",
    name: "Sarah M.",
    credential: "Agency Owner",
    initials: "SM",
    accentColor: "from-cyan-400 to-cyan-500"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-cyan-400 font-semibold">
            Real People, Real Results
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300">
                {/* Quote Mark */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-8 h-8 bg-gradient-to-br ${testimonial.accentColor} rounded-full flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Quote */}
                  <p className="text-neutral-300 leading-relaxed text-lg italic">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                    {/* Avatar */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.accentColor} rounded-full flex items-center justify-center font-bold text-black`}>
                      {testimonial.initials}
                    </div>

                    {/* Name and Credential */}
                    <div>
                      <p className="text-white font-semibold text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-cyan-400 text-sm">
                        {testimonial.credential}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-neutral-900 flex items-center justify-center text-xs font-bold text-black"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-neutral-400 text-sm">
              <span className="text-white font-semibold">100+ businesses</span> transformed and counting
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}