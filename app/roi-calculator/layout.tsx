import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick ROI Calculator - Peak Systems',
  description: 'Calculate exactly how much time and money you\'re losing to repetitive tasks. See your automation ROI in seconds with our simple calculator.',
  keywords: 'ROI calculator, automation calculator, time savings calculator, business efficiency calculator, automation ROI, task automation savings',
  openGraph: {
    title: 'Quick ROI Calculator - Peak Systems',
    description: 'Calculate exactly how much time and money you\'re losing to repetitive tasks. See your automation ROI in seconds.',
    url: 'https://peak-systems.io/simple-calculator',
    siteName: 'Peak Systems',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Peak Systems ROI Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick ROI Calculator - Peak Systems',
    description: 'Calculate exactly how much time and money you\'re losing to repetitive tasks.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/simple-calculator',
  },
};

export default function SimpleCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}