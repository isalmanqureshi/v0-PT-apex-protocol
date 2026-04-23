'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { CTAModal } from './cta-modal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-card/30 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-accent/10 border border-accent px-4 py-2 rounded-full">
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
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-md font-semibold text-lg transition"
              >
                Start Now
              </button>
              <a
                href="#catalyst"
                className="border border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-md font-semibold text-lg transition flex items-center justify-center gap-2"
              >
                Learn More <ArrowDown size={20} />
              </a>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden bg-card border border-border">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Apex Protocol showcase"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
