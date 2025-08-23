# Peak Systems Landing Page

A high-converting landing page for Peak Systems - a business automation consultancy that helps business owners reclaim their time through intelligent systems and automation.

## 🚀 Live Demo

Visit the live site: [https://micvanbru.github.io/peak-landing-page/](https://micvanbru.github.io/peak-landing-page/)

## 📋 Overview

This landing page is designed to resonate with overwhelmed business owners who are working 70+ hour weeks and want to build systems that give them their life back. The narrative-driven design walks visitors through a journey from recognition of their pain points to understanding the solution.

## 🎯 Key Features

- **Story-driven narrative** - Opens with a relatable founder story that builds trust
- **Interactive timeline** - Animated journey showing the transformation process
- **Social proof** - Client testimonials and results showcased throughout
- **Clear differentiation** - "Them vs Me" comparison highlighting unique approach
- **Responsive design** - Fully optimized for all device sizes
- **Performance optimized** - Built with Next.js for fast loading times
- **Smooth animations** - Framer Motion for engaging scroll-triggered animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Language**: TypeScript

## 💻 Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MicvanBru/peak-landing-page.git

# Navigate to project directory
cd peak-landing-page

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run start
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment workflow:

1. Builds the Next.js app as static files
2. Exports to the `out` directory
3. Deploys to GitHub Pages

The site is configured with the base path `/peak-landing-page` for GitHub Pages compatibility.

## 📁 Project Structure

```
peak-landing-page/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page component
│   └── globals.css      # Global styles and Tailwind imports
├── components/
│   └── sections/        # Individual page sections
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions deployment workflow
└── next.config.ts       # Next.js configuration
```

## 🎨 Key Sections

1. **Hero** - Attention-grabbing headline with emotional hook
2. **Story Timeline** - Interactive founder journey
3. **Pain Points** - Recognition of common struggles
4. **Transformation** - Before/after comparison
5. **Differentiation** - Why this approach works
6. **Process** - How the system works
7. **Testimonials** - Client success stories
8. **CTA** - Clear call-to-action throughout

## 📝 License

This project is private and proprietary.

## 👤 Author

Built for Peak Systems - Business Automation Consultancy

---

*Helping business owners stop working 70-hour weeks by building the systems that do the work for them.*