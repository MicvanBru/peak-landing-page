'use client';

import { useState, useMemo } from 'react';

export default function CalculatorPage() {
  const [taskFrequency, setTaskFrequency] = useState('10');
  const [frequencyUnit, setFrequencyUnit] = useState('day');
  const [taskDuration, setTaskDuration] = useState('2');
  const [durationUnit, setDurationUnit] = useState('minutes');
  const [hourlyRate, setHourlyRate] = useState('100');
  const [timeHorizon, setTimeHorizon] = useState(5);
  const [investmentPercentage, setInvestmentPercentage] = useState(20);

  const calculations = useMemo(() => {
    const getAnnualOccurrences = (frequency: number, unit: string) => {
      switch(unit) {
        case 'hour': return frequency * 8 * 250;
        case 'day': return frequency * 250;
        case 'week': return frequency * 52;
        case 'month': return frequency * 12;
        case 'year': return frequency;
        default: return frequency * 250;
      }
    };

    const getHours = (duration: number, unit: string) => {
      switch(unit) {
        case 'seconds': return duration / 3600;
        case 'minutes': return duration / 60;
        case 'hours': return duration;
        default: return duration / 60;
      }
    };

    // Handle empty or invalid values with defaults
    const freq = parseFloat(taskFrequency) || 10;
    const duration = parseFloat(taskDuration) || 2;
    const rate = parseFloat(hourlyRate) || 100;

    const annualOccurrences = getAnnualOccurrences(freq, frequencyUnit);
    const hoursPerInstance = getHours(duration, durationUnit);
    const hoursPerYear = annualOccurrences * hoursPerInstance;
    const totalHours = hoursPerYear * timeHorizon;
    const annualCost = hoursPerYear * rate;
    const totalCost = totalHours * rate;
    const investmentHours = totalHours * (investmentPercentage / 100);
    const investmentCost = investmentHours * rate;
    const netSavings = totalCost - investmentCost;
    const roiPercentage = investmentCost > 0 ? (netSavings / investmentCost) * 100 : 0;

    return {
      hoursPerYear: Math.round(hoursPerYear * 10) / 10,
      annualCost: Math.round(annualCost),
      totalCost: Math.round(totalCost),
      investmentCost: Math.round(investmentCost),
      netSavings: Math.round(netSavings),
      roiPercentage: Math.round(roiPercentage),
    };
  }, [taskFrequency, frequencyUnit, taskDuration, durationUnit, hourlyRate, timeHorizon, investmentPercentage]);

  return (
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
            <p className="text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto">
              Discover the true cost of repetitive tasks and potential savings from automation
            </p>
          </div>

          <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-start">
            {/* Input Section */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/20">
              <h2 className="text-xl font-semibold text-foreground mb-6">Task Details</h2>
              
              <div className="space-y-6">
                {/* Task Frequency */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    How Often Do You Do This?
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={taskFrequency}
                      onChange={(e) => setTaskFrequency(e.target.value)}
                      onBlur={(e) => {
                        if (!e.target.value || parseFloat(e.target.value) <= 0) {
                          setTaskFrequency('10');
                        }
                      }}
                      min="0.1"
                      step="0.1"
                      className="flex-1 px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                    <select
                      value={frequencyUnit}
                      onChange={(e) => setFrequencyUnit(e.target.value)}
                      className="px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    >
                      <option value="hour">times per hour</option>
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
                    How Long Does It Take?
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={taskDuration}
                      onChange={(e) => setTaskDuration(e.target.value)}
                      onBlur={(e) => {
                        if (!e.target.value || parseInt(e.target.value) <= 0) {
                          setTaskDuration('2');
                        }
                      }}
                      min="1"
                      className="flex-1 px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
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

                {/* Hourly Rate */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    What's Your Time Worth?
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/70">$</span>
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      onBlur={(e) => {
                        if (!e.target.value || parseInt(e.target.value) <= 0) {
                          setHourlyRate('100');
                        }
                      }}
                      min="1"
                      className="w-full pl-8 pr-16 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/70">per hour</span>
                  </div>
                </div>

                {/* Time Horizon */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Calculate Savings Over: <span className="text-accent font-semibold">{timeHorizon} year{timeHorizon !== 1 ? 's' : ''}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
                    className="w-full h-2 bg-secondary/50 rounded-lg appearance-none slider"
                  />
                  <div className="flex justify-between text-sm text-foreground/60 mt-1">
                    <span>1 year</span>
                    <span>10 years</span>
                  </div>
                </div>

                {/* Investment Percentage */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    How much would automation cost? <span className="text-accent font-semibold">{investmentPercentage}%</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={investmentPercentage}
                    onChange={(e) => setInvestmentPercentage(parseInt(e.target.value))}
                    className="w-full h-2 bg-secondary/50 rounded-lg appearance-none slider"
                  />
                  <div className="flex justify-between text-sm text-foreground/60 mt-1">
                    <span>5%</span>
                    <span>100%</span>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">
                    Typical automations cost 10-25% of what you'd lose without them
                  </p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 lg:sticky lg:top-4">
              <h2 className="text-xl font-semibold text-foreground mb-6">Your ROI Analysis</h2>
              
              <div className="space-y-4">
                {/* Hero Results - Most Important First */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Net Savings - Primary */}
                  <div className="col-span-2 p-6 bg-gradient-to-r from-accent/30 to-accent/20 rounded-lg border border-accent/40 glow-cyan-sm">
                    <div className="text-center">
                      <div className="text-sm text-foreground/80 mb-1">You Could Save</div>
                      <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                        ${calculations.netSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-foreground/70">
                        Over {timeHorizon} year{timeHorizon !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                  
                  {/* ROI Percentage */}
                  <div className="p-4 bg-accent/15 rounded-lg border border-accent/25">
                    <div className="text-center">
                      <div className="text-xs text-foreground/70 mb-1">Return on Investment</div>
                      <div className="text-2xl font-bold text-accent">
                        {calculations.roiPercentage.toLocaleString()}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Hours Per Year */}
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-xs text-foreground/70 mb-1">Time Lost Annually</div>
                      <div className="text-2xl font-bold text-foreground">
                        {calculations.hoursPerYear}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Metrics */}
                <div className="space-y-3">
                  {/* Current Annual Cost */}
                  <div className="p-4 bg-destructive/15 rounded-lg border border-destructive/25">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-foreground/70">You're Losing Per Year</div>
                        <div className="text-xl font-bold text-foreground">
                          ${calculations.annualCost.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-xs text-foreground/60 text-right">
                        Current state
                      </div>
                    </div>
                  </div>

                  {/* Investment Required */}
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-foreground/70">Spend Up To</div>
                        <div className="text-xl font-bold text-foreground">
                          ${calculations.investmentCost.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-xs text-foreground/60 text-right">
                        & still save ${calculations.netSavings.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section - More Prominent */}
              <div className="mt-6 p-6 bg-gradient-to-r from-accent/25 to-accent/15 rounded-xl border-2 border-accent/40 glow-cyan-sm">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Ready to Save ${calculations.annualCost.toLocaleString()}/Year?
                  </h3>
                  <p className="text-foreground/85 text-sm">
                    Get a free systems audit and discover exactly how to automate your biggest time drains.
                  </p>
                </div>
                <button className="w-full bg-accent hover:bg-accent/90 text-background font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg">
                  Schedule Your Free Audit
                </button>
                <p className="text-xs text-foreground/60 text-center mt-2">
                  ⚡ Limited spots available this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: hsl(190 85% 55%);
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid hsl(220 20% 12%);
          box-shadow: 0 0 10px hsl(190 85% 55% / 0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: hsl(190 85% 55%);
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid hsl(220 20% 12%);
          box-shadow: 0 0 10px hsl(190 85% 55% / 0.3);
        }
      `}</style>
    </div>
  );
}