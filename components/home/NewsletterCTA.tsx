"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, #1B5E8C 0%, #2D8B6F 100%)",
      }}
    >
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
          The stories nobody tells in meetings — delivered to your inbox
        </h2>
        {submitted ? (
          <p className="mt-6 text-lg text-white/90">
            Thank you. The stories are on their way.
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
                className="flex-1 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-gold px-8 py-3 font-semibold text-brand-dark transition-colors hover:bg-white"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Once a week. Real insights. No spam.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
