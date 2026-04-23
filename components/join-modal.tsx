'use client';

import { X, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  if (!isOpen) return null;

  const benefits = [
    'Access to complete Catalyst Method system',
    'Real-time progress tracking dashboard',
    'Weekly strategy sessions',
    'Private community of elite performers',
    '24/7 support from Marcus&apos; team',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-8 max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-foreground mb-2">Join the Program</h2>
        <p className="text-muted-foreground mb-6">
          Unlock your elite performance potential with personalized guidance from Marcus Thorne.
        </p>

        <div className="space-y-3 mb-8">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3">
              <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-between w-full bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-3 rounded-md font-semibold transition"
          >
            Start Your Journey <ArrowRight size={18} />
          </Link>
          <button
            onClick={onClose}
            className="w-full border border-border text-foreground hover:bg-card/50 px-4 py-3 rounded-md transition"
          >
            Learn More First
          </button>
        </div>
      </div>
    </div>
  );
}
