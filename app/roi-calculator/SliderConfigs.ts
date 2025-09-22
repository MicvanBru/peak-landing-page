export interface FrequencyStep {
  label: string;
  value: number;
  annualOccurrences: number;
}

export interface DurationStep {
  label: string;
  value: number;
  hours: number;
}

export const frequencySteps: FrequencyStep[] = [
  { label: "Yearly", value: 0, annualOccurrences: 1 },
  { label: "Every 6 months", value: 1, annualOccurrences: 2 },
  { label: "Quarterly", value: 2, annualOccurrences: 4 },
  { label: "Monthly", value: 3, annualOccurrences: 12 },
  { label: "Twice monthly", value: 4, annualOccurrences: 24 },
  { label: "Weekly", value: 5, annualOccurrences: 52 },
  { label: "Twice weekly", value: 6, annualOccurrences: 104 },
  { label: "Every other day", value: 7, annualOccurrences: 182 },
  { label: "Daily", value: 8, annualOccurrences: 250 }, // Business days
  { label: "Twice daily", value: 9, annualOccurrences: 500 },
  { label: "5x per day", value: 10, annualOccurrences: 1250 }
];

export const durationSteps: DurationStep[] = [
  { label: "5 minutes", value: 0, hours: 0.083 },
  { label: "15 minutes", value: 1, hours: 0.25 },
  { label: "30 minutes", value: 2, hours: 0.5 },
  { label: "1 hour", value: 3, hours: 1 },
  { label: "2 hours", value: 4, hours: 2 },
  { label: "4 hours", value: 5, hours: 4 },
  { label: "1 day", value: 6, hours: 8 },
  { label: "2 days", value: 7, hours: 16 },
  { label: "5 days", value: 8, hours: 40 }
];

// Generate hourly rate values from $100 to $1000 in $50 increments
export const hourlyRateValues: number[] = [];
for (let rate = 100; rate <= 1000; rate += 50) {
  hourlyRateValues.push(rate);
}

// Default slider positions (indices)
export const defaultFrequency = 5; // Weekly
export const defaultDuration = 4;   // 2 hours
export const defaultHourlyRate = 4; // $300 (index 4 = $300)