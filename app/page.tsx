import dynamic from 'next/dynamic';
import PainPoints from './components/PainPoints';
import SocialProof from './components/SocialProof';
import StorySection from './components/StorySection';

const TestimonialsSection = dynamic(() => import('./components/testimonials/TestimonialsSection'), { ssr: true });
const Credibility = dynamic(() => import('./components/Credibility'), { ssr: true });
const Process = dynamic(() => import('./components/Process'), { ssr: true });
const Differentiation = dynamic(() => import('./components/Differentiation'), { ssr: true });
const Objections = dynamic(() => import('./components/Objections'), { ssr: true });
const UrgencySection = dynamic(() => import('./components/UrgencySection'), { ssr: true });
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), { ssr: true });
const TrustFooter = dynamic(() => import('./components/TrustFooter'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Headlines */}
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted uppercase tracking-wider">
                  Business Owners:
                </p>
                <h1 className="space-y-2">
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                    You Don&apos;t Need More Hours.
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight">
                    You Need <span className="text-accent uppercase">AI SYSTEMS</span>.
                  </span>
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-lg lg:text-xl text-muted leading-relaxed max-w-2xl">
                Get 5-15 hours back weekly while your business runs without you
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(190_85%_55%_/_0.4)] glow-cyan-sm">
                  <span className="relative z-10">Get Your Life Back</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(180_90%_65%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
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

      {/* Credibility Section */}
      <Credibility />


      {/* Process Section */}
      <Process />

      {/* Differentiation Section */}
      <Differentiation />


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