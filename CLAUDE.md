# Website Development Principles

## Core Development Approach

### Think Before Building
- What's the simplest way to achieve this goal?
- Can I use existing components/styles instead of creating new ones?
- Will this be maintainable and easy to update later?
- How does this change impact conversion potential?
- Does this align with the business owner's pain points we're addressing?

### Simplicity First
- Prefer 1 smart, flexible component over many specialized ones
- Use existing design patterns from the codebase (don't reinvent)
- Leverage Tailwind utilities and existing spacing/color systems
- Start with the minimum viable solution, enhance only when needed
- Keep component logic focused on single responsibilities

### Quick Iterations
- Show progress and changes as they're implemented
- Focus on visible improvements that move the needle
- No formal planning phases unless specifically requested
- Prioritize user-facing improvements over internal refactoring
- Make incremental changes that can be easily tested

## Landing Page Focused Guidelines

### Conversion-Focused Development
- Every change should improve user experience or conversion potential
- Prioritize elements that build trust (testimonials, social proof, credibility)
- Maintain clear calls-to-action throughout the page flow
- Ensure smooth user journey from problem recognition to solution
- Test changes against the goal: converting overwhelmed business owners

### Performance & User Experience
- Prioritize page speed and mobile-first experience
- Ensure smooth scroll animations don't hurt performance
- Keep build times reasonable for development workflow
- Test on both desktop and mobile viewports
- Maintain accessibility standards for broader reach

### Technical Standards
- Follow Next.js App Router patterns consistently
- Use TypeScript for all new components and modifications
- Leverage existing Tailwind design system and CSS variables
- Test build process after major changes (npm run dev, npm run build)
- Maintain clean git history with descriptive commit messages

### Content Strategy
- Focus on business owner pain points (working 70+ hour weeks, system chaos)
- Emphasize time-saving and automation benefits consistently
- Keep testimonials authentic and results-focused
- Maintain Peak Systems brand voice (professional, empathetic, solution-oriented)
- Ensure all copy supports the core message: "Get your life back through systems"

## Project-Specific Context

### Peak Systems Brand
- Target audience: Overwhelmed business owners working excessive hours
- Core value proposition: Systems and automation that give time/life back  
- Tone: Professional yet empathetic, results-focused, trustworthy
- Differentiation: Personal approach vs. generic business consultants

### Technical Architecture
- Next.js 15 with App Router
- Tailwind CSS v4 for styling
- Framer Motion for animations
- TypeScript throughout
- Static export for production (GitHub Pages deployment)

### Key Components to Maintain
- TestimonialsSection with flexible layouts (video, picture, text, featured)
- Consistent animation patterns using Framer Motion
- Responsive grid systems for testimonials and content sections
- Clean separation between data (testimonialData.ts) and presentation

## Decision Framework

When making changes, ask:
1. **Impact**: Does this improve conversion or user experience?
2. **Simplicity**: Is this the simplest solution that works?
3. **Consistency**: Does this fit the existing patterns and brand?
4. **Maintenance**: Will this be easy to update and extend?
5. **Performance**: Does this maintain fast loading and smooth interactions?

## Common Tasks

### Adding Testimonials
- Add to `testimonialData.ts` with proper TypeScript interface
- Choose appropriate layout type (video, picture, text, featured)
- Ensure authentic quotes that emphasize business results

### Styling Changes  
- Use existing Tailwind classes and CSS variables
- Maintain consistent spacing, colors, and typography
- Test responsive behavior across screen sizes

### Performance Optimization
- Check bundle size impact of new dependencies
- Ensure animations are smooth and don't block main thread
- Verify static export builds successfully for deployment