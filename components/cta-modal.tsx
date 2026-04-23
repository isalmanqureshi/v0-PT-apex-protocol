'use client';

import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CTAModal({ isOpen, onClose }: CTAModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-lg p-8 max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-foreground mb-2">Ready to Transform?</h2>
        <p className="text-muted-foreground mb-6">
          Join elite performers mastering the Catalyst Method.
        </p>

        <div className="space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-between w-full bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-3 rounded-md font-semibold transition"
          >
            Contact Marcus <ArrowRight size={18} />
          </Link>
          <button
            onClick={onClose}
            className="w-full border border-border text-foreground hover:bg-card/50 px-4 py-3 rounded-md transition"
          >
            Explore Tiers
          </button>
        </div>
      </div>
    </div>
  );
}
