'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { JoinModal } from './join-modal';
import { BenefitsModal } from './benefits-modal';

export function Hero() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-card/30 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-accent/10 backdrop-blur-md border border-accent/30 px-4 py-2 rounded-full">
              <span className="text-accent text-sm font-semibold">The Catalyst Method</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Elite <span className="text-accent">Performance</span> Protocol
            </h1>

            <p className="text-xl text-muted-foreground text-balance max-w-lg">
              Master time efficiency, metabolic precision, and data-driven results. Join founders and CEOs transforming their potential into unstoppable momentum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsJoinOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-md font-semibold text-lg transition"
              >
                Start Now
              </button>
              <button
                onClick={() => setIsBenefitsOpen(true)}
                className="border border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-md font-semibold text-lg transition flex items-center justify-center gap-2"
              >
                Learn More <ArrowDown size={20} />
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 via-card/40 to-background/50 backdrop-blur-md border border-border/50 shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="relative z-10 text-center px-8">
              <div className="inline-block bg-accent/10 backdrop-blur-md border border-accent/30 rounded-full p-4 mb-4">
                <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-muted-foreground font-semibold">Elite Performance Protocol</p>
            </div>
          </div>
        </div>
      </section>
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
      <BenefitsModal 
        isOpen={isBenefitsOpen} 
        onClose={() => setIsBenefitsOpen(false)}
        onJoin={() => {
          setIsBenefitsOpen(false);
          setIsJoinOpen(true);
        }}
      />
    </>
  );
}

