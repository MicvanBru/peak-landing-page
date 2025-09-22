interface CalculationResults {
  annualHours: number;
  workDays: number;
  annualCost: number;
  recommendedBudget: number;
  monthlyBreakEven: number;
  monthlySavings: number;
}

export function calculateROI(
  annualOccurrences: number,
  hoursPerTask: number,
  hourlyRate: number
): CalculationResults {
  // Core calculations
  const annualHours = Math.round(annualOccurrences * hoursPerTask);
  const workDays = Math.round((annualHours / 8) * 10) / 10; // Round to 1 decimal
  const annualCost = Math.round(annualHours * hourlyRate);

  // Investment calculations (50% of annual cost)
  const recommendedBudget = Math.round(annualCost * 0.5);

  // Payback and savings
  const monthlyBreakEven = 6; // Fixed 6-month payback period
  const monthlySavings = Math.round(annualCost / 12);

  return {
    annualHours,
    workDays,
    annualCost,
    recommendedBudget,
    monthlyBreakEven,
    monthlySavings
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(num);
}