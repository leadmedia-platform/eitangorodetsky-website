import type { Metadata } from "next";
import { palette, personas, type as typeTokens, voiceColors, dark } from "@/lib/brand";
import Monogram from "@/components/global/Monogram";

export const metadata: Metadata = {
  title: "Brand Book",
  description: "The eitangorodetsky.com visual system — internal reference.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/brand" },
};

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

function Swatch({ hex, label }: { hex: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-14 w-full rounded-md border border-brand-dark/10"
        style={{ backgroundColor: hex }}
      />
      <div className="flex justify-between text-[11px] text-brand-gray">
        <span>{label}</span>
        <span className="font-mono">{hex}</span>
      </div>
    </div>
  );
}

function ScaleRow({ name, scale }: { name: string; scale: Record<string, string> }) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 font-serif text-xl text-brand-dark capitalize">{name}</h3>
      <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
        {STEPS.map((s) => (
          <Swatch key={s} hex={scale[String(s)]} label={String(s)} />
        ))}
      </div>
    </div>
  );
}

export default function BrandBook() {
  const scales = [
    { name: "blue · authority", scale: palette.blue },
    { name: "teal · growth", scale: palette.teal },
    { name: "gold · accent", scale: palette.gold },
    { name: "neutral · ink", scale: palette.neutral },
  ];

  return (
    <main className="mx-auto max-w-[1100px] px-6 py-24">
      {/* Hero */}
      <header className="mb-20 border-b border-brand-dark/10 pb-12">
        <div className="mb-6 flex items-center gap-4 text-brand-blue">
          <Monogram size={56} />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-gray">
            Brand Book · v1 · 18/06/2026
          </span>
        </div>
        <h1 className="font-serif text-4xl font-bold text-brand-dark md:text-5xl">
          The operator who actually runs an AI-native business — built from the inside out.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-brand-gray">
          One brand, three modes. Proof over claims; systems over logos; depth over noise.
          Evolved palette, editorial type, real dark mode. This page renders the live tokens
          from <code className="font-mono text-sm text-brand-blue">lib/brand.ts</code>.
        </p>
      </header>

      {/* Personas */}
      <section className="mb-20">
        <h2 className="mb-6 font-serif text-2xl text-brand-dark">Three modes</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {Object.values(personas).map((p) => (
            <div key={p.label} className="rounded-2xl border border-brand-dark/8 bg-brand-card p-6">
              <div className="mb-4 h-2 w-16 rounded-full" style={{ backgroundColor: p.accent }} />
              <h3 className="font-serif text-xl text-brand-dark">{p.label}</h3>
              <p className="mt-2 text-sm text-brand-gray">{p.note}</p>
              <div className="mt-4 flex gap-2">
                {[p.accent, "depth" in p ? p.depth : undefined, "emphasis" in p ? p.emphasis : ("warm" in p ? p.warm : ("signal" in p ? p.signal : undefined))]
                  .filter(Boolean)
                  .map((c) => (
                    <span key={c as string} className="h-6 w-6 rounded-full border border-brand-dark/10" style={{ backgroundColor: c as string }} />
                  ))}
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-brand-gray">
                {p.headingFont} headings{"labelFont" in p ? ` · ${p.labelFont} labels` : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Palette */}
      <section className="mb-20">
        <h2 className="mb-6 font-serif text-2xl text-brand-dark">Palette</h2>
        {scales.map((s) => (
          <ScaleRow key={s.name} name={s.name} scale={s.scale as unknown as Record<string, string>} />
        ))}
      </section>

      {/* Typography */}
      <section className="mb-20">
        <h2 className="mb-6 font-serif text-2xl text-brand-dark">Typography</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-brand-dark/8 p-6">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-brand-gray">Serif · headings (Playfair Display)</p>
            <p className="font-serif text-4xl text-brand-dark">Eitan Gorodetsky</p>
            <p className="font-serif text-xl text-brand-gray">Build-in-public. Proof over claims.</p>
          </div>
          <div className="rounded-xl border border-brand-dark/8 p-6">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-brand-gray">Sans · body (Inter)</p>
            <p className="font-sans text-lg text-brand-dark">
              I run an AI-native marketing operation and write about what it takes to build one —
              memory, integration, codified workflows, and governance.
            </p>
          </div>
          <div className="rounded-xl border border-brand-dark/8 p-6">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-brand-gray">Mono · builder accents (JetBrains Mono)</p>
            <p className="font-mono text-base text-brand-blue">&gt; runs.on(AI) — framework: the_compounding_test</p>
          </div>
          <div className="rounded-xl border border-brand-dark/8 p-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-brand-gray">Type scale</p>
            <div className="space-y-1 text-brand-dark">
              {Object.entries(typeTokens.scale).map(([k, v]) => (
                <p key={k} className="font-serif" style={{ fontSize: v as string, lineHeight: 1.1 }}>
                  {k} — Aa
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="mb-20">
        <h2 className="mb-6 font-serif text-2xl text-brand-dark">Components</h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-full bg-brand-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-teal">
            Primary
          </button>
          <button className="rounded-full border border-brand-dark/20 px-5 py-2 text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue">
            Ghost
          </button>
          {Object.entries(voiceColors).map(([name, c]) => (
            <span
              key={name}
              className="rounded-full px-3 py-1 text-xs font-medium capitalize"
              style={{ backgroundColor: c.bg, color: c.fg }}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Logo + monogram */}
      <section className="mb-20">
        <h2 className="mb-6 font-serif text-2xl text-brand-dark">Logo &amp; monogram</h2>
        <div className="flex flex-wrap items-center gap-10 rounded-xl border border-brand-dark/8 p-8">
          <span className="font-serif text-base font-bold uppercase tracking-widest text-brand-dark">
            Eitan Gorodetsky
          </span>
          <span className="text-brand-blue"><Monogram size={64} /></span>
          <span className="text-brand-teal"><Monogram size={64} /></span>
          <span className="text-brand-gold"><Monogram size={64} /></span>
        </div>
        <p className="mt-3 text-sm text-brand-gray">Monogram is a v1 draft — react to it; favicon/OG export follows if approved.</p>
      </section>

      {/* Dark preview */}
      <section className="mb-10">
        <h2 className="mb-6 font-serif text-2xl text-brand-dark">Dark palette</h2>
        <div className="rounded-2xl p-8" style={{ backgroundColor: dark.bg, color: dark.ink }}>
          <p className="font-serif text-2xl" style={{ color: dark.ink }}>Built from the inside out.</p>
          <div className="mt-4 flex gap-3">
            {[dark.blue, dark.teal, dark.gold, dark.card].map((c) => (
              <span key={c} className="h-8 w-8 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <p className="mt-4 text-sm" style={{ color: dark.muted }}>
            Real dark mode now wired — every token overridden, not just the body. Toggle ships in Phase 3.
          </p>
        </div>
      </section>
    </main>
  );
}
