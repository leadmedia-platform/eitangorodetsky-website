import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Operations Intelligence Architecture — Eitan Gorodetsky",
  description:
    "Learn the framework for finding hidden costs and fixing broken operations.",
};

const kpiPillars = [
  {
    title: "Margin Recovery",
    description: "Identify and eliminate hidden costs that erode profitability without anyone noticing.",
  },
  {
    title: "Efficiency Gain",
    description: "Reduce waste without cutting people — find the process bloat, not the headcount.",
  },
  {
    title: "Decision Speed",
    description: "Compress decision cycles by removing bottlenecks and unnecessary approval layers.",
  },
  {
    title: "Revenue Yield",
    description: "Increase value per customer by fixing the leaks in your revenue pipeline.",
  },
  {
    title: "Risk Compression",
    description: "Identify operational vulnerabilities before they become expensive surprises.",
  },
];

const scuSteps = [
  {
    step: "See",
    description:
      "What's hidden in the data. The costs that don't appear on dashboards, the dependencies nobody mapped, the processes that cost more to manage than the problems they solve.",
  },
  {
    step: "Clarify",
    description:
      "What it means for the business. Translating operational complexity into clear, quantified impact. Turning hidden costs into visible numbers that drive action.",
  },
  {
    step: "Use",
    description:
      "How to act on it. A prioritized roadmap of fixes, process changes, and system improvements — ranked by impact, effort, and speed of return.",
  },
];

const auditWeeks = [
  {
    week: "Week 1",
    title: "Discovery",
    description:
      "Understanding the baseline. Mapping processes, interviewing key stakeholders, identifying data sources. The goal is to see the organization as it actually operates, not as it thinks it operates.",
    deliverable: "Process map and initial hypothesis document",
  },
  {
    week: "Week 2",
    title: "Deep Dive",
    description:
      "Finding hidden costs. Systematic analysis of the gaps between systems, processes, and reality. Following the money through workflows, reconciliations, and manual overrides.",
    deliverable: "Hidden cost inventory with preliminary quantification",
  },
  {
    week: "Week 3",
    title: "Analysis",
    description:
      "Quantifying impact. Validating findings, calculating total cost of each discovery, and modeling the ROI of proposed fixes. Building the business case that makes action inevitable.",
    deliverable: "Quantified impact analysis and priority matrix",
  },
  {
    week: "Week 4",
    title: "Presentation",
    description:
      "Actionable roadmap. A comprehensive presentation with findings, quantified impact, and a step-by-step implementation plan. Not a report that gathers dust — a blueprint for action.",
    deliverable: "Final report and implementation roadmap",
  },
];

export default function OIAPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-[680px] text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal md:text-5xl">
            What is Operations Intelligence Architecture?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
            The framework for finding what&apos;s hidden and fixing what&apos;s broken.
          </p>
        </div>
      </Section>

      {/* 5 KPI Pillars */}
      <Section className="bg-bg-secondary">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
          The 5 Pillars
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {kpiPillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto mb-4 h-2 w-2 rounded-full bg-brand-amber" />
              <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SCU Framework */}
      <Section>
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
          The SCU Framework
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {scuSteps.map((item, i) => (
            <div key={item.step} className="text-center">
              <span className="font-mono text-sm text-brand-amber">
                Step {i + 1}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-brand-charcoal">
                {item.step}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4-Week Audit */}
      <Section className="bg-bg-secondary">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
          How the Margin Recovery Audit Works
        </h2>
        <div className="mx-auto max-w-[700px]">
          <div className="relative border-l-2 border-brand-amber pl-8">
            {auditWeeks.map((week) => (
              <div key={week.week} className="relative mb-12 last:mb-0">
                <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full bg-brand-amber" />
                <span className="font-mono text-sm font-medium text-brand-amber">
                  {week.week}
                </span>
                <h3 className="mt-1 font-serif text-xl font-bold text-brand-charcoal">
                  {week.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-text-secondary">
                  {week.description}
                </p>
                <p className="mt-2 font-mono text-xs text-brand-amber">
                  Deliverable: {week.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies Placeholder */}
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Coming soon — anonymized case studies from real engagements.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-secondary">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
            Ready to find what&apos;s hidden?
          </h2>
          <div className="mt-8">
            <Button href="/work-with-me">Let&apos;s talk</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
