'use client';

import { useState } from 'react';
import { Clock, Zap, BarChart3 } from 'lucide-react';
import { CTAModal } from './cta-modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                  className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition"
                >
                  <Icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-md font-semibold text-lg transition"
            >
              Unlock Your Potential
            </button>
          </div>
        </div>
      </section>
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
