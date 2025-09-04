'use client';

import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface OptionCardProps {
  variant: 'positive' | 'negative';
  title: string;
  points: string[];
  result: string;
  optionNumber?: string;
  className?: string;
  delay?: number;
}

export default function OptionCard({ 
  variant, 
  title, 
  points, 
  result, 
  optionNumber, 
  className = '',
  delay = 0 
}: OptionCardProps) {
  const isPositive = variant === 'positive';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isPositive ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`relative ${className}`}
    >
      <div className={`
        ${isPositive 
          ? 'bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border-2 border-cyan-500/50 hover:scale-[1.02]' 
          : 'bg-gradient-to-br from-gray-900 to-gray-950 border border-red-900/30'
        } 
        rounded-2xl p-8 h-full relative overflow-hidden group transition-all duration-300
      `}>
        {/* Hover Effects */}
        {isPositive ? (
          <>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isPositive 
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' 
                : 'bg-red-500/10'
            }`}>
              {isPositive ? (
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              ) : (
                <X className="w-6 h-6 text-red-500" />
              )}
            </div>
            {optionNumber && (
              <span className={`font-semibold text-lg ${
                isPositive 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400' 
                  : 'text-red-500'
              }`}>
                {optionNumber}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 leading-tight ${
            isPositive ? 'text-white' : 'text-gray-400'
          }`}>
            {title}
          </h3>

          {/* Points */}
          <ul className="space-y-4 mb-8">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                {isPositive ? (
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <span className="text-red-500/50 mt-1">•</span>
                )}
                <span className={isPositive ? 'text-gray-300' : 'text-gray-500'}>
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Result */}
          <div className={`p-4 border rounded-lg ${
            isPositive 
              ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30' 
              : 'bg-red-500/5 border-red-500/20'
          }`}>
            <p className={`text-sm font-medium ${
              isPositive ? 'text-cyan-300' : 'text-red-400/80'
            } ${isPositive ? '' : 'italic'}`}>
              Result: {result}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}