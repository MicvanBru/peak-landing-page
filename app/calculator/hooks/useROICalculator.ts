import { useMemo } from 'react';

interface CalculationInputs {
  taskFrequency: string;
  frequencyUnit: string;
  taskDuration: string;
  durationUnit: string;
  hourlyRate: string;
  timeHorizon: number;
  investmentPercentage: number;
}

export function useROICalculator(inputs: CalculationInputs) {
  return useMemo(() => {
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
        case 'days': return duration * 8;
        default: return duration / 60;
      }
    };

    const frequency = parseFloat(inputs.taskFrequency) || 0;
    const duration = parseFloat(inputs.taskDuration) || 0;
    const rate = parseFloat(inputs.hourlyRate) || 0;

    const annualOccurrences = getAnnualOccurrences(frequency, inputs.frequencyUnit);
    const hoursPerTask = getHours(duration, inputs.durationUnit);
    const annualHours = annualOccurrences * hoursPerTask;
    const annualCost = annualHours * rate;
    const totalSavings = annualCost * inputs.timeHorizon;
    const investment = totalSavings * (inputs.investmentPercentage / 100);
    const netROI = totalSavings - investment;
    const roiMultiple = investment > 0 ? totalSavings / investment : 0;

    return {
      annualOccurrences: Math.round(annualOccurrences),
      hoursPerTask: Math.round(hoursPerTask * 100) / 100,
      annualHours: Math.round(annualHours),
      annualCost: Math.round(annualCost),
      totalSavings: Math.round(totalSavings),
      investment: Math.round(investment),
      netROI: Math.round(netROI),
      roiMultiple: Math.round(roiMultiple * 10) / 10
    };
  }, [
    inputs.taskFrequency,
    inputs.frequencyUnit, 
    inputs.taskDuration,
    inputs.durationUnit,
    inputs.hourlyRate,
    inputs.timeHorizon,
    inputs.investmentPercentage
  ]);
}