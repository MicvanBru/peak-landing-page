'use client'

import { motion } from 'framer-motion'

export default function SocialProof() {
  return (
    <section className="py-16 lg:py-20 px-6 bg-gradient-to-b from-black via-neutral-950 to-neutral-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main testimonial card */}
          <div className="relative bg-card/80 backdrop-blur-sm border border-accent/20 rounded-3xl p-8 lg:p-12 hover:border-accent/40 transition-all duration-500">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Quote mark */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-[hsl(180_90%_65%)] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
              {/* Testimonial text */}
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium italic text-center">
                "You can't imagine the impact to have an outside, intelligent perspective on your own systems and processes. Billy's ability to rethink systems, automate tasks, and cut down on extra time and work is really incredible. We're thankful for his help in streamlining our processes."
              </blockquote>

              {/* Attribution section */}
              <div className="flex flex-col items-center space-y-4">
                {/* Profile picture placeholder */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full flex items-center justify-center border-2 border-accent/30">
                    <div className="text-accent text-sm font-semibold">Photo</div>
                  </div>
                  {/* Subtle glow around avatar */}
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-50"></div>
                </div>

                {/* Name and credential */}
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground mb-1">
                    Sean Cannell
                  </p>
                  <p className="text-lg text-accent font-semibold">
                    Think Media
                  </p>
                </div>
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

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full text-sm text-muted">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-foreground font-semibold">Trusted by industry leaders</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}