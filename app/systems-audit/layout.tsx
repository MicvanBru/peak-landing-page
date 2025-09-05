import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Systems Audit - Stop Working 70+ Hours",
  description: "Book a free 30-minute systems audit to discover exactly which tasks are stealing your time and how to automate them. Get your action plan today.",
  keywords: [
    "free systems audit",
    "business automation consultation", 
    "time management audit",
    "productivity assessment",
    "workflow analysis",
    "automation opportunities"
  ],
  alternates: {
    canonical: '/systems-audit',
  },
  openGraph: {
    title: "Free Systems Audit - Discover What's Stealing Your Time",
    description: "30-minute consultation to identify your biggest time drains and show you exactly what can be automated. Completely free, no catch.",
    url: 'https://peak-systems.com/systems-audit',
    images: [
      {
        url: '/images/systems-audit-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Systems Audit - Peak Systems',
      }
    ],
  },
  twitter: {
    title: 'Free Systems Audit - Stop Working 70+ Hours',
    description: '30-minute consultation to identify your time drains and automation opportunities. Completely free.',
  },
};

export default function SystemsAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}