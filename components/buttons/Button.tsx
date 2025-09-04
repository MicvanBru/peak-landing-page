'use client'

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  scrollTo?: string
  onClick?: () => void
  asLink?: boolean
  icon?: React.ComponentType<{ className?: string }>
  iconPosition?: 'left' | 'right'
  className?: string
  disabled?: boolean
  fullWidth?: boolean
}

const variantStyles = {
  primary: 'bg-accent text-background font-semibold hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)] transition-all duration-300',
  secondary: 'bg-transparent border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background transition-all duration-300',
  ghost: 'bg-neutral-900/50 backdrop-blur-sm border border-accent/20 text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-300',
  text: 'bg-transparent text-accent hover:text-cyan-300 transition-colors duration-300 underline-offset-4 hover:underline'
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
  xl: 'px-10 py-5 text-xl rounded-2xl'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  scrollTo,
  onClick,
  asLink = false,
  icon,
  iconPosition = 'right',
  className,
  disabled = false,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const handleClick = () => {
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
    'group relative inline-flex items-center justify-center gap-2',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          {React.createElement(icon, { className: 'w-5 h-5' })}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {React.createElement(icon, { className: 'w-5 h-5' })}
        </span>
      )}
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
      <Link href={href} className={baseClasses}>
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