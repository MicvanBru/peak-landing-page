'use client';

import { Check } from 'lucide-react';

const trustPoints = [
  "Everything's custom-built for YOUR business",
  "You own all of it",
  "I fix what breaks in the first month",
  "100+ systems built for people just like you"
];

export default function TrustFooter() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="mb-12 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group animate-fade-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8"></div>

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
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
              <a
                href="#process"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Success Stories
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