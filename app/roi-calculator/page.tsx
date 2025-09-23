'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/buttons';
import {
  frequencySteps,
  durationSteps,
  hourlyRateConfig,
  defaultFrequency,
  defaultDuration,
  defaultHourlyRate
} from './SliderConfigs';
import { calculateROI, formatCurrency, formatNumber } from './calculations';

export default function SimpleCalculatorPage() {
  const [frequencyIndex, setFrequencyIndex] = useState(defaultFrequency);
  const [durationIndex, setDurationIndex] = useState(defaultDuration);
  const [hourlyRate, setHourlyRate] = useState(defaultHourlyRate); // Direct value, not index

  // Tooltip states for each slider
  const [showFrequencyTooltip, setShowFrequencyTooltip] = useState(false);
  const [showDurationTooltip, setShowDurationTooltip] = useState(false);
  const [showHourlyRateTooltip, setShowHourlyRateTooltip] = useState(false);

  const results = useMemo(() => {
    const frequency = frequencySteps[frequencyIndex];
    const duration = durationSteps[durationIndex];

    return calculateROI(
      frequency.annualOccurrences,
      duration.hours,
      hourlyRate // Direct value
    );
  }, [frequencyIndex, durationIndex, hourlyRate]);

  const currentFrequency = frequencySteps[frequencyIndex];
  const currentDuration = durationSteps[durationIndex];

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, hsl(270 25% 8%) 0%, hsl(270 20% 12%) 100%)'
    }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Automation <span className="text-accent">ROI Calculator</span>
          </h1>
          <p className="text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto">
            In 60 seconds, see exactly how much time and money repetitive tasks are costing your business
          </p>
        </div>

        {/* Calculator Container */}
        <div className="lg:flex lg:gap-8 lg:items-stretch">
          {/* Configuration Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-secondary hover:border-accent/30 transition-all duration-300 h-full">
              <h2 className="text-xl font-bold text-foreground mb-6">What repetitive task is eating your time?</h2>

              {/* Frequency Slider */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">
                  How often do you do this task?
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max={frequencySteps.length - 1}
                      value={frequencyIndex}
                      onChange={(e) => setFrequencyIndex(parseInt(e.target.value))}
                      onMouseDown={() => setShowFrequencyTooltip(true)}
                      onMouseUp={() => setShowFrequencyTooltip(false)}
                      onTouchStart={() => setShowFrequencyTooltip(true)}
                      onTouchEnd={() => setShowFrequencyTooltip(false)}
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider-accent"
                    />
                    {showFrequencyTooltip && (
                      <div
                        className="absolute -top-14 transform -translate-x-1/2 bg-background border-2 border-accent text-accent px-3 py-2 rounded-lg text-base font-semibold whitespace-nowrap pointer-events-none z-10 shadow-xl"
                        style={{
                          left: `${(frequencyIndex / (frequencySteps.length - 1)) * 100}%`,
                        }}
                      >
                        {currentFrequency.label}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-accent">
                      {currentFrequency.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Duration Slider */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">
                  How long does it take each time?
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max={durationSteps.length - 1}
                      value={durationIndex}
                      onChange={(e) => setDurationIndex(parseInt(e.target.value))}
                      onMouseDown={() => setShowDurationTooltip(true)}
                      onMouseUp={() => setShowDurationTooltip(false)}
                      onTouchStart={() => setShowDurationTooltip(true)}
                      onTouchEnd={() => setShowDurationTooltip(false)}
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider-accent"
                    />
                    {showDurationTooltip && (
                      <div
                        className="absolute -top-14 transform -translate-x-1/2 bg-background border-2 border-accent text-accent px-3 py-2 rounded-lg text-base font-semibold whitespace-nowrap pointer-events-none z-10 shadow-xl"
                        style={{
                          left: `${(durationIndex / (durationSteps.length - 1)) * 100}%`,
                        }}
                      >
                        {currentDuration.label}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-accent">
                      {currentDuration.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hourly Rate Slider */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  What&apos;s your time worth per hour?
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="range"
                      min={hourlyRateConfig.min}
                      max={hourlyRateConfig.max}
                      step={hourlyRateConfig.step}
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                      onMouseDown={() => setShowHourlyRateTooltip(true)}
                      onMouseUp={() => setShowHourlyRateTooltip(false)}
                      onTouchStart={() => setShowHourlyRateTooltip(true)}
                      onTouchEnd={() => setShowHourlyRateTooltip(false)}
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider-accent"
                    />
                    {showHourlyRateTooltip && (
                      <div
                        className="absolute -top-14 transform -translate-x-1/2 bg-background border-2 border-accent text-accent px-3 py-2 rounded-lg text-base font-semibold whitespace-nowrap pointer-events-none z-10 shadow-xl"
                        style={{
                          left: `${((hourlyRate - hourlyRateConfig.min) / (hourlyRateConfig.max - hourlyRateConfig.min)) * 100}%`,
                        }}
                      >
                        ${hourlyRate}/hour
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-accent">
                      ${hourlyRate}/hour
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:w-1/2">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-secondary hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
              <h2 className="text-xl font-bold text-foreground mb-6">This task is costing you:</h2>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Time Card */}
                <div className="bg-background/50 rounded-xl p-4 border border-secondary text-center">
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    {formatNumber(results.annualHours)} hours/yr
                  </div>
                  <div className="text-xs sm:text-sm text-muted">
                    that&apos;s {formatNumber(results.workDays)} work days
                  </div>
                </div>

                {/* Money Card */}
                <div className="bg-background/50 rounded-xl p-4 border border-secondary text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">
                    {formatCurrency(results.annualCost)}/yr
                  </div>
                  <div className="text-xs sm:text-sm text-muted">
                    of your time
                  </div>
                </div>
              </div>

              {/* Investment Section - Now Prominent */}
              <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl p-5 border border-accent/30 mb-6">
                <div className="text-center mb-3">
                  <div className="text-sm text-foreground/80 mb-1">Automation budget</div>
                  <div className="text-3xl font-bold text-accent">
                    ~{formatCurrency(results.recommendedBudget)}
                  </div>
                </div>
                <div className="text-sm text-foreground/70 text-center">
                  Guideline: your automation budget is around 20% of the yearly cost to reclaim
                </div>
              </div>

              {/* Combined Investment & Value Message */}
              <div className="mt-auto bg-background/50 rounded-xl p-4 border border-secondary">
                <div className="text-base font-semibold text-foreground text-center mb-2">
                  Invest {formatCurrency(results.recommendedBudget)} once, save <span className="text-amber-600">{formatCurrency(results.annualCost)}</span> every year
                </div>
                <p className="text-sm text-muted text-center italic">
                  This is based on direct savings alone. Who knows what value
                  you&apos;ll create when freed up like this.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Full Width */}
        <div className="mt-8 text-center space-y-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
          <h3 className="text-xl font-semibold text-foreground">
            Ready to reclaim {formatNumber(results.annualHours)} hours per year?
          </h3>

          <Button
            variant="primary"
            size="lg"
            href="/systems-audit"
            asLink
            className="min-w-64"
          >
            Get Your Custom Automation Plan
          </Button>

          <p className="text-sm text-muted">
            Free 30-minute systems audit • No commitment required
          </p>
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

      {/* Custom slider styles */}
      <style jsx>{`
        .slider-accent::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(190 85% 55%);
          cursor: pointer;
          border: 2px solid hsl(190 85% 65%);
          transition: all 0.2s ease;
        }

        .slider-accent::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(190 85% 55%);
          cursor: pointer;
          border: 2px solid hsl(190 85% 65%);
          transition: all 0.2s ease;
        }

        .slider-accent::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: hsl(190 85% 60%);
        }

        .slider-accent::-moz-range-thumb:hover {
          transform: scale(1.2);
          background: hsl(190 85% 60%);
        }

        input[type="range"]::-webkit-slider-runnable-track {
          background: linear-gradient(to right,
            hsl(190 85% 55%) 0%,
            hsl(190 85% 55%) var(--range-progress),
            hsl(220 15% 20%) var(--range-progress),
            hsl(220 15% 20%) 100%);
        }
      `}</style>
    </div>
  );
}