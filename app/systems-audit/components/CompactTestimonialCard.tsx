'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Testimonial } from '@/components/testimonials/testimonialData';

interface CompactTestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function CompactTestimonialCard({ testimonial, index }: CompactTestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        {testimonial.image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image 
              src={testimonial.image} 
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-r ${testimonial.accentColor || 'from-accent to-cyan-400'} flex items-center justify-center`}>
            <span className="text-background font-semibold text-sm">
              {testimonial.initials}
            </span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-foreground font-semibold text-sm">
            {testimonial.name}
          </h3>
          {testimonial.company && (
            <p className="text-muted text-xs">{testimonial.company}</p>
          )}
        </div>
      </div>
      
      <blockquote className="text-muted text-sm leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </motion.div>
  );
}