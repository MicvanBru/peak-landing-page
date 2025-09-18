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

### Common Issues & Fixes

#### Next.js Cache Corruption (WSL2+Windows Issue)
**Symptoms**: 
- `ENOENT: no such file or directory, open '.next/server/app/page.js'`
- `ENOENT: no such file or directory, open '.next\routes-manifest.json'` 
- Build failures after code changes
- White screen with no styling

**Root Cause**: WSL2 accessing Windows filesystem (`/mnt/c/`) causes file system timing issues that corrupt Next.js incremental cache.

**Quick Fix**:
```bash
npm run fix  # Automatically cleans cache and restarts
```

**Manual Fix**:
```bash
npm run clean    # Clear cache
npm run dev      # Restart (now auto-cleans)
```

**Advanced Fixes**:
```bash
npm run clean:all     # Nuclear option - reinstalls everything
./scripts/dev-recovery.sh  # Auto-recovery dev server
```

**New Scripts Available**:
- `npm run dev` - Now automatically cleans cache before starting
- `npm run dev:quick` - Skip cache cleaning (faster but riskier)  
- `npm run dev:safe` - Force clean cache and restart
- `npm run fix` - One-command fix for cache issues
- `npm run clean:all` - Complete reset (cache + node_modules)

**Prevention**: 
- Use `npm run dev` (auto-cleaning) instead of `dev:quick`
- Move project to WSL filesystem for 10-100x performance boost:
  ```bash
  cp -r "/mnt/c/Peak Systems/peak-landing-page" ~/peak-landing-page
  ```
- The project now has WSL2+Windows compatibility fixes in next.config.ts

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
- Personal approach vs. generic business consultants

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

## SEO & Structured Data Strategy

### Current Architecture
The SEO implementation uses a modular, scalable approach designed for future growth:

```
/components/seo/
├── StructuredData.tsx    # Organization, Service, WebSite schemas
├── FAQSchema.tsx         # FAQ structured data + content
└── Breadcrumbs.tsx       # Navigation breadcrumbs (ready for growth)

/app/
├── layout.tsx            # Root meta tags + site-wide data
├── [route]/layout.tsx    # Page-specific metadata
└── [route]/page.tsx      # Imports SEO components as needed
```

### Implementation Pattern

**Meta Tags & Open Graph:**
- Defined in `layout.tsx` files (per route)
- Page-specific titles, descriptions, keywords
- Social media optimization (Twitter, Facebook)
- Search engine directives and verification

**Structured Data (JSON-LD):**
- Site-wide data: Organization, WebSite → `StructuredData.tsx`
- Page-specific data: FAQs, Services → `FAQSchema.tsx`
- Future: Products, Articles, Reviews as needed

**Static SEO Files:**
- `public/sitemap.xml` - All pages with priorities
- `public/robots.txt` - Crawler directives
- `public/manifest.json` - PWA capabilities

### Why This Approach

**Modular & Scalable:**
- Add new pages without duplicating SEO logic
- Centralized updates apply across all pages
- Ready for 10+ pages without refactoring

**Separation of Concerns:**
- SEO logic separate from page presentation
- FAQ content centralized for consistency
- Easy to maintain and debug

**GSO (Generative Search Optimization):**
- FAQ schema optimized for AI extraction (ChatGPT, Claude citations)
- Clear problem-solution content structure
- Statistical data included (5-15 hours saved, 30+ businesses)
- Structured for featured snippets and voice search

### When Adding New Pages

1. **Create route-specific layout.tsx:**
   ```tsx
   export const metadata = {
     title: "Page Title - Peak Systems",
     description: "Page-specific description",
     // ... other meta tags
   };
   ```

2. **Import SEO components in page.tsx:**
   ```tsx
   import StructuredData from '@/components/seo/StructuredData';
   import FAQSchema from '@/components/seo/FAQSchema';
   
   return (
     <>
       <StructuredData page="new-page" />
       <FAQSchema faqs={newPageFAQs} page="New Page" />
       <main>...</main>
     </>
   );
   ```

