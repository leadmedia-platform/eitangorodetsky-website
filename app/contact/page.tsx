"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 max-w-[500px] text-lg text-white/75">
            Whether you&apos;re hiring for a leadership role, need operational consulting, or just want to have an interesting conversation — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-dark">
                Send a message
              </h2>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-brand-card p-8">
                  <p className="font-serif text-xl font-bold text-brand-dark">Got it.</p>
                  <p className="mt-2 text-brand-gray">I&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-dark">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
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
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
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
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
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
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none resize-none"
                      placeholder="Tell me what's on your mind…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-blue py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-dark">
                  Or reach me directly
                </h2>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">Email</p>
                    <a
                      href="mailto:eitangorodetsky@gmail.com"
                      className="mt-1 text-brand-blue hover:underline underline-offset-4"
                    >
                      eitangorodetsky@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/socialeitan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-brand-blue hover:underline underline-offset-4"
                    >
                      linkedin.com/in/socialeitan
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">Location</p>
                    <p className="mt-1 text-brand-dark">Central Coast, Australia</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-brand-card p-8">
                <h3 className="font-serif text-lg font-bold text-brand-dark">
                  Looking to hire?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  I&apos;m open to Director / VP / CMO / COO roles — remote, hybrid, or on-site in Australia. Valid Australian working visa. Download my CV or view my full career history.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/Eitan_Gorodetsky_CV.pdf"
                    className="inline-block rounded-full border border-brand-dark/20 px-6 py-2.5 text-center text-sm font-semibold text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
                  >
                    Download CV
                  </a>
                  <a
                    href="/career"
                    className="inline-block rounded-full bg-brand-blue px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
                  >
                    View Career
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
