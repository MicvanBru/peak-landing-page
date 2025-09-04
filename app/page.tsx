import dynamic from 'next/dynamic';
import PainPoints from '@/components/sections/PainPoints';
import SocialProof from '@/components/sections/SocialProof';
import StorySection from '@/components/sections/StorySection';
import { FloatingOrbs } from '@/components/ui/FloatingElements';

const TestimonialsSection = dynamic(() => import('@/components/testimonials/TestimonialsSection'), { ssr: true });
const TimeBackSection = dynamic(() => import('@/components/sections/TimeBackSection'), { ssr: true });
const WhatWeDoSection = dynamic(() => import('@/components/sections/WhatWeDoSection'), { ssr: true });
const Process = dynamic(() => import('@/components/sections/Process'), { ssr: true });
const QualifyingSection = dynamic(() => import('@/components/sections/QualifyingSection'), { ssr: true });
const Objections = dynamic(() => import('@/components/sections/Objections'), { ssr: true });
const UrgencySection = dynamic(() => import('@/components/sections/UrgencySection'), { ssr: true });
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'), { ssr: true });
const TrustFooter = dynamic(() => import('@/components/sections/TrustFooter'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden relative">
      {/* Global Floating Elements */}
      <FloatingOrbs />
      {/* Hero Section - Modern Dynamic */}
      <section className="relative overflow-hidden w-full py-32 lg:py-40 mesh-gradient-1"
               style={{ background: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Headlines */}
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted uppercase tracking-wider">
                  Business Owners:
                </p>
                <h1 className="space-y-2">
                  <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                    You Don&apos;t Need More Hours.
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white">
                    You Need <span className="gradient-text-animated uppercase">AI SYSTEMS</span>.
                  </span>
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl">
                Get 5-15 hours back weekly while your business runs without you
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="group relative inline-flex items-center justify-center px-10 py-6 text-xl font-bold text-black rounded-2xl glow-magnetic ripple-effect gpu-accelerated"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--accent-cyan) 0%, hsl(180 90% 65%) 50%, var(--accent-purple) 100%)',
                          backgroundSize: '200% 100%'
                        }}>
                  <span className="relative z-10">Get Your Life Back</span>
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2 text-2xl">→</span>
                </button>
                
                <div className="text-center">
                  <a 
                    href="/calculator" 
                    className="inline-flex items-center text-muted hover:text-accent transition-colors duration-300 text-sm"
                  >
                    Calculate Your ROI from Automation 
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Placeholder for visual element - can be replaced with actual graphic/image */}
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
                  
                  {/* Hero image placeholder - replace with actual image */}
                  <div className="relative z-10 w-full h-full rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl font-bold text-accent mb-4">[HERO IMAGE]</div>
                      <p className="text-muted text-sm">Business owner working late</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-400/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-400/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-cyan-400/2 via-transparent to-blue-500/2 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Pain Points Section */}
      <PainPoints />

      {/* Story Section */}
      <StorySection />

      {/* New Testimonials Section */}
      <TestimonialsSection />

      {/* How to Actually Get Your Time Back Section */}
      <TimeBackSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Process Section */}
      <Process />

      {/* Qualifying Section - Is This For You? */}
      <QualifyingSection />

      {/* Objections Section */}
      <Objections />

      {/* Urgency Section */}
      <UrgencySection />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Trust Indicators Footer */}
      <TrustFooter />
    </main>
  );
}