3. **Update supporting files:**
   - Add FAQs to `FAQSchema.tsx` if needed
   - Update `sitemap.xml` with new page
   - Consider breadcrumbs for deeper navigation levels

### Proven Results
This structure delivers:
- **Featured snippets eligibility** (87% CTR increase)
- **AI citation optimization** for generative search
- **Rich results** with business info and ratings
- **Mobile-first PWA** capabilities
- **Future-ready** for content expansion

The approach balances immediate SEO gains with long-term maintainability, following Next.js best practices while optimizing for both traditional search and AI-powered search experiences.

## Mobile Responsiveness Standards (2025)

### Core Principles
Mobile responsiveness is critical for conversion - mobile users are 5x more likely to abandon non-optimized sites. Every design decision must prioritize mobile experience first, then scale up for larger screens.

### Typography Standards

**Base Font Sizes (2025 Updated):**
- **Mobile**: 18-20px minimum (never below 16px for accessibility)
- **Tablet**: 17-19px base
- **Desktop**: 16-18px base
- iOS default: 17px SF Pro, Material Design: 16px Roboto

**Typography Hierarchy (Maximum 4 sizes):**
1. **H1 Headers**: 24-32px mobile, 30-50px desktop
2. **Body text**: 18-20px mobile, 16-18px desktop  
3. **Secondary text**: 14-15px
4. **Captions**: 12-13px (use sparingly)

**Fluid Typography Implementation:**
```css
/* Use CSS clamp() for responsive scaling */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
body { font-size: clamp(1.125rem, 2.5vw, 1.25rem); }
```

**Readability Requirements:**
- Line height: 1.5-1.8x font size for optimal reading
- Mobile: 30-40 characters per line
- Tablet: 50-60 characters per line  
- Desktop: 60-75 characters per line
- Use rem/em units for accessibility and scaling

### Responsive Breakpoints (2025)

**Core Breakpoints:**
- **Mobile**: 320-767px
- **Tablet**: 768-1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

**Advanced Breakpoints for Precision:**
- Small Mobile: 360px, 390px
- Tablet variants: 768px, 810px
- Desktop variants: 1366px, 1920px

**Implementation Strategy:**
- Mobile-first approach (min-width media queries)
- Content-driven breakpoints (not device-specific)
- Component-specific breakpoints when needed
- Support both portrait and landscape orientations

### Touch Targets & Interactive Elements

**Size Requirements:**
- **Minimum**: 44x44px (Apple/Google accessibility standard)
- **Recommended**: 48x48px for primary CTAs
- **Spacing**: 8-16px minimum between touch targets
- **Thumb zones**: Position important actions in lower screen area

**Touch Design Principles:**
- No hover-dependent functionality (mobile has no hover)
- Immediate visual feedback on tap (color change, animation)
- Support swipe gestures where appropriate
- Avoid small clustered links or buttons

### Image Optimization (2025 Standards)

**Next-Generation Format Strategy:**
1. **AVIF primary** (60-70% smaller than JPEG)
2. **WebP fallback** (broader browser support)
3. **JPEG/PNG final fallback** (universal compatibility)

**Implementation Pattern:**
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" width="600" height="400">
</picture>
```

**Responsive Image Sizing:**
- Mobile images: 320-720px width
- Hero images: ~600px mobile, ~1200px tablet
- Content images: ~480px mobile, ~800px tablet
- Maximum width: 2560px (covers 4K/Retina displays)

**Performance Requirements:**
- Always specify width/height attributes (prevents CLS)
- Use `loading="lazy"` for below-fold images
- Use `fetchpriority="high"` for LCP (Largest Contentful Paint) images
- Implement srcset for responsive delivery

### Spacing & Layout System

**8px Grid System:**
- Base spacing unit: 8px
- Mobile padding: 16px (2 units)
- Tablet padding: 24px (3 units)
- Desktop padding: 32px (4 units)
- All component spacing: multiples of 8px

**Fluid Layout Principles:**
- Use % and vw/vh units for flexibility
- Max-width containers to prevent excessive stretching
- CSS Grid and Flexbox for responsive layouts
- Container queries for component-level responsiveness

### Core Web Vitals (2025 Targets)

**Critical Performance Metrics:**
- **LCP** (Largest Contentful Paint): < 2.5 seconds
- **INP** (Interaction to Next Paint): < 200ms ✨ NEW - Replaced FID
- **CLS** (Cumulative Layout Shift): < 0.1

**INP Optimization (Key 2025 Focus):**
- Minimize JavaScript execution time
- Optimize event handlers for immediate response
- Reduce third-party script impact
- Use async processing for non-critical operations
- Test at 75th percentile of mobile users

### Mobile Navigation Patterns

**Recommended Patterns:**
- Hamburger menu or bottom navigation
- Collapsible/slide-out drawer patterns
- Clear, concise navigation labels
- Smooth transitions and animations
- Fixed or sticky positioning for key navigation

**Avoid:**
- Dropdowns that require hover
- Too many navigation levels
- Small tap targets in navigation
- Complex mega-menus on mobile

### Forms & Input Optimization

**Mobile Form Best Practices:**
- Use appropriate input types (email, tel, number, date)
- Include autocomplete attributes
- Large input fields (minimum 44px height)
- Clear, immediate error messages
- Single-column layout for simplicity
- Minimize required fields

### Performance Optimization Rules

**Mobile Loading Strategy:**
- Critical CSS inline in `<head>`
- JavaScript defer/async for non-critical scripts
- Font preloading for custom fonts
- Progressive enhancement approach
- Resource hints (preload, prefetch, preconnect)

**Image Performance:**
- Compress all images (target 60-70% size reduction)
- Use CDN for global delivery
- Implement lazy loading for below-fold content
- Optimize for different pixel densities (1x, 2x, 3x)

### Testing Requirements

**Device Testing:**
- Test on real devices, not just browser DevTools
- Multiple orientations (portrait/landscape)
- Various network speeds (3G, 4G, WiFi)
- Different pixel densities and screen sizes
- Cross-browser testing (Safari, Chrome, Firefox)

**Accessibility Testing:**
- 200% zoom capability without horizontal scroll
- WCAG contrast ratios (4.5:1 normal text, 3:1 large text)
- Screen reader compatibility
- Keyboard navigation support
- Voice control accessibility

### Implementation Checklist

**Typography:**
✅ Font size ≥ 18px on mobile
✅ Fluid typography with CSS clamp()
✅ Line height 1.5-1.8x font size
✅ Character limits enforced

**Interactive Elements:**
✅ Touch targets ≥ 44x44px  
✅ 8-16px spacing between targets
✅ No hover-dependent functionality
✅ Visual feedback on interactions

**Images:**
✅ AVIF/WebP format implementation
✅ Width/height attributes specified
✅ Lazy loading for non-critical images
✅ Responsive srcset implementation

**Performance:**
✅ INP < 200ms response time
✅ LCP < 2.5 seconds
✅ CLS < 0.1 layout shift
✅ Mobile-first CSS architecture

**Layout:**
✅ 8px grid spacing system
✅ Mobile-first breakpoints
✅ No horizontal scroll on any device
✅ Flexible, fluid layouts

### Common Mobile Issues to Avoid

**Performance Killers:**
- Large unoptimized images
- Render-blocking JavaScript
- Too many third-party scripts
- Excessive DOM elements

**UX Problems:**
- Small touch targets
- Horizontal scrolling
- Slow interactions (>200ms)
- Content that requires zooming

**Accessibility Issues:**
- Poor contrast ratios
- Missing alt text
- Non-scalable text
- Keyboard navigation problems

This mobile responsiveness standard ensures the Peak Systems landing page delivers exceptional user experience across all devices while maintaining top performance scores and accessibility compliance.