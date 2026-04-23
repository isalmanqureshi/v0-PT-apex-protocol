'use client';

import { useState } from 'react';
import { Clock, Zap, BarChart3 } from 'lucide-react';
import { JoinModal } from './join-modal';
import { BenefitsModal } from './benefits-modal';

const catalystPillars = [
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'Eliminate distractions, systemize your days, and reclaim 10+ hours weekly.',
  },
  {
    icon: Zap,
    title: 'Metabolic Precision',
    description: 'Optimize energy levels, recovery, and peak performance windows.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Results',
    description: 'Measure, track, and compound your progress with real-time insights.',
  },
];

export function CatalystMethod() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  return (
    <>
      <section id="catalyst" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Catalyst Method</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three pillars of unstoppable performance designed by Marcus Thorne.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {catalystPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-card/40 backdrop-blur-md border border-border/50 rounded-lg p-8 hover:border-accent/50 hover:bg-card/60 transition"
                >
                  <Icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsJoinOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-md font-semibold text-lg transition"
            >
              Unlock Your Potential
            </button>
            <button
              onClick={() => setIsBenefitsOpen(true)}
              className="border border-border text-foreground hover:bg-card/30 px-8 py-4 rounded-md font-semibold text-lg transition"
            >
              Learn More
            </button>
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

