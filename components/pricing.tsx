'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { CTAModal } from './cta-modal';

const pricingTiers = [
  {
    name: 'Foundation',
    price: '$297',
    period: '/month',
    description: 'Essential tools for performance optimization',
    features: [
      'Time efficiency system',
      'Basic tracking dashboard',
      'Weekly email insights',
      'Community access',
    ],
    highlighted: false,
  },
  {
    name: 'Catalyst',
    price: '$897',
    period: '/month',
    description: 'Complete Catalyst Method implementation',
    features: [
      'All Foundation features',
      'Advanced metabolic tracking',
      'Bi-weekly coaching sessions',
      'Custom optimization plan',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$2,497',
    period: '/month',
    description: 'White-glove transformation program',
    features: [
      'All Catalyst features',
      'Weekly 1:1 strategy sessions',
      'Executive roadmap design',
      'Dedicated success coach',
      'VIP network access',
      '24/7 concierge support',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <>
      <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Choose the tier that matches your ambition.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                className="relative"
              >
                {tier.highlighted && (
                  <div className="absolute inset-0 -z-10 rounded-lg blur-2xl opacity-30 bg-gradient-radial from-accent via-accent/50 to-transparent pointer-events-none" />
                )}
                <div
                  className={`rounded-lg backdrop-blur-md border p-8 transition ${
                    tier.highlighted
                      ? 'bg-accent/10 border-accent/50 ring-2 ring-accent/30 hover:bg-accent/15'
                      : 'bg-card/40 border-border/50 hover:border-accent/50 hover:bg-card/60'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>

                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full mb-8 py-3 rounded-md font-semibold transition ${
                      tier.highlighted
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                        : 'border border-border text-foreground hover:bg-card/50'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={18} className="text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
