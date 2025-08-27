import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Peak Systems - Get Your Life Back",
  description: "I help business owners stop working 70-hour weeks by building the systems that do the work for them.",
  keywords: "business automation, systems, productivity, business owner, work-life balance",
  authors: [{ name: "Peak Systems" }],
  openGraph: {
    title: "You Built a Business to Be Free. Now It Owns You.",
    description: "I help business owners stop working 70-hour weeks by building the systems that do the work for them.",
    type: "website",
  },
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}