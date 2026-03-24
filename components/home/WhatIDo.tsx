const pillars = [
  {
    title: "Build",
    body: "Growth engines that scale — from SEO to TV campaigns to AI-powered systems.",
  },
  {
    title: "Lead",
    body: "Multicultural teams from 10 to 120. Coaching leaders is what I care about most.",
  },
  {
    title: "Find",
    body: "The hidden costs, broken processes, and quiet inefficiencies that dashboards miss.",
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
