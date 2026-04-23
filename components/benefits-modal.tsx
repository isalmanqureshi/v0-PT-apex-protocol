'use client';

import { X, TrendingUp, Zap, Brain, Users } from 'lucide-react';

interface BenefitsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoin: () => void;
}

const reasons = [
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Clients report 3x productivity increase and 10+ hours reclaimed weekly.',
  },
  {
    icon: Zap,
    title: 'Elite Community',
    description: 'Network with CEOs, founders, and high-performers globally.',
  },
  {
    icon: Brain,
    title: 'Science-Backed',
    description: 'Methods rooted in neuroscience, behavioral psychology, and performance optimization.',
  },
  {
    icon: Users,
    title: 'Personal Guidance',
    description: 'Direct access to Marcus Thorne and his certified coaches.',
  },
];

export function BenefitsModal({ isOpen, onClose, onJoin }: BenefitsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-foreground mb-2">Why Join Apex Protocol?</h2>
        <p className="text-muted-foreground mb-8">
          Discover why thousands of elite performers trust the Catalyst Method to transform their lives.
        </p>

        <div className="space-y-6 mb-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-3">
          <button
            onClick={onJoin}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-3 rounded-md font-semibold transition"
          >
            Ready to Join
          </button>
          <button
            onClick={onClose}
            className="w-full border border-border text-foreground hover:bg-card/50 px-4 py-3 rounded-md transition"
          >
            Ask Questions First
          </button>
        </div>
      </div>
    </div>
  );
}
