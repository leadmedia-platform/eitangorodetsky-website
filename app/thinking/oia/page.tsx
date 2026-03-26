import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operations Intelligence Architecture",
  description:
    "The OIA framework for finding what's hidden and fixing what's broken in operations.",
};

const pillars = [
  {
    number: "01",
    title: "Margin Recovery",
    body: "Finding the costs that shouldn't exist — vendor overcharges, process inefficiencies, unused tools, and the quiet drains that compound over time.",
  },
  {
    number: "02",
    title: "Efficiency Gain",
    body: "Mapping how work actually flows — not how it's supposed to — and redesigning the friction points that slow everything down.",
  },
  {
    number: "03",
    title: "Decision Speed",
    body: "Getting the right information to the right people faster. Building systems where insight is immediate, not a report that arrives too late.",
  },
  {
    number: "04",
    title: "Revenue Yield",
    body: "Finding the revenue that's already there but not being captured. Conversion gaps, pricing misalignments, untapped segments.",
  },
  {
    number: "05",
    title: "Risk Compression",
    body: "Mapping the dependencies nobody mapped, the single points of failure everyone knows about but nobody wants to say out loud.",
  },
];

const auditPhases = [
  {
    week: "Week 1",
    title: "Discovery",
    description: "Deep orientation into the business, its processes, data systems, and team structure. No outputs yet — only questions and listening.",
  },
  {
    week: "Week 2",
    title: "Deep Dive",
    description: "Data pull and analysis. Process walkthroughs. The conversations that happen after the official meetings.",
  },
  {
    week: "Week 3",
    title: "Analysis",
    description: "Quantifying findings. Mapping costs to their sources. Prioritising by impact, effort, and speed of return.",
  },
  {
    week: "Week 4",
    title: "Presentation",
    description: "A clear, actionable report. No jargon. Every finding tied to a specific fix, a specific owner, and a specific timeline.",
  },
];

export default function OIAPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Framework
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Operations Intelligence Architecture
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-white/75 leading-relaxed">
            This framework emerged from 15 years of seeing the same patterns across iGaming operators, affiliates, and managed services. The specific industry doesn&apos;t matter — the pattern is universal.
          </p>
        </div>
      </section>

      {/* What is OIA */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            The Idea
          </p>
          <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Most operational problems aren&apos;t hard to fix. They&apos;re hard to see.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-brand-gray">
            <p>
              Every organisation I&apos;ve worked with had the same thing in common: the data existed. The problems were knowable. But nobody was looking at the right things, or asking the right questions, or had the time to step back and do the kind of analysis that turns operational complexity into clear, actionable intelligence.
            </p>
            <p>
              OIA is the discipline of doing exactly that. It&apos;s not a software product. It&apos;s not a methodology in the consultant sense — something delivered in PowerPoint and then forgotten. It&apos;s a way of seeing organisations that I&apos;ve refined over 15 years of working inside them.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="bg-brand-card py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            Five Pillars
          </p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            What OIA looks at
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.number} className="rounded-xl bg-white p-8">
                <span className="font-mono text-xs font-bold text-brand-gold">{p.number}</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-brand-dark">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Week Audit */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            How It Works
          </p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            The 4-week margin recovery audit
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {auditPhases.map((phase) => (
              <div key={phase.week}>
                <span className="font-mono text-sm font-bold text-brand-gold">{phase.week}</span>
                <h3 className="mt-2 font-serif text-xl font-bold text-brand-dark">{phase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-card py-16">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <p className="text-brand-gray">
            Want to discuss how this applies to your organisation?{" "}
            <Link href="/contact" className="font-medium text-brand-blue hover:underline underline-offset-4">
              Get in touch
            </Link>
            .
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/thinking/scu" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">
              ← The SCU Framework
            </Link>
            <Link href="/thinking" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">
              All thinking →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
