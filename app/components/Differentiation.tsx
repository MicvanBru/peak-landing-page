'use client';

import { motion } from 'framer-motion';

const comparisons = [
  {
    them: "Here's a Zapier template!",
    me: "Here's a custom system that handles your specific workflows, edge cases, and actually saves you 20 hours a week.",
  },
  {
    them: "Those systems don't integrate.",
    me: "Watch me make them talk to each other like they were built to be best friends.",
  },
  {
    them: "That's too complex to automate.",
    me: "I automated a 47-step mortgage approval process. Your workflow isn't too complex - their imagination is too limited.",
  },
];

export default function Differentiation() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why This Works When{" "}
            <span className="text-accent">Other Stuff Doesn&apos;t</span>
          </h2>
        </motion.div>

        {/* Comparisons Grid */}
        <div className="space-y-8 mb-20">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-6 items-stretch"
            >
              {/* Them - Left Side */}
              <div className="relative group">
                <div className="absolute inset-0 bg-muted/5 rounded-2xl"></div>
                <div className="relative p-8 border border-muted/20 rounded-2xl backdrop-blur-sm h-full flex flex-col">
                  <div className="text-sm font-semibold text-muted/60 mb-3 tracking-wider uppercase">
                    Them
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="relative">
                      <span className="text-6xl text-muted/20 absolute -left-2 -top-2">&quot;</span>
                      <p className="text-lg md:text-xl text-muted/80 italic pl-6">
                        {comparison.them}
                      </p>
                    </div>
                  </div>
                  {/* Visual indicator of inadequacy */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-500/50 rounded-full"></div>
                </div>
              </div>

              {/* Me - Right Side */}
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-xl group-hover:bg-accent/10 transition-all duration-500"></div>
                <div className="relative p-8 border border-accent/30 rounded-2xl backdrop-blur-sm h-full flex flex-col bg-gradient-to-br from-accent/5 to-transparent">
                  <div className="text-sm font-semibold text-accent mb-3 tracking-wider uppercase">
                    Me
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="relative">
                      <span className="text-6xl text-accent/30 absolute -left-2 -top-2">&quot;</span>
                      <p className="text-lg md:text-xl text-foreground font-medium pl-6">
                        {comparison.me}
                      </p>
                    </div>
                  </div>
                  {/* Visual indicator of superiority */}
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-accent/30 rounded-3xl p-12 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              I don&apos;t sell templates.
              <br />
              <span className="text-accent">I solve YOUR specific problems.</span>
              <br />
              <span className="text-xl md:text-2xl lg:text-3xl text-muted mt-4 block">
                The ones keeping you up at night.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-red-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}