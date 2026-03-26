import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "The intellectual frameworks behind 15 years of operational work. OIA, the SCU model, and AI in operations.",
};

const cards = [
  {
    label: "Framework",
    title: "Operations Intelligence Architecture",
    body: "The framework for finding what's hidden and fixing what's broken. Built from 15 years of seeing the same patterns across iGaming, Tech & Digital.",
    href: "/thinking/oia",
    cta: "Explore OIA",
  },
  {
    label: "Methodology",
    title: "The SCU Framework",
    body: "See. Clarify. Use. A three-step methodology for turning operational complexity into measurable improvement.",
    href: "/thinking/scu",
    cta: "Read the methodology",
  },
  {
    label: "Practice",
    title: "AI in Operations & Marketing",
    body: "How AI actually changes the way businesses run — beyond the hype, into real workflow architecture.",
    href: "/thinking/ai",
    cta: "Read my thinking",
  },
];

export default function ThinkingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Thinking
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            The frameworks behind the work
          </h1>
          <p className="mt-4 max-w-[560px] text-lg text-white/75">
            15 years of operational work produces frameworks. Here are three worth knowing.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block rounded-2xl bg-brand-card p-8 transition-shadow hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  {card.label}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                  {card.body}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-brand-blue underline-offset-4 group-hover:underline">
                  {card.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
