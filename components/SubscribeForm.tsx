"use client";

import { useState } from "react";
import { trackNewsletterSignup } from "@/lib/analytics";

interface SubscribeFormProps {
  /** Where the signup happened — 'home' | 'essay:<slug>' | … (stored on the row). */
  source?: string;
}

export default function SubscribeForm({ source = "site" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        setPending(Boolean(data.pending));
        setStatus("success");
        trackNewsletterSignup(source);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-sm font-medium text-brand-dark">
        {pending
          ? "You're on the early list — I'll send a confirmation the moment the newsletter opens. ✓"
          : "Almost there — check your inbox and click the link to confirm. ✓"}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`subscribe-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`subscribe-email-${source}`}
          type="email"
          required
          disabled={status === "loading"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-brand-dark/15 bg-white px-5 py-3 text-sm focus:border-brand-blue focus:outline-none disabled:opacity-60"
          placeholder="you@company.com"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "…" : "Subscribe"}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-700">{errorMsg}</p>
      )}

      <p className="mt-3 text-xs text-brand-gray">
        Double opt-in — you&apos;ll confirm by email. No spam, unsubscribe any
        time. See the{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-brand-blue">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
