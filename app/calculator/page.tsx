import Link from 'next/link';
import { CalculatorWizard } from './components/CalculatorWizard';
import FAQSchema, { calculatorFAQs } from '@/components/seo/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs, { calculatorBreadcrumbs } from '@/components/seo/Breadcrumbs';

export default function CalculatorPage() {
  return (
    <>
      <StructuredData page="calculator" />
      <FAQSchema faqs={calculatorFAQs} page="ROI Calculator" />
      <Breadcrumbs items={calculatorBreadcrumbs} currentPage="ROI Calculator" />
      <div className="min-h-screen" style={{
        background: 'linear-gradient(135deg, hsl(270 25% 8%) 0%, hsl(270 20% 12%) 100%)'
      }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Automation <span className="text-accent">ROI Calculator</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto">
              In 60 seconds, see exactly how much time and money repetitive tasks are costing your business
            </p>
          </div>

          {/* Calculator Wizard */}
          <CalculatorWizard />

          {/* Back to Homepage */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}