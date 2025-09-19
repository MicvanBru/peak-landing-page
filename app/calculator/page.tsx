'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useROICalculator } from './hooks/useROICalculator';
import { CalculatorForm } from './components/CalculatorForm';
import { CalculatorResults } from './components/CalculatorResults';
import FAQSchema, { calculatorFAQs } from '@/components/seo/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs, { calculatorBreadcrumbs } from '@/components/seo/Breadcrumbs';

export default function CalculatorPage() {
  const [taskFrequency, setTaskFrequency] = useState('10');
  const [frequencyUnit, setFrequencyUnit] = useState('day');
  const [taskDuration, setTaskDuration] = useState('2');
  const [durationUnit, setDurationUnit] = useState('minutes');
  const [hourlyRate, setHourlyRate] = useState('100');
  const [timeHorizon, setTimeHorizon] = useState(5);
  const [investmentPercentage, setInvestmentPercentage] = useState(20);

  const calculations = useROICalculator({
    taskFrequency,
    frequencyUnit,
    taskDuration,
    durationUnit,
    hourlyRate,
    timeHorizon,
    investmentPercentage,
  });

  return (
    <>
      <StructuredData page="calculator" />
      <FAQSchema faqs={calculatorFAQs} page="ROI Calculator" />
      <Breadcrumbs items={calculatorBreadcrumbs} currentPage="ROI Calculator" />
      <div className="min-h-screen" style={{
        background: 'linear-gradient(135deg, hsl(270 25% 8%) 0%, hsl(270 20% 12%) 100%)'
      }}>
      <div className="container mx-auto px-6 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Automation <span className="text-accent">ROI Calculator</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto">
              Discover the true cost of repetitive tasks and potential savings from automation
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary hover:border-accent/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">Tell us about your task</h2>
              <CalculatorForm
                taskFrequency={taskFrequency}
                setTaskFrequency={setTaskFrequency}
                frequencyUnit={frequencyUnit}
                setFrequencyUnit={setFrequencyUnit}
                taskDuration={taskDuration}
                setTaskDuration={setTaskDuration}
                durationUnit={durationUnit}
                setDurationUnit={setDurationUnit}
                hourlyRate={hourlyRate}
                setHourlyRate={setHourlyRate}
                timeHorizon={timeHorizon}
                setTimeHorizon={setTimeHorizon}
                investmentPercentage={investmentPercentage}
                setInvestmentPercentage={setInvestmentPercentage}
              />
            </div>

            {/* Results Display */}
            <div className="lg:sticky lg:top-8">
              <CalculatorResults 
                results={calculations} 
                timeHorizon={timeHorizon}
              />
            </div>
          </div>

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