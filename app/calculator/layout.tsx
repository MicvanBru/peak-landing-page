import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation ROI Calculator - Calculate Your Time Savings",
  description: "Calculate the true cost of repetitive tasks and potential savings from business automation. See your ROI in minutes and plan your automation investment.",
  keywords: [
    "automation ROI calculator",
    "business automation cost calculator",
    "time savings calculator", 
    "productivity calculator",
    "automation investment calculator",
    "repetitive task cost"
  ],
  alternates: {
    canonical: '/calculator',
  },
  openGraph: {
    title: "Automation ROI Calculator - See Your Potential Savings",
    description: "Calculate exactly how much time and money you're losing to repetitive tasks. Get your personalized automation ROI in seconds.",
    url: 'https://peak-systems.com/calculator',
    images: [
      {
        url: '/images/calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Automation ROI Calculator - Peak Systems',
      }
    ],
  },
  twitter: {
    title: 'Automation ROI Calculator - Calculate Your Time Savings',
    description: 'See exactly how much time and money automation could save you. Free calculator with instant results.',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}