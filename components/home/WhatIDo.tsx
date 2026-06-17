const pillars = [
  {
    title: "Build",
    body: "AI-native systems that run the business: persistent memory, live integration, codified workflows, and gated autonomy.",
  },
  {
    title: "Operate",
    body: "A multi-pillar operation — agency work, owned ventures, products — run largely solo, on the AI layer.",
  },
  {
    title: "Find",
    body: "The hidden costs and quiet inefficiencies the dashboards miss. Still the through-line.",
  },
];

export default function WhatIDo() {
  return (
    <section className="bg-brand-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
          What I Do
        </p>
        <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
          Three things I do well.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <p className="font-serif text-6xl font-bold text-brand-blue/12 leading-none select-none">
                {p.title}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-brand-dark">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-gray">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
