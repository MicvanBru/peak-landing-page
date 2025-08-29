interface CalculatorFormProps {
  taskFrequency: string;
  setTaskFrequency: (value: string) => void;
  frequencyUnit: string;
  setFrequencyUnit: (value: string) => void;
  taskDuration: string;
  setTaskDuration: (value: string) => void;
  durationUnit: string;
  setDurationUnit: (value: string) => void;
  hourlyRate: string;
  setHourlyRate: (value: string) => void;
  timeHorizon: number;
  setTimeHorizon: (value: number) => void;
  investmentPercentage: number;
  setInvestmentPercentage: (value: number) => void;
}

export function CalculatorForm({
  taskFrequency,
  setTaskFrequency,
  frequencyUnit,
  setFrequencyUnit,
  taskDuration,
  setTaskDuration,
  durationUnit,
  setDurationUnit,
  hourlyRate,
  setHourlyRate,
  timeHorizon,
  setTimeHorizon,
  investmentPercentage,
  setInvestmentPercentage,
}: CalculatorFormProps) {
  return (
    <div className="space-y-8">
      {/* Task Frequency */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          How Often Do You Do This Task?
        </label>
        <div className="flex gap-3">
          <input
            type="number"
            value={taskFrequency}
            onChange={(e) => setTaskFrequency(e.target.value)}
            onBlur={(e) => {
              if (!e.target.value || parseInt(e.target.value) <= 0) {
                setTaskFrequency('10');
              }
            }}
            min="1"
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
          What&apos;s Your Time Worth? <span className="text-sm text-muted">(hourly rate)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="text-muted">$</span>
          </div>
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
            className="w-full pl-8 pr-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
          />
        </div>
      </div>

      {/* Time Horizon */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Time Horizon: {timeHorizon} years
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={timeHorizon}
          onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-muted mt-1">
          <span>1 year</span>
          <span>10 years</span>
        </div>
      </div>

      {/* Investment Percentage */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Investment in Automation: {investmentPercentage}%
        </label>
        <input
          type="range"
          min="5"
          max="50"
          value={investmentPercentage}
          onChange={(e) => setInvestmentPercentage(parseInt(e.target.value))}
          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-muted mt-1">
          <span>5%</span>
          <span>50%</span>
        </div>
      </div>
    </div>
  );
}