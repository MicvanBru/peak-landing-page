# Peak Systems Design System

**The single source of truth for all design decisions across the Peak Systems landing page.**

Use this file as your quick reference when building or modifying components. All standards are mobile-first and follow 2025 best practices.

---

## 🎨 Typography System

### Standard Text Hierarchy

**All text uses fluid typography that scales smoothly from mobile to desktop.**

```css
/* Page Titles (H1) */
.text-hero = "text-fluid-2xl lg:text-fluid-3xl font-bold text-foreground"
/* Example: 32-48px mobile, 40-64px desktop */

/* Section Headers (H2) */
.text-section = "text-fluid-xl lg:text-fluid-2xl font-bold text-foreground mb-8"
/* Example: 24-32px mobile, 32-48px desktop */

/* Subsection Headers (H3) */
.text-subsection = "text-fluid-lg lg:text-fluid-xl font-semibold text-foreground mb-6"
/* Example: 20-24px mobile, 24-32px desktop */

/* Body Text */
.text-body = "text-fluid-base text-muted leading-relaxed"
/* Example: 18-20px mobile, consistent reading experience */

/* Supporting Text */
.text-supporting = "text-fluid-sm text-muted"
/* Example: 14-16px, for captions, small details */
```

### Typography Rules

✅ **DO:**
- Use fluid typography classes for all text
- Maintain 18px minimum on mobile (`text-fluid-base`)
- Use `text-foreground` for primary text
- Use `text-muted` for secondary text
- Keep line height between 1.4-1.6

❌ **DON'T:**
- Use fixed sizes like `text-2xl` or `text-5xl`
- Go below 16px on any device
- Use more than 4-5 text sizes per page
- Create custom font sizes without system approval

---

## 🌈 Color System

### Primary Color Palette

```css
/* Primary Colors (Use these 90% of the time) */
--accent: hsl(190 85% 55%)        /* Cyan - primary brand color */
--foreground: hsl(210 15% 95%)    /* White/light gray - main text */
--muted: hsl(210 10% 65%)         /* Gray - secondary text */
--background: hsl(220 25% 8%)     /* Dark blue/black - backgrounds */

/* Supporting Colors */
--card: hsl(220 20% 12%)          /* Card backgrounds */
--secondary: hsl(220 15% 20%)     /* Secondary elements */
```

### Approved Text Colors

```css
/* Main text */
.text-foreground    /* Primary text - white/light */
.text-muted         /* Secondary text - gray */
.text-accent        /* Accent text - cyan (use sparingly) */

/* Special cases */
.text-white         /* Pure white for high contrast */
.text-gray-300      /* Light gray for subtle text */
.text-gray-500      /* Medium gray for less important text */
```

### Approved Gradients

```css
/* Brand Gradient (preferred) */
.bg-gradient-accent = "bg-gradient-to-r from-accent/80 to-accent"

/* Text Gradient (for headlines) */
.text-gradient = "bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent"

/* Background Gradients */
.bg-gradient-dark = "bg-gradient-to-b from-background via-card to-background"
```

### Color Usage Rules

✅ **DO:**
- Use `--accent` (cyan) as primary brand color
- Stick to the defined color palette
- Use `text-foreground` and `text-muted` for 90% of text
- Use gradients sparingly for emphasis

❌ **DON'T:**
- Create rainbow gradients (`from-cyan-400 to-blue-500`)
- Use random colors not in the palette
- Overuse accent color - it should feel special
- Use low contrast color combinations

---

## 📐 Spacing & Layout System

### 8px Grid System

**All spacing follows multiples of 8px for visual consistency.**

```css
/* Spacing Variables */
--spacing-xs: 0.5rem     /* 8px */
--spacing-sm: 1rem       /* 16px - Mobile base */
--spacing-md: 1.5rem     /* 24px - Tablet */
--spacing-lg: 2rem       /* 32px - Desktop */
--spacing-xl: 2.5rem     /* 40px */
--spacing-2xl: 3rem      /* 48px */
```

### Standard Section Layout

```css
/* Standard Section Wrapper */
.section-standard = "py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"

/* Container Widths */
.container-standard = "max-w-6xl mx-auto"
.container-narrow = "max-w-4xl mx-auto"    /* For text-heavy sections */
.container-wide = "max-w-7xl mx-auto"      /* For wide layouts */
```

### Component Spacing

```css
/* Between components */
.mb-section = "mb-16 sm:mb-20 lg:mb-24"

/* After headers */
.mb-header = "mb-8"
.mb-subheader = "mb-6"

/* Between paragraphs */
.mb-paragraph = "mb-4"
```

### Layout Rules

✅ **DO:**
- Use consistent section padding: `py-16 sm:py-20 lg:py-24`
- Use `max-w-6xl` for most content containers
- Follow 8px spacing increments
- Use responsive padding: `px-4 sm:px-6 lg:px-8`

❌ **DON'T:**
- Use random padding values like `py-32` or `px-5`
- Mix different container widths without reason
- Create spacing that doesn't follow the 8px grid

### Text Container Width Guidelines

**For readable text content, use these container widths:**

