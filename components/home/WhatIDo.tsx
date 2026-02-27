import Section from "@/components/shared/Section";

const pillars = [
  {
    title: "I See",
    description:
      "The hidden costs, broken processes, and quiet inefficiencies that dashboards miss and reports gloss over.",
  },
  {
    title: "I Say",
    description:
      "The uncomfortable truths. The stories that need telling. The numbers that change the conversation.",
  },
  {
    title: "I Fix",
    description:
      "Margin recovery. Process redesign. Operational intelligence that turns insight into measurable improvement.",
  },
];

export default function WhatIDo() {
  return (
    <Section className="bg-bg-secondary">
      <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
        What I Do
      </h2>
      <div className="grid gap-px bg-brand-amber/20 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-bg-secondary p-8 text-center md:p-12"
          >
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
              {pillar.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
