'use client';

import Link from 'next/link';



export default function TrustFooter() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-delayed">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Peak Systems. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Building operational excellence, one system at a time.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/systems-audit"
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                Free Audit
              </Link>
              <Link
                href="/calculator"
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                ROI Calculator
              </Link>
              <a
                href="#testimonials"
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#process"
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.02) 35px,
            rgba(255,255,255,0.02) 70px
          )`
        }}></div>
      </div>
    </footer>
  );
}