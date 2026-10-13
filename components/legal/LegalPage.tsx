import Link from 'next/link';
import type { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}

export default function LegalPage({ title, effectiveDate, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-sm text-foreground/60 mb-10">Effective {effectiveDate}</p>
        <div className="space-y-6 text-foreground/85 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-accent [&_a]:underline">
          {children}
        </div>
        <div className="mt-12">
          <Link href="/" className="text-accent hover:text-accent/80 transition-colors duration-300">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
