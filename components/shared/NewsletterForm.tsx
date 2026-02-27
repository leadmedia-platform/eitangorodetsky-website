"use client";

import { useState } from "react";

interface NewsletterFormProps {
  variant?: "light" | "dark";
  source?: string;
  onSuccess?: () => void;
}

export default function NewsletterForm({
  variant = "light",
  source = "unknown",
  onSuccess,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Placeholder — wire up ConvertKit/Substack in Phase 7
    console.log(`Newsletter signup: ${email} (source: ${source})`);
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <p
        className={`text-center text-lg ${
          variant === "dark" ? "text-brand-cream" : "text-brand-charcoal"
        }`}
      >
        Thank you for subscribing. The stories are on their way.
      </p>
    );
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`newsletter-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`newsletter-${source}`}
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 rounded-full border-2 px-6 py-3 text-base focus:outline-none ${
            isDark
              ? "border-brand-cream/30 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/60 focus:border-brand-cream"
              : "border-brand-charcoal/10 bg-white text-brand-charcoal placeholder:text-text-secondary focus:border-brand-amber"
          }`}
        />
        <button
          type="submit"
          className={`rounded-full px-8 py-3 font-medium transition-colors ${
            isDark
              ? "bg-brand-charcoal text-brand-cream hover:bg-brand-navy"
              : "bg-brand-amber text-brand-cream hover:bg-brand-terracotta"
          }`}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
