"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
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
      <div className="mt-8 rounded-xl bg-brand-card p-8">
        <p className="font-serif text-xl font-bold text-brand-dark">Got it. ✓</p>
        <p className="mt-2 text-brand-gray">
          Your message is on its way to Eitan. He&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-dark">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          disabled={status === "loading"}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none disabled:opacity-60"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          disabled={status === "loading"}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none disabled:opacity-60"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-brand-dark">
          What brings you here?
        </label>
        <select
          id="reason"
          required
          disabled={status === "loading"}
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none disabled:opacity-60"
        >
          <option value="">Select one…</option>
          <option value="hiring">I&apos;m hiring / recruiting</option>
          <option value="consulting">I need consulting help</option>
          <option value="collaborate">I want to collaborate</option>
          <option value="hello">Just saying hello</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          disabled={status === "loading"}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1.5 w-full resize-none rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none disabled:opacity-60"
          placeholder="Tell me what's on your mind…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-blue py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
