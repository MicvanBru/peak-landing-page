import dynamic from 'next/dynamic';
import PainPoints from '@/components/sections/PainPoints';
import SocialProof from '@/components/sections/SocialProof';
import StorySection from '@/components/sections/StorySection';
import { Button } from '@/components/buttons';
import HeroMedia from '@/components/HeroMedia';
import FAQSchema, { homepageFAQs } from '@/components/seo/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';

// Easy configuration - just change this URL to switch between video/image
const HERO_MEDIA = {
  url: "https://channel-crafters.s3.us-east-2.amazonaws.com/How+Business+Owners+Are+Making+MORE+Money+by+Working+LESS+(Copy+This).mp4" // S3 hosted video with full autoplay control
  // caption: "Business transformation in action" // Remove or add caption if needed
};

// Examples of different media types:
// To show YouTube video:
// url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
// url: "https://youtu.be/YOUR_VIDEO_ID" 

// To show image:
// url: "https://your-domain.com/hero-image.jpg"
// url: "/images/hero.png" (for local images in public folder)

// To hide media section entirely:
// url: "" (empty string - page looks clean without media)

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
    <>
      <StructuredData page="home" />
      <FAQSchema faqs={homepageFAQs} page="Homepage" />
      <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center min-h-screen justify-center py-20 space-y-8">
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

            {/* Video/Image Section - Only show if URL is provided */}
            {HERO_MEDIA.url && (
              <div className="relative mt-12 w-full max-w-4xl mx-auto">
                <div className="relative">
                  {/* Video/Image container with 16:9 aspect ratio for video or square for image */}
                  <div className="relative w-full aspect-video max-w-3xl mx-auto">
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-[100px] animate-pulse"></div>
                    
                    {/* Dynamic Video/Image - configured at top of file */}
                    <HeroMedia {...HERO_MEDIA} />
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button - positioned after video for better engagement flow */}
            <div className="mt-12 flex flex-col items-center">
              <Button
                variant="primary"
                size="lg"
                href="/systems-audit"
                asLink
              >
                Get My Time Back
              </Button>
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
    </>
  );
}