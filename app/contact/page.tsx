'use client';

import Link from 'next/link';
import { ArrowLeft, Zap, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    submitted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission
    setFormState((prev) => ({ ...prev, submitted: true }));
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        submitted: false,
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen w-full bg-background">
      <header className="w-full border-b border-border/30 bg-background/95 backdrop-blur-md">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Marcus</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about the Catalyst Method? Reach out directly to Marcus Thorne and his team.
            </p>
          </div>

          <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-lg p-8 md:p-12">
            {formState.submitted ? (
              <div className="text-center py-8">
                <div className="inline-block bg-accent/10 border border-accent/50 rounded-full p-3 mb-4">
                  <svg
                    className="text-accent"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-muted-foreground">
                  Marcus will review your inquiry and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
                    placeholder="Tell Marcus about your goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-md font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:bg-card/60 transition">
              <h3 className="font-bold mb-2">Direct Email</h3>
              <p className="text-muted-foreground">marcus@apexprotocol.com</p>
            </div>
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:bg-card/60 transition">
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-muted-foreground">Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-border/30 bg-card/40 backdrop-blur-md mt-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                  <Zap size={20} className="text-accent" />
                  Apex Protocol
                </Link>
                <p className="text-muted-foreground text-sm">
                  Elite performance protocol by Marcus Thorne. Master time, metabolism, and results.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#catalyst" className="text-muted-foreground hover:text-accent transition">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/#pricing" className="text-muted-foreground hover:text-accent transition">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="text-muted-foreground hover:text-accent transition">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-accent transition">
                      Contact Marcus
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-accent transition">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-accent transition">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-accent transition">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-accent transition">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm">
                © 2026 Apex Protocol. All rights reserved.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition flex items-center gap-2"
                aria-label="Back to top"
              >
                Back to top <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
