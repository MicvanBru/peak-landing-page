import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MetaPixel from "@/components/tracking/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Peak Systems',
    default: 'AI Automation for Business Owners | Peak Systems'
  },
  description: "Stop working 70+ hour weeks. Peak Systems builds custom AI automation that gives business owners 5-15 hours back weekly. Free systems audit reveals your time-saving opportunities.",
  keywords: [
    "business automation",
    "AI systems", 
    "workflow automation",
    "business process automation",
    "time management",
    "productivity systems",
    "business owner",
    "work-life balance",
    "repetitive tasks",
    "automation consulting"
  ],
  authors: [{ name: "Peak Systems" }],
  creator: "Peak Systems",
  publisher: "Peak Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://peak-systems.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "You Don't Need More Hours, You Need Better Systems.",
    description: "Stop working 70+ hour weeks. Peak Systems builds custom AI automation that gives business owners 5-15 hours back weekly. Free systems audit reveals your time-saving opportunities.",
    url: 'https://peak-systems.com',
    siteName: 'Peak Systems',
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peak Systems - Business Automation That Gives You Your Life Back',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "You Don't Need More Hours, You Need Better Systems.",
    description: 'Stop working 70+ hour weeks. Peak Systems builds custom AI automation that gives business owners 5-15 hours back weekly. Free systems audit reveals your time-saving opportunities.',
    images: ['/images/og-image.jpg'],
    creator: '@peak-systems',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'business',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Peak Systems" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights debug />
        <MetaPixel />
      </body>
    </html>
  );
}