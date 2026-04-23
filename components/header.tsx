'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { CTAModal } from './cta-modal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Zap size={24} className="text-accent" />
            <span>Apex</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalyst" className="text-muted-foreground hover:text-foreground transition">
              Method
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition">
              Testimonials
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition">
              FAQ
            </a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2 rounded-md font-semibold transition"
          >
            Claim Protocol
          </button>
        </div>
      </header>
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
