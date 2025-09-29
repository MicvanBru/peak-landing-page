'use client'

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { trackButtonClick } from '@/components/tracking/MetaPixel'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'text' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  scrollTo?: string
  onClick?: () => void
  asLink?: boolean
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  trackingLocation?: string
}

const variantStyles = {
  primary: 'bg-accent text-background font-semibold hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)] transition-all duration-300',
  secondary: 'bg-transparent border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background transition-all duration-300',
  ghost: 'bg-neutral-900/50 backdrop-blur-sm border border-accent/20 text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-300',
  text: 'bg-transparent text-accent hover:text-cyan-300 transition-colors duration-300 underline-offset-4 hover:underline',
  gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 rounded-full overflow-hidden'
}

const sizeStyles = {
  sm: 'px-3 py-2 text-xs sm:px-4 sm:text-sm rounded-lg min-h-[44px]',
  md: 'px-4 py-3 text-sm sm:px-6 sm:text-base rounded-xl min-h-[44px]',
  lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-xl min-h-[44px]',
  xl: 'px-8 py-4 text-fluid-base sm:px-10 sm:py-6 sm:text-fluid-lg rounded-2xl min-h-[48px]'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  scrollTo,
  onClick,
  asLink = false,
  className,
  disabled = false,
  fullWidth = false,
  trackingLocation,
  ...props
}: ButtonProps) {
  // Helper function to calculate scroll depth
  const getScrollDepth = () => {
    if (typeof window === 'undefined') return undefined;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
  };

  const handleClick = () => {
    // Track button click if tracking location is provided and button leads to systems-audit
    if (trackingLocation && (href === '/systems-audit' || href?.includes('systems-audit'))) {
      const buttonText = typeof children === 'string' ? children : 'CTA Button';
      const scrollDepth = getScrollDepth();
      trackButtonClick(trackingLocation, buttonText, scrollDepth);
    }

    if (scrollTo) {
      const element = document.getElementById(scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    if (onClick) {
      onClick()
    }
  }

  const baseClasses = cn(
    'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      )}
    </>
  )

  // External link
  if (href && !asLink) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  // Next.js Link
  if (href && asLink) {
    return (
      <Link href={href} className={baseClasses} onClick={handleClick}>
        {content}
      </Link>
    )
  }

  // Button with scroll or onClick

  return (
    <button
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}