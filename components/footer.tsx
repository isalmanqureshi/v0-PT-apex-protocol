'use client';

import Link from 'next/link';
import { Zap, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                <Zap size={20} className="text-accent" />
                Apex Protocol
              </Link>
              <p className="text-muted-foreground text-sm">
                Elite performance protocol by Marcus Thorne. Master time, metabolism, and results.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#catalyst" className="text-muted-foreground hover:text-accent transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-accent transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-accent transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-accent transition">
                    Contact Marcus
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 Apex Protocol. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-accent transition flex items-center gap-2"
              aria-label="Back to top"
            >
              Back to top <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
