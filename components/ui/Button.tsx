'use client';

import { forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  children,
  showArrow = false,
  className = '',
  onClick,
  disabled = false
}, ref) => {
  const baseClasses = "group relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: `text-black glow-magnetic ripple-effect gpu-accelerated`,
    secondary: "text-cyan-400 bg-transparent border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 glass-card-hover",
    ghost: "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30"
  };
  
  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-6 text-xl"
  };
  
  const primaryStyle = variant === 'primary' ? {
    background: 'linear-gradient(135deg, var(--accent-cyan) 0%, hsl(180 90% 65%) 50%, var(--accent-purple) 100%)',
    backgroundSize: '200% 100%'
  } : {};

  return (
    <motion.button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={primaryStyle}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
    >
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;