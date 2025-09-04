'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  variant = 'primary',
  padding = 'md',
  hover = true,
  glow = false,
  className = '',
  children
}, ref) => {
  const baseClasses = "relative rounded-2xl transition-all duration-300";
  
  const variants = {
    primary: "bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20",
    secondary: "bg-gray-800/30 border border-gray-700/50",
    accent: "bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30",
    glass: "bg-white/5 backdrop-blur-sm border border-white/10"
  };
  
  const paddings = {
    sm: "p-4",
    md: "p-6 lg:p-8",
    lg: "p-8 lg:p-10",
    xl: "p-10 lg:p-12"
  };
  
  const hoverClasses = hover ? "hover:border-cyan-400/40 hover:scale-[1.01]" : "";
  const glowClasses = glow ? "hover:shadow-[0_0_30px_hsl(190_85%_55%_/_0.15)]" : "";
  
  return (
    <motion.div
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${glowClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;