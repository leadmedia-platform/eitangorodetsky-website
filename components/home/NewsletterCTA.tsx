"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Placeholder — wire up ConvertKit/Substack in Phase 7
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="bg-brand-amber px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[600px] text-center">
        <h2 className="font-serif text-3xl font-bold text-brand-cream md:text-4xl">
          The stories nobody tells in meetings — delivered to your inbox
        </h2>
        {submitted ? (
          <p className="mt-6 text-lg text-brand-cream">
            Thank you for subscribing. The stories are on their way.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border-2 border-brand-cream/30 bg-brand-cream/10 px-6 py-3 text-brand-cream placeholder:text-brand-cream/60 focus:border-brand-cream focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-charcoal px-8 py-3 font-medium text-brand-cream transition-colors hover:bg-brand-navy"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-brand-cream/80">
              Once a week. Real insights. No spam.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
