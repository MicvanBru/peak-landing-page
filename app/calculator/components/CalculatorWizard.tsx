'use client';

import { useState } from 'react';
import { Button } from '@/components/buttons';
import { useROICalculator } from '../hooks/useROICalculator';

interface CalculatorWizardProps {
  onComplete?: (results: any) => void;
}

export function CalculatorWizard({ onComplete }: CalculatorWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Form state
  const [taskFrequency, setTaskFrequency] = useState('10');
  const [frequencyUnit, setFrequencyUnit] = useState('day');
  const [taskDuration, setTaskDuration] = useState('2');
  const [durationUnit, setDurationUnit] = useState('minutes');
  const [hourlyRate, setHourlyRate] = useState('100');
  
  // Smart defaults for advanced settings
  const [timeHorizon, setTimeHorizon] = useState(1);
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

  const canProceedToStep2 = taskFrequency && taskDuration;
  const canProceedToResults = canProceedToStep2 && hourlyRate;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getTimeContext = (hours: number) => {
    const days = Math.round(hours / 8);
    if (days < 7) return `${days} work days`;
    const weeks = Math.round(days / 5);
    if (weeks < 4) return `${weeks} work weeks`;
    const months = Math.round(weeks / 4);
    return `${months} months`;
  };

  const renderStep1 = () => (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          What repetitive task is eating your time?
        </h2>
        <p className="text-foreground/80">
          Let's see exactly how much this is costing you
        </p>
      </div>

      {/* Task Frequency */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          How often do you do this task?
        </label>
        <div className="flex gap-3">
          <input
            type="number"
            value={taskFrequency}
            onChange={(e) => setTaskFrequency(e.target.value)}
            min="1"
            className="flex-1 px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
            placeholder="10"
          />
          <select
            value={frequencyUnit}
            onChange={(e) => setFrequencyUnit(e.target.value)}
            className="px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
          >
            <option value="day">times per day</option>
            <option value="week">times per week</option>
            <option value="month">times per month</option>
            <option value="year">times per year</option>
          </select>
        </div>
      </div>

      {/* Task Duration */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          How long does it take each time?
        </label>
        <div className="flex gap-3">
          <input
            type="number"
            value={taskDuration}
            onChange={(e) => setTaskDuration(e.target.value)}
            min="1"
            className="flex-1 px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
            placeholder="2"
          />
          <select
            value={durationUnit}
            onChange={(e) => setDurationUnit(e.target.value)}
            className="px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
          >
            <option value="seconds">seconds</option>
            <option value="minutes">minutes</option>
            <option value="hours">hours</option>
          </select>
        </div>
      </div>

      {/* Examples */}
      <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
        <p className="text-sm font-medium text-foreground mb-3">Common examples:</p>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground/80">
          <div>• Weekly reports (5 times/week, 30 minutes)</div>
          <div>• Processing invoices (20 times/month, 15 minutes)</div>
          <div>• Customer onboarding (8 times/month, 2 hours)</div>
          <div>• Data entry (daily, 45 minutes)</div>
        </div>
      </div>

      <div className="text-center">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setCurrentStep(2)}
          disabled={!canProceedToStep2}
          className="min-w-48"
        >
          Next: See what this costs you →
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          What's your time worth?
        </h2>
        <p className="text-foreground/80">
          This helps us calculate the true cost of this task
        </p>
      </div>

      {/* Hourly Rate */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Your hourly rate
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="text-muted">$</span>
          </div>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            min="1"
            className="w-full pl-8 pr-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
            placeholder="100"
          />
        </div>
      </div>

      {/* Guidance */}
      <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
        <p className="text-sm font-medium text-foreground mb-3">Don't know your hourly rate?</p>
        <p className="text-sm text-foreground/80 mb-3">Business owners typically value their time at:</p>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground/80">
          <div>• Small business: $75-150/hour</div>
          <div>• Service business: $100-200/hour</div>
          <div>• Professional practice: $150-300/hour</div>
          <div>• Executive/consultant: $200-500/hour</div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setCurrentStep(1)}
          className="min-w-32"
        >
          ← Back
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={() => setCurrentStep(3)}
          disabled={!canProceedToResults}
          className="min-w-48"
        >
          Calculate my ROI →
        </Button>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="space-y-6 md:space-y-8">
      {/* Primary Insight */}
      <div className="text-center bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl p-6 md:p-8 border border-accent/30">
        <div className="text-sm font-medium text-accent mb-2">This task costs you</div>
        <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">
          {formatNumber(calculations.annualHours)} hours per year
        </div>
        <div className="text-lg md:text-xl font-semibold text-foreground mb-4">
          Worth {formatCurrency(calculations.annualCost)} of your time
        </div>
        <div className="text-sm text-foreground/80">
          That's {getTimeContext(calculations.annualHours)} you could reclaim with automation
        </div>
      </div>

      {/* Investment & Returns Card */}
      <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-600/10 rounded-xl p-6 border border-amber-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-500/20 rounded-lg">
            <span className="text-lg">💰</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Automation Investment Plan
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-background/50 rounded-lg p-4 border border-amber-500/20">
            <div className="text-sm text-amber-600 font-medium mb-1">One-Time Investment</div>
            <div className="text-2xl font-bold text-amber-700">
              {formatCurrency(calculations.investment)}
            </div>
            <div className="text-xs text-foreground/60 mt-1">{investmentPercentage}% of annual savings</div>
          </div>
          
          <div className="bg-background/50 rounded-lg p-4 border border-green-500/20">
            <div className="text-sm text-green-600 font-medium mb-1">Your Net Savings</div>
            <div className="text-2xl font-bold text-green-700">
              {formatCurrency(calculations.netROI)}
            </div>
            <div className="text-xs text-foreground/60 mt-1">over {timeHorizon} year{timeHorizon > 1 ? 's' : ''}</div>
          </div>
          
          <div className="bg-background/50 rounded-lg p-4 border border-accent/20">
            <div className="text-sm text-accent font-medium mb-1">Return Multiple</div>
            <div className="text-2xl font-bold text-accent">
              {calculations.roiMultiple}x ROI
            </div>
            <div className="text-xs text-foreground/60 mt-1">return on investment</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-foreground/80">
              Break even in {Math.round(calculations.investment / (calculations.annualCost / 365))} days
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-foreground/80">
              Save {formatCurrency(Math.round(calculations.annualCost / 12))} per month after automation
            </span>
          </div>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
        <h3 className="text-lg font-bold text-foreground mb-4 text-center">
          Time & Money Reclaimed
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-xl font-bold text-accent">
              {formatNumber(calculations.annualHours * timeHorizon)} hours
            </div>
            <div className="text-sm text-foreground/80">total time saved</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">
              {formatCurrency(calculations.totalSavings)}
            </div>
            <div className="text-sm text-foreground/80">total value created</div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {calculations.netROI > 5000 && (
        <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/30 text-center">
          <div className="text-2xl mb-2">🎯</div>
          <p className="text-lg font-semibold text-green-700 mb-2">
            Excellent ROI Potential!
          </p>
          <p className="text-sm text-foreground/80">
            With {formatCurrency(calculations.netROI)} in net savings, this automation investment has strong potential to transform your business operations.
          </p>
        </div>
      )}

      {/* Advanced Settings */}
      <div className="border-t border-secondary/50 pt-6">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-2 mx-auto bg-accent/10 px-4 py-2 rounded-lg border border-accent/20"
        >
          <span>⚙️</span>
          {showAdvanced ? 'Hide' : 'Show'} advanced options
          <span className="text-xs">{showAdvanced ? '↑' : '↓'}</span>
        </button>
        
        {showAdvanced && (
          <div className="mt-6 space-y-6 bg-card/30 rounded-lg p-6 border border-secondary/50">
            <div className="text-center mb-4">
              <h4 className="text-sm font-medium text-foreground/80">Customize Your Analysis</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Time Horizon: <span className="text-accent font-semibold">{timeHorizon} year{timeHorizon > 1 ? 's' : ''}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted mt-1">
                  <span>1 year</span>
                  <span>5 years</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Investment Level: <span className="text-amber-600 font-semibold">{investmentPercentage}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="40"
                  value={investmentPercentage}
                  onChange={(e) => setInvestmentPercentage(parseInt(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted mt-1">
                  <span>Conservative</span>
                  <span>Aggressive</span>
                </div>
              </div>
            </div>
            
            <div className="text-center text-xs text-foreground/60 bg-background/50 rounded p-3">
              💡 Higher investment percentages typically yield faster automation delivery but require larger upfront commitment
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Ready to reclaim {formatNumber(calculations.annualHours)} hours per year?
          </h3>
          <p className="text-sm text-foreground/80">
            Let's build your custom automation solution
          </p>
        </div>
        
        <Button
          variant="primary"
          size="lg"
          href="/systems-audit"
          asLink
          className="min-w-64 mb-3"
        >
          Get Your Custom Automation Plan
        </Button>
        
        <div className="space-y-2">
          <p className="text-sm text-muted">
            <strong>Free 30-minute systems audit</strong> to map out your automation strategy
          </p>
          <div className="flex justify-center gap-6 text-xs text-foreground/60">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Custom roadmap included</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="md"
          onClick={() => setCurrentStep(1)}
        >
          ← Calculate another task
        </Button>
      </div>
    </div>
  );

  const renderProgressIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                currentStep >= step
                  ? 'bg-accent text-background'
                  : 'bg-secondary text-muted'
              }`}
            >
              {step}
            </div>
            {step < 3 && (
              <div
                className={`w-12 h-1 mx-2 transition-all ${
                  currentStep > step ? 'bg-accent' : 'bg-secondary'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {renderProgressIndicator()}
      
      <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-secondary hover:border-accent/30 transition-all duration-300 min-h-[600px]">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderResults()}
      </div>
    </div>
  );
}