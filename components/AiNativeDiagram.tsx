// The four layers that separate an operation that runs ON AI from one with AI
// bolted on. A styled flow diagram — no images, matches the site's editorial
// aesthetic. Used on /about and /work-with-me to *show* the thesis.

const layers = [
  {
    n: "01",
    title: "Memory",
    body: "Persistent context across every session. The system briefs me — not the other way around.",
  },
  {
    n: "02",
    title: "Integration",
    body: "Wired into the real stack — analytics, ad platforms, the deploy pipeline. It acts, not just advises.",
  },
  {
    n: "03",
    title: "Codified workflows",
    body: "Every procedure written once, versioned like code, improving with each run.",
  },
  {
    n: "04",
    title: "Gated autonomy",
    body: "Unsupervised work writes to staging; a human promotes. The autonomy is real, the blast radius is zero.",
  },
];

export default function AiNativeDiagram() {
  return (
    <div className="grid gap-4 md:grid-cols-4 md:gap-3">
      {layers.map((l, i) => (
        <div key={l.n} className="relative">
          <div className="h-full rounded-xl border border-brand-dark/8 bg-white p-6">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-gold">
              {l.n}
            </span>
            <h3 className="mt-2 font-serif text-xl font-bold text-brand-dark">
              {l.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray">{l.body}</p>
          </div>
          {/* connector → between cards (desktop only) */}
          {i < layers.length - 1 && (
            <span
              aria-hidden
              className="absolute right-[-11px] top-1/2 z-10 hidden -translate-y-1/2 text-brand-blue/40 md:block"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
