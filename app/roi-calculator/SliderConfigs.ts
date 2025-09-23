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
  { label: "5x per day", value: 10, annualOccurrences: 1250 },
  { label: "10x per day", value: 11, annualOccurrences: 2500 }
];

export const durationSteps: DurationStep[] = [
  { label: "1 minute", value: 0, hours: 0.017 },
  { label: "2 minutes", value: 1, hours: 0.033 },
  { label: "5 minutes", value: 2, hours: 0.083 },
  { label: "15 minutes", value: 3, hours: 0.25 },
  { label: "30 minutes", value: 4, hours: 0.5 },
  { label: "1 hour", value: 5, hours: 1 },
  { label: "2 hours", value: 6, hours: 2 },
  { label: "4 hours", value: 7, hours: 4 },
  { label: "1 day", value: 8, hours: 8 },
  { label: "2 days", value: 9, hours: 16 },
  { label: "5 days", value: 10, hours: 40 }
];

// Hourly rate slider configuration (continuous)
export const hourlyRateConfig = {
  min: 10,
  max: 1000,
  step: 5,
  default: 300
};

// Default slider positions (indices for array-based sliders)
export const defaultFrequency = 5; // Weekly
export const defaultDuration = 6;   // 2 hours (updated index due to new options)
export const defaultHourlyRate = 300; // Direct value for continuous slider