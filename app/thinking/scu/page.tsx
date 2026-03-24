import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The SCU Framework — Eitan Gorodetsky",
  description:
    "See. Clarify. Use. A three-step methodology for turning operational complexity into measurable improvement.",
};

const steps = [
  {
    step: "Step 1",
    title: "See",
    subtitle: "What's hidden in the data",
    body: [
      "Most operational problems aren't hard to fix. They're hard to SEE. The data exists — it's scattered across systems, buried in spreadsheets nobody opens, hiding in the gap between what the dashboard shows and what actually happens.",
      "This is the part of the work that takes the most patience. You can't see what's hidden if you're only looking at what's visible. You have to know where to look — which means knowing what questions to ask, and having the kind of relationships with the people inside the organisation that make them willing to answer honestly.",
    ],
  },
  {
    step: "Step 2",
    title: "Clarify",
    subtitle: "What it means for the business",
    body: [
      "Seeing isn't enough. You need to translate what you see into language the business understands: dollars, days, risk. A hidden cost is just a curiosity until you put a number on it.",
      "Clarifying means taking the operational complexity — the spreadsheet nobody looks at, the process that costs more to manage than the problem it solves — and quantifying its impact. This is where insight becomes actionable intelligence.",
    ],
  },
  {
    step: "Step 3",
    title: "Use",
    subtitle: "How to act on it",
    body: [
      "Insight without action is just expensive awareness. Every finding gets mapped to a specific fix with a specific owner and a specific timeline.",
      "The Use phase is a prioritised roadmap ranked by impact, effort, and speed of return. Not everything is equally important. Not everything needs to happen at once. The art is knowing what to do first — and why.",
    ],
  },
];

export default function SCUPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Methodology
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            The SCU Framework
          </h1>
          <p className="mt-4 text-xl text-white/75 font-light">
            See. Clarify. Use.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="space-y-20 md:space-y-32">
            {steps.map((s, i) => (
              <div key={s.step} className={`grid gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <span className="font-mono text-sm font-bold text-brand-gold">{s.step}</span>
                  <h2 className="mt-2 font-serif text-5xl font-bold text-brand-blue/15 leading-none">
                    {s.title}
                  </h2>
                  <h3 className="mt-1 font-serif text-3xl font-bold text-brand-dark">
                    {s.title} — {s.subtitle}
                  </h3>
                </div>
                <div className={`space-y-4 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                  {s.body.map((para, j) => (
                    <p key={j} className="text-lg leading-relaxed text-brand-gray">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-card py-16">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <p className="text-brand-gray">
            Want to see how SCU applies to your operation?{" "}
            <Link href="/contact" className="font-medium text-brand-blue hover:underline underline-offset-4">
              Let&apos;s talk
            </Link>
            .
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="/thinking/oia" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">
              ← OIA Framework
            </Link>
            <Link href="/thinking/ai" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">
              AI in Ops →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
