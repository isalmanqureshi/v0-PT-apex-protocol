'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { JoinModal } from './join-modal';
import { BenefitsModal } from './benefits-modal';

export function Hero() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-card/30 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="inline-block bg-accent/10 backdrop-blur-md border border-accent/30 px-4 py-2 rounded-full">
              <span className="text-accent text-sm font-semibold">The Catalyst Method</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Elite <span className="text-accent">Performance</span> Protocol
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-muted-foreground text-balance max-w-lg">
              Master time efficiency, metabolic precision, and data-driven results. Join founders and CEOs transforming their potential into unstoppable momentum.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                onClick={() => setIsJoinOpen(true)}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Now
              </motion.button>
              <motion.button
                onClick={() => setIsBenefitsOpen(true)}
                className="border border-accent text-accent px-8 py-4 rounded-md font-semibold text-lg transition flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More <ArrowDown size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 via-card/40 to-background/50 backdrop-blur-md border border-border/50 shadow-2xl flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="relative z-10 text-center px-8">
              <div className="inline-block bg-accent/10 backdrop-blur-md border border-accent/30 rounded-full p-4 mb-4">
                <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-muted-foreground font-semibold">Elite Performance Protocol</p>
            </div>
          </motion.div>
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

