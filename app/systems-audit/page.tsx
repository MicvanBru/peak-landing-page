'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, CheckCircle2, Plus } from 'lucide-react';
import { Button } from '@/components/buttons';
import { useState } from 'react';
import { testimonials } from '@/components/testimonials/testimonialData';
import CompactTestimonialCard from './components/CompactTestimonialCard';
import FAQSchema, { systemsAuditFAQs } from '@/components/seo/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';

const auditDeliverables = [
  {
    icon: Target,
    title: "Identify Your Repetitive Tasks",
    description: "We'll map out every recurring task stealing your time"
  },
  {
    icon: TrendingUp,
    title: "Show You What Systems Can Handle",
    description: "See which tasks can be automated vs. which need human touch"
  },
  {
    icon: CheckCircle2,
    title: "Give You a Clear Path Forward",
    description: "Walk away with a prioritized action plan for your business"
  }
];

// Select 3 most relevant testimonials for systems audit page
const systemsAuditTestimonials = testimonials.filter(t => 
  ['sean-cannell', 'anthony-oneal', 'vitaly-novok'].includes(t.id)
);

const faqs = [
  {
    question: "What exactly happens during the Systems Audit?",
    answer: "We'll spend 30 minutes identifying your biggest time drains, calculating the real cost, and showing you exactly what can be systematized. You'll leave with a clear action plan."
  },
  {
    question: "Is this actually free or is there a catch?",
    answer: "It's genuinely free. No hidden fees. We do this because business owners who see what's possible often want help implementing the systems we identify."
  },
  {
    question: "How do you know what systems will work for my business?",
    answer: "We've built systems for 30+ businesses across every industry. The patterns are remarkably similar - most businesses waste time on the same 5-7 categories of tasks."
  },
  {
    question: "What if I don't have time for systems right now?",
    answer: "That's exactly why you need this audit. If you don't have time to save time, you'll be stuck in the same cycle forever. 30 minutes now could save you 10+ hours every week."
  }
];

export default function SystemsAuditPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      <StructuredData page="systems-audit" />
      <FAQSchema faqs={systemsAuditFAQs} page="Systems Audit" />
      <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="space-y-2">
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted uppercase tracking-wider">
                  Stop Working 70+ Hours.
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
                  Start Building <span className="text-accent">SYSTEMS</span>.
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted leading-relaxed max-w-2xl mx-auto">
                Discover exactly which tasks are stealing your time
              </p>
            </motion.div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-20 px-6 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Pick Your Time
            </h2>
            <p className="text-lg text-muted">
              Choose a time that works for you. We&apos;ll handle the rest.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-secondary hover:border-accent/20 transition-all duration-300"
          >
            <div className="min-h-[600px] lg:min-h-[800px]">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/EGim70hSvPx7y3CSIkuZ" 
                width="100%"
                height="1000"
                style={{
                  border: 'none',
                  width: '100%',
                  minHeight: '600',
                  maxWidth: '100%'
                }} 
                frameBorder="0"
                scrolling="no" 
                loading="eager"
                allow="payment"
                title="Book Your Free Systems Audit"
                id="booking-calendar"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What You&apos;ll Get in Your <span className="text-accent">Systems Audit</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A focused 30-minute call where we identify exactly what&apos;s eating your time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditDeliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                    <deliverable.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {deliverable.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {deliverable.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Business Owners Are <span className="text-accent">Saying</span> 
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {systemsAuditTestimonials.map((testimonial, index) => (
              <CompactTestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-card/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl border border-secondary hover:border-accent/20 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-accent/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <Plus 
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-45' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Reminder Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >            
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Ready to get started? Pick a time above that works for you.
            </p>

            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="md"
                scrollTo="booking-section"
              >
                Back to Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      </main>
    </>
  );
}