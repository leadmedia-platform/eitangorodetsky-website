import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building in the open",
  description:
    "The system I actually run — frameworks, the AI-native operating layers, AI-search infrastructure, and the content engine. Build-in-public, not theory.",
  alternates: { canonical: "/building" },
  openGraph: {
    title: "Building in the open — Eitan Gorodetsky",
    description:
      "The system I actually run — frameworks, AI-native operating layers, AI-search infrastructure, and the content engine.",
    type: "website",
  },
};

type Item = { name: string; body: string; href?: string; meta?: string };
type Section = { label: string; heading: string; intro: string; items: Item[] };

const sections: Section[] = [
  {
    label: "// FRAMEWORKS",
    heading: "Named models, used in production",
    intro:
      "Reusable frameworks I've published and run — the intellectual capital, not hot takes.",
    items: [
      { name: "The AI-native maturity ladder", body: "Tools → Assistants → Colleagues → Operating system. Where a team actually sits, and why most stall on rung two.", href: "/writing/ai-native-marketing-operation", meta: "essay · pillar: build-in-public" },
      { name: "The compounding test", body: "Three questions that separate AI that moves a number from AI that just demos well: does it touch a real system, remember, and improve?", href: "/writing/where-ai-moves-roi", meta: "essay · pillar: frameworks" },
      { name: "Govern the blast radius, not the intelligence", body: "Governance as accelerator. Control what the AI can touch, not what it can think — so you can safely say yes to autonomy.", href: "/writing/ai-governance-blast-radius", meta: "essay · pillar: governance" },
      { name: "Architecture over headcount", body: "When the marginal cost of codified work approaches zero, leverage stops scaling with people and starts scaling with the operating layer.", href: "/writing/architecture-over-headcount", meta: "essay · pillar: operator economics" },
      { name: "Operations Intelligence Architecture", body: "The OIA framework for finding what's hidden and fixing what's broken — five pillars, a structured audit.", href: "/thinking/oia", meta: "framework · DefinedTerm" },
      { name: "The SCU framework", body: "See. Clarify. Use. Turning operational complexity into measurable improvement.", href: "/thinking/scu", meta: "framework · DefinedTerm" },
    ],
  },
  {
    label: "// THE OPERATING SYSTEM",
    heading: "Four layers that mean it runs on AI",
    intro:
      "The difference between an operation that runs on AI and one with AI bolted on. None of them are a model — all of them are architecture.",
    items: [
      { name: "Persistent memory", body: "Context compounds across sessions. I'm not briefing it — it's briefing me.", meta: "layer 01" },
      { name: "Hands on the real stack", body: "Agents wired into live tools, not stuck in a chat window. Work happens where the systems are.", meta: "layer 02" },
      { name: "Codified workflows", body: "Written down once, improving while I sleep. The operating layer is the asset.", meta: "layer 03" },
      { name: "Gated autonomy", body: "Unsupervised work writes to a staging surface a human promotes to live. Autonomy real, blast radius zero.", meta: "layer 04" },
    ],
  },
  {
    label: "// AI-SEARCH VISIBILITY",
    heading: "Built to be cited, not just ranked",
    intro:
      "Content and infrastructure architected so frontier LLMs resolve and cite the work. This site is the proof case.",
    items: [
      { name: "Frameworks as entities", body: "Named models marked up as DefinedTerm + CreativeWork, authored — so models cite the concept, not just the page.", meta: "schema" },
      { name: "Sourced citations in schema", body: "Every essay's sources are machine-readable in Article.citation[] — attributable, dated, never fabricated.", meta: "schema" },
      { name: "One entity graph", body: "Person / Organization / WebSite share stable @ids — one canonical entity, not duplicate nodes.", meta: "schema" },
      { name: "Answer-first + AI-crawler open", body: "Self-contained answers up top, llms.txt index, AI crawlers explicitly welcomed.", meta: "GEO" },
    ],
  },
  {
    label: "// THE CONTENT ENGINE",
    heading: "Write once, distribute everywhere",
    intro:
      "An owned hub with rented mechanics — the data stays home, the posting is leverage.",
    items: [
      { name: "Atomisation", body: "One essay → newsletter + LinkedIn + X variants, each in voice, review-gated before anything ships.", meta: "pipeline" },
      { name: "Owned audience", body: "Own the list and the attribution; rent only the posting surface. No platform lock-in.", meta: "architecture" },
      { name: "UTM attribution", body: "Every link tagged to source / campaign / variant — measured in analytics, no platform API needed.", meta: "measurement" },
    ],
  },
];

export default function BuildingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Hero — Builder mode */}
        <header className="border-b border-brand-dark/10 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-signal">
            // BUILD IN PUBLIC
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-brand-dark md:text-5xl">
            Building in the open.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-gray">
            I run a marketing operation that runs on AI. Here&apos;s the system — the
            frameworks, the infrastructure, and the working receipts. Not theory; the thing
            I actually operate.
          </p>
        </header>

        {/* Sections */}
        {sections.map((s) => (
          <section key={s.label} className="border-b border-brand-dark/8 py-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-signal">
              {s.label}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-brand-dark md:text-3xl">
              {s.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-brand-gray">{s.intro}</p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-brand-dark/10 bg-brand-dark/10 sm:grid-cols-2">
              {s.items.map((it) => {
                const inner = (
                  <div className="flex h-full flex-col bg-brand-bg p-6 transition-colors group-hover:bg-brand-card">
                    {it.meta && (
                      <span className="font-mono text-[11px] uppercase tracking-wider text-brand-gray">
                        {it.meta}
                      </span>
                    )}
                    <h3 className="mt-2 font-serif text-lg text-brand-dark">{it.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray">{it.body}</p>
                    {it.href && (
                      <span className="mt-3 font-mono text-xs text-brand-signal">read →</span>
                    )}
                  </div>
                );
                return it.href ? (
                  <Link key={it.name} href={it.href} className="group block">
                    {inner}
                  </Link>
                ) : (
                  <div key={it.name} className="group">
                    {inner}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="py-14">
          <p className="font-serif text-xl text-brand-dark">
            The people worth listening to are running the thing they describe.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/writing"
              className="rounded-full bg-brand-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-teal"
            >
              Read the essays
            </Link>
            <Link
              href="/work-with-me"
              className="rounded-full border border-brand-dark/20 px-5 py-2 text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Work with me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
