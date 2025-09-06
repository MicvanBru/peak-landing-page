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