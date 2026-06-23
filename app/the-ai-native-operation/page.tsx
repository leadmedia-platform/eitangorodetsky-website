import type { Metadata } from "next";
import Link from "next/link";

// The newsletter lead magnet — delivered to confirmed subscribers (linked from
// the confirm/welcome email + /confirmed). noindex so it stays the subscribe
// reward rather than a freely-discoverable page.
export const metadata: Metadata = {
  title: "The AI-native marketing operation: a teardown — Eitan Gorodetsky",
  description:
    "The four layers that separate a marketing team that runs on AI from one with AI bolted on — plus the maturity ladder and 10 questions to place your own function.",
  robots: { index: false, follow: false },
};

const LAYERS = [
  {
    n: "1",
    name: "Memory",
    body: "The system remembers decisions, context and preferences, so you stop being its memory.",
    bolt: "Re-explain everything each session.",
    built: "It briefs you.",
  },
  {
    n: "2",
    name: "Hands",
    body: "Wired into the real stack (data, tools, publishing), not stuck in a chat window.",
    bolt: "Copy-paste between AI and the tools.",
    built: "It acts in the tools directly.",
  },
  {
    n: "3",
    name: "Codified work",
    body: "The work is written down once and improves over time, not re-prompted from scratch.",
    bolt: "Clever one-off prompts.",
    built: "Repeatable, versioned procedures.",
  },
  {
    n: "4",
    name: "Safe autonomy",
    body: "Unsupervised work lands in a staging surface a human approves; autonomy real, blast radius zero.",
    bolt: "A human in every loop.",
    built: "It works while you sleep; you approve with coffee.",
  },
];

const QUESTIONS = [
  "Does your AI remember last week's context, or do you re-explain it?",
  "Can it act in your real tools, or only draft text?",
  "Is your best AI work written down and reused, or re-prompted each time?",
  "What can it do unsupervised — and what stops a mistake mattering?",
  "Where's the staging surface a human approves before anything goes live?",
  "Which Tuesday tasks actually changed — or just got faster?",
  "What's one process you'd trust to run overnight? Why not yet?",
  "Who owns the “plumbing” (memory, integrations) vs the prompts?",
  "If your best operator left, how much of the AI leverage leaves with them?",
  "Which rung are you on — honestly — and what's the next rung's one blocker?",
];

export default function TeardownPage() {
  return (
    <div className="pt-24 pb-16">
      <article className="mx-auto max-w-[680px] px-6">
        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            The teardown · for subscribers
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-brand-dark md:text-4xl">
            The AI-native marketing operation: a teardown
          </h1>
          <p className="mt-4 text-lg text-brand-gray">
            Most marketing teams use AI. Almost none run on it. Here&apos;s the
            difference, the four parts that make it real, and how to place your
            own function — in one read.
          </p>
        </header>

        <div className="prose-stories prose prose-lg max-w-none">
          <h2>The 4 layers (bolt-on vs built-in)</h2>
        </div>

        <div className="mt-6 space-y-4">
          {LAYERS.map((l) => (
            <div key={l.n} className="rounded-xl bg-brand-card p-5">
              <p className="font-serif text-lg font-bold text-brand-dark">
                {l.n}. {l.name}
              </p>
              <p className="mt-1 text-brand-gray">{l.body}</p>
              <p className="mt-3 text-sm text-brand-gray">
                <span className="font-semibold text-brand-dark">Bolt-on:</span>{" "}
                {l.bolt}
                <br />
                <span className="font-semibold text-brand-dark">Built-in:</span>{" "}
                {l.built}
              </p>
            </div>
          ))}
        </div>

        <div className="prose-stories prose prose-lg mt-12 max-w-none">
          <h2>The maturity ladder</h2>
          <p>
            Tools → Assistants → Colleagues → Operating system. Most teams are on
            rungs 1–2 and being sold rung 4. That gap is why pilots stall.
          </p>
          <h2>Place your function — 10 questions</h2>
        </div>

        <ol className="mt-4 list-decimal space-y-2 pl-6 text-brand-gray marker:font-semibold marker:text-brand-blue">
          {QUESTIONS.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>

        <div className="prose-stories prose prose-lg mt-12 max-w-none">
          <p>
            <strong>The honest part:</strong> the layers are boring to build and
            nobody wants to. That&apos;s exactly why building them is the edge.
          </p>
        </div>

        <section className="mt-12 rounded-2xl bg-brand-card p-6">
          <p className="text-brand-gray">
            This is the kind of thing I write up in full — frameworks and
            build-in-public field notes from inside a live AI-native operation.
          </p>
          <Link
            href="/writing"
            className="mt-5 inline-block rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
          >
            Read the essays →
          </Link>
        </section>
      </article>
    </div>
  );
}
