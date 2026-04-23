'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CTAModal } from './cta-modal';

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to <span className="text-accent">Transform</span> Your Performance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of elite performers who have unlocked their potential with the Catalyst Method. Your transformation starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-md font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              Claim Your Protocol <ArrowRight size={20} />
            </button>
            <a
              href="#pricing"
              className="border border-border text-foreground hover:bg-card/50 px-8 py-4 rounded-md font-semibold text-lg transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