```css
/* Supporting text under headers */
.text-support = "max-w-3xl mx-auto"     /* 768px - minimum for full sentences */

/* Comfortable reading of longer paragraphs */
.text-comfortable = "max-w-4xl mx-auto"  /* 896px - ideal for detailed content */

/* Short headlines or single-line text */
.text-headline = "max-w-2xl mx-auto"     /* 672px - only for very short text */
```

### Container Width Rules

✅ **DO:**
- Use `max-w-3xl` (768px) minimum for supporting text under headers
- Use `max-w-4xl` (896px) for comfortable reading of longer content
- Use `max-w-2xl` (672px) only for very short headlines or single-line text
- Test text readability on mobile devices

❌ **DON'T:**
- Use `max-w-2xl` for full sentences - they will appear squeezed
- Create containers narrower than `max-w-3xl` for paragraph text
- Ignore how text flows on different screen sizes

---

## 🎯 Interactive Elements

### Touch Targets

```css
/* Minimum touch targets (all interactive elements) */
.touch-target = "min-h-[44px] min-w-[44px]"

/* Ideal touch targets (primary buttons) */
.touch-target-ideal = "min-h-[48px] min-w-[48px]"
```

### Button System

```css
/* Primary CTA Button */
.btn-primary = "bg-accent text-background font-semibold hover:scale-105 transition-all duration-300 min-h-[48px] px-6 py-3 text-fluid-base rounded-xl"

/* Secondary Button */
.btn-secondary = "border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 min-h-[44px] px-4 py-2 text-fluid-base rounded-xl"

/* Large CTA Button */
.btn-large = "bg-gradient-to-r from-accent to-accent text-background font-bold hover:scale-105 transition-all duration-300 min-h-[48px] px-8 py-4 text-fluid-lg rounded-2xl"
```

### Interactive Rules

✅ **DO:**
- Ensure all buttons meet 44px minimum height
- Use 48px height for primary CTAs
- Provide visual feedback on hover/tap
- Space interactive elements 8-16px apart

❌ **DON'T:**
- Create buttons smaller than 44px height
- Use hover effects on mobile
- Place touch targets too close together

---

## 🚀 Quick Reference - Copy & Paste Ready

### Common Patterns

**Section Header:**
```jsx
<h2 className="text-fluid-xl lg:text-fluid-2xl font-bold text-foreground mb-8">
  Your Section Title
</h2>
```

**Body Paragraph:**
```jsx
<p className="text-fluid-base text-muted leading-relaxed mb-4">
  Your content here...
</p>
```

**Section Wrapper:**
```jsx
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Your content */}
  </div>
</section>
```

**Primary Button:**
```jsx
<Button
  variant="primary"
  size="lg"
  className="min-h-[48px]"
  href="/your-link"
  asLink
>
  Your CTA Text
</Button>
```

**Accent Text (use sparingly):**
```jsx
<span className="text-accent font-semibold">
  Highlighted text
</span>
```

### Standard Layouts

**Text-Heavy Section:**
```jsx
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-fluid-xl lg:text-fluid-2xl font-bold text-foreground mb-8">
      Section Title
    </h2>
    <p className="text-fluid-base text-muted leading-relaxed">
      Your content...
    </p>
  </div>
</section>
```

**Two-Column Layout:**
```jsx
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Column content */}
    </div>
  </div>
</section>
```

---

## 🛠 Development Utilities

### CSS Utility Classes (in globals.css)

```css
/* Common patterns turned into reusable classes */
.section-padding { @apply py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8; }
.container-standard { @apply max-w-6xl mx-auto; }
.heading-primary { @apply text-fluid-xl lg:text-fluid-2xl font-bold text-foreground mb-8; }
.text-body-standard { @apply text-fluid-base text-muted leading-relaxed; }
.btn-touch-target { @apply min-h-[44px] min-w-[44px]; }
```

### Responsive Breakpoints

```css
/* Mobile-first breakpoints */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Small desktops */
xl: 1280px   /* Large desktops */
2xl: 1536px  /* Extra large screens */
```

---

## ⚠️ Common Mistakes to Avoid

1. **Don't use fixed text sizes** - Always use fluid typography
2. **Don't create random gradients** - Stick to approved color palette
3. **Don't ignore touch targets** - All interactive elements need 44px minimum
4. **Don't mix spacing systems** - Follow the 8px grid consistently
5. **Don't create one-off styles** - Use the design system or update it
6. **Don't skip mobile testing** - Mobile-first means mobile-first

---

## 🔄 Updating This System

When you need to add new design patterns:

1. **Document it here first** - Don't create one-off styles
2. **Test across devices** - Ensure mobile responsiveness
3. **Update utility classes** - Add reusable CSS if needed
4. **Communicate changes** - Update this file with new patterns

**Remember: This design system exists to make development faster and more consistent. When in doubt, refer back to these standards.**

---

## 📚 Related Files

- `app/globals.css` - CSS variables and utility classes
- `CLAUDE.md` - Development principles and project guidelines
- `components/buttons/Button.tsx` - Button component implementation
- `tailwind.config.js` - Tailwind configuration (if needed)

---

*Last updated: $(date)  
Keep this file current as the single source of design truth.*