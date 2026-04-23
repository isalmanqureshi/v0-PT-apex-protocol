'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What makes the Catalyst Method different?',
    answer:
      'The Catalyst Method combines time efficiency, metabolic optimization, and data-driven tracking into one integrated system. Unlike generic productivity apps, it\'s based on performance science and real-world testing with elite performers.',
  },
  {
    id: 2,
    question: 'Is this right for me?',
    answer:
      'Perfect for ambitious founders, executives, athletes, and anyone serious about maximizing their potential. If you\'re ready to invest in yourself and take your performance to the next level, this is for you.',
  },
  {
    id: 3,
    question: 'What\'s included in each tier?',
    answer:
      'Foundation includes core tracking and system access. Catalyst adds personalized coaching and optimization. Elite provides white-glove implementation and ongoing strategy sessions.',
  },
  {
    id: 4,
    question: 'How long does implementation take?',
    answer:
      'Most participants see results in 2-3 weeks. Full system optimization typically takes 8-12 weeks, with measurable gains throughout the process.',
  },
];

interface FAQItemProps {
  item: (typeof faqs)[0];
}

function FAQItem({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-lg font-semibold text-foreground hover:text-accent transition"
      >
        {item.question}
        <ChevronDown
          size={20}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <p className="mt-4 text-muted-foreground text-balance">{item.answer}</p>}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about the Catalyst Method.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
