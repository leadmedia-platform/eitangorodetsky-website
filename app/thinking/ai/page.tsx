import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI in Operations & Marketing — Eitan Gorodetsky",
  description:
    "How AI actually changes the way businesses run — beyond the hype, into real workflow architecture.",
};

const built = [
  {
    title: "AgentReady.site",
    description: "AI readiness scoring SaaS. Built to learn AI agent architecture hands-on — from API design to Claude MCP server integration.",
  },
  {
    title: "AI-powered content engine",
    description: "Automated content workflows for LinkedIn and multi-platform distribution. Built on Claude, not prompts.",
  },
  {
    title: "Automated lead scoring",
    description: "LLM-powered classification of inbound leads by intent, fit, and timing. Reduces response time from hours to seconds.",
  },
  {
    title: "Financial tracking workflows",
    description: "AI-assisted extraction and categorisation of financial data from unstructured sources. No more manual spreadsheet work.",
  },
];

const tools = [
  "Claude (Anthropic) — primary reasoning layer",
  "MCP server architecture — tool integration",
  "Vercel — deployment and edge functions",
  "Next.js — application framework",
  "Ahrefs — SEO data integration",
];

export default function AIPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Practice
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            AI in Operations &amp; Marketing
          </h1>
          <p className="mt-4 text-xl text-white/75 font-light italic">
            &ldquo;I&apos;m not an AI researcher. I&apos;m an operator who builds with AI.&rdquo;
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            The Philosophy
          </p>
          <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            AI doesn&apos;t replace operators. It makes good operators dangerous.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-brand-gray">
            <p>
              The hype cycle around AI is exhausting. Every tool claiming to replace every function. Every LinkedIn post about prompts. Every consultant calling themselves an AI expert after two weeks with ChatGPT.
            </p>
            <p>
              The reality is simpler and more interesting. AI is infrastructure, like electricity or the internet. The question isn&apos;t whether to use it — it&apos;s whether you understand it well enough to build with it, not just use the interfaces someone else built.
            </p>
            <p>
              The difference between using AI tools and architecting AI systems is the difference between driving a car and designing one. Both are valuable. But only one of them lets you build what doesn&apos;t exist yet.
            </p>
          </div>
        </div>
      </section>

      {/* What I've built */}
      <section className="bg-brand-card py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            What I&apos;ve Built
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-brand-dark">
            Proof of concept, in production
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {built.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-8">
                <h3 className="font-serif text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-brand-bg py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            Tools I Work With
          </p>
          <ul className="space-y-2">
            {tools.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-brand-gray">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-card py-16">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <p className="text-brand-gray">
            Interested in how AI applies to your operations?{" "}
            <Link href="/contact" className="font-medium text-brand-blue hover:underline underline-offset-4">
              Let&apos;s talk
            </Link>
            .
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="/thinking/scu" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">
              ← SCU Framework
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
