import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Peak Systems - Business Automation',
    default: 'Peak Systems - Get Your Life Back Through AI Systems'
  },
  description: "Stop working 70+ hour weeks. We build AI systems that automate your repetitive tasks and give business owners 5-15 hours back every week. Free systems audit available.",
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
    title: "You Built a Business to Be Free. Now It Owns You.",
    description: "Stop working 70+ hour weeks. We build AI systems that automate your repetitive tasks and give business owners 5-15 hours back every week.",
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
    title: 'Peak Systems - Get Your Life Back Through AI Systems',
    description: 'Stop working 70+ hour weeks. We build AI systems that give business owners 5-15 hours back every week. Free audit available.',
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
      </body>
    </html>
  );
}