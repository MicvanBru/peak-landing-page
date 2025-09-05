import { Button } from '@/components/buttons';

interface CalculationResults {
  annualOccurrences: number;
  hoursPerTask: number;
  annualHours: number;
  annualCost: number;
  totalSavings: number;
  investment: number;
  netROI: number;
  roiMultiple: number;
}

interface CalculatorResultsProps {
  results: CalculationResults;
  timeHorizon: number;
}

export function CalculatorResults({ results, timeHorizon }: CalculatorResultsProps) {
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

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Your ROI Calculation</h3>
        <p className="text-muted">Based on your inputs, here&apos;s what automation could save you:</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Current State */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground border-b border-secondary pb-2">
            Current State
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted">Task frequency:</span>
              <span className="text-foreground font-medium">{formatNumber(results.annualOccurrences)} times/year</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Time per task:</span>
              <span className="text-foreground font-medium">{results.hoursPerTask} hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Total time annually:</span>
              <span className="text-foreground font-medium">{formatNumber(results.annualHours)} hours</span>
            </div>
            <div className="flex justify-between border-t border-secondary pt-2">
              <span className="text-muted">Annual cost:</span>
              <span className="text-foreground font-bold">{formatCurrency(results.annualCost)}</span>
            </div>
          </div>
        </div>

        {/* Savings Potential */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground border-b border-secondary pb-2">
            {timeHorizon}-Year Savings
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted">Total time saved:</span>
              <span className="text-accent font-medium">{formatNumber(results.annualHours * timeHorizon)} hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Total savings:</span>
              <span className="text-accent font-bold">{formatCurrency(results.totalSavings)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Automation investment:</span>
              <span className="text-destructive">{formatCurrency(results.investment)}</span>
            </div>
            <div className="flex justify-between border-t border-accent pt-2">
              <span className="text-muted">Net ROI:</span>
              <span className="text-accent font-bold text-xl">{formatCurrency(results.netROI)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Summary */}
      <div className="bg-accent/10 rounded-xl p-6 border border-accent/30">
        <div className="text-center">
          <div className="text-4xl font-bold text-accent mb-2">
            {results.roiMultiple}x
          </div>
          <p className="text-foreground font-medium mb-1">Return on Investment</p>
          <p className="text-sm text-muted">
            Every $1 invested returns ${results.roiMultiple} over {timeHorizon} years
          </p>
        </div>

        {results.netROI > 10000 && (
          <div className="mt-6 p-4 bg-accent/20 rounded-lg">
            <p className="text-sm text-accent text-center font-medium">
              💡 With {formatCurrency(results.netROI)} in net savings, this automation project practically pays for itself!
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 space-y-4">
        <Button
          variant="primary"
          size="lg"
          href="/systems-audit"
          asLink
        >
          Get Your Custom Automation Plan
        </Button>
        <p className="text-sm text-muted">
          Start with a free 30-minute systems audit to see exactly how we&apos;ll build this automation for your business
        </p>
      </div>
    </div>
  );
}