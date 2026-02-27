import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Tools — Eitan Gorodetsky | Operations Intelligence",
  description:
    "Operational intelligence tools, templates, and courses. Coming soon.",
};

const tools = [
  {
    title: "Margin Leak Calculator",
    description:
      "An interactive tool to estimate your organization's hidden operational costs. Input your team size, average salaries, and process inefficiencies to discover what's leaking from your margins.",
    status: "Coming Soon",
  },
  {
    title: "Operational Audit Templates",
    description:
      "Downloadable templates for running your own operational audit. Process mapping frameworks, cost analysis worksheets, and stakeholder interview guides.",
    status: "Coming Soon",
  },
  {
    title: "Video Courses",
    description:
      "Deep-dive courses on operational intelligence, margin recovery methodology, and building operational infrastructure for growing companies.",
    status: "Coming Soon",
  },
];

export default function ToolsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-[680px] text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal md:text-5xl">
            Tools & Resources
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Practical tools for finding what&apos;s hidden in your operations.
          </p>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-lg border-2 border-dashed border-brand-charcoal/20 bg-brand-cream p-8"
            >
              <span className="inline-block rounded-full bg-brand-charcoal/10 px-3 py-1 text-xs font-medium text-text-secondary">
                {tool.status}
              </span>
              <h3 className="mt-4 font-serif text-xl font-bold text-brand-charcoal">
                {tool.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
            Want to know when these launch?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Join the newsletter and be first to access new tools.
          </p>
          <div className="mt-8">
            <Button href="#newsletter">Join the newsletter</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
