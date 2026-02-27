import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import ServiceCard from "@/components/work/ServiceCard";
import FAQ from "@/components/work/FAQ";

export const metadata: Metadata = {
  title: "Work With Me — Eitan Gorodetsky | Consulting Services",
  description:
    "Margin Recovery Audit, Fractional COO, Atlassian Consulting. Let's find what's hidden.",
};

const services = [
  {
    title: "Margin Recovery Audit",
    duration: "4 weeks",
    investment: "$10,000 base + $10,000 success fee",
    description:
      "Systematic discovery of hidden costs. A detailed margin recovery roadmap with quantified impact and prioritized actions.",
    idealFor:
      "Companies with 50–500 person teams, annual revenue $5M+",
    flagship: true,
  },
  {
    title: "Fractional COO",
    duration: "Flexible (4–12 weeks typical)",
    investment: "Custom based on scope",
    description:
      "Direct operational leadership, strategic guidance, systems improvement, team coaching, and executive advisory.",
    idealFor:
      "Fast-growing startups needing operational infrastructure",
    flagship: false,
  },
  {
    title: "Atlassian Implementation & Optimization",
    duration: "Ongoing (projects 6–16 weeks)",
    investment: "Custom",
    description:
      "Jira/Confluence architecture, workflow optimization, automation setup, and team adoption training.",
    idealFor:
      "Teams struggling with Jira/Confluence setup or adoption",
    flagship: false,
  },
  {
    title: "Speaking & Workshop Facilitation",
    duration: "1–4 hours",
    investment: "Custom",
    description:
      "Board talks, company workshops, and team training on operational intelligence, margin recovery, and process design.",
    idealFor: "Leadership teams and conferences",
    flagship: false,
  },
];

const faqs = [
  {
    question: "How do I know if I need an audit?",
    answer:
      "If your margins have been flat or declining despite revenue growth, if you suspect there are costs you can't see, or if your team spends significant time on manual workarounds — you likely need an audit. The discovery call is free and will help us determine if it's the right fit.",
  },
  {
    question: "What if we don't find anything?",
    answer:
      "In over a decade of doing this work, I've never completed an audit without finding significant hidden costs. The base fee covers the work regardless, and the success fee only applies if we find recoverable margin above a pre-agreed threshold.",
  },
  {
    question: "How is the success fee calculated?",
    answer:
      "The success fee is tied to the quantified annual impact of the findings. We agree on the calculation methodology before the engagement begins, so there are no surprises. It's designed to align our incentives — I only earn more when you save more.",
  },
  {
    question: "Can we do this remotely?",
    answer:
      "Yes. Most audits are conducted remotely with a combination of data analysis, video interviews, and screen-sharing sessions. For larger engagements, on-site visits can be arranged.",
  },
  {
    question: "What's the time commitment from our team?",
    answer:
      "Minimal. I'll need 2–3 hours of stakeholder interviews in week one, access to relevant systems and data, and a 1-hour check-in per week. The heavy lifting is on my side.",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="pt-20">
      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-[680px] text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal md:text-5xl">
            How I Work
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Three ways to access operational intelligence.
          </p>
        </div>
      </Section>

      {/* Service Cards */}
      <Section className="bg-bg-secondary">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* Testimonials Placeholder */}
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Client testimonials coming soon.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-bg-secondary">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-[700px]">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Calendly Placeholder */}
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
            Schedule a Discovery Call
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            30 minutes. No commitment. Let&apos;s see if there&apos;s a fit.
          </p>
          <div className="mx-auto mt-8 flex h-[400px] max-w-[600px] items-center justify-center rounded-lg border-2 border-dashed border-brand-charcoal/20">
            <p className="text-sm text-text-secondary">
              Calendly booking widget will be embedded here
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
