import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/work/ServiceCard";
import FAQ from "@/components/work/FAQ";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Margin Recovery Audit, Fractional COO, Atlassian consulting, speaking. Available while primarily seeking full-time leadership roles.",
};

const services = [
  {
    title: "Margin Recovery Audit",
    duration: "4 weeks",
    investment: "$10,000 base + $10,000 success fee",
    description:
      "Systematic discovery of hidden costs. A detailed margin recovery roadmap with quantified impact and prioritized actions. In over a decade of doing this work, I've never completed an audit without finding significant hidden costs.",
    idealFor:
      "Companies with 50–500 person teams, annual revenue $5M+",
    flagship: true,
  },
  {
    title: "Fractional COO",
    duration: "Flexible (4–12 weeks typical)",
    investment: "Custom based on scope",
    description:
      "Direct operational leadership, strategic guidance, systems improvement, team coaching, and executive advisory. Ideal for companies that need senior operational thinking without a full-time hire.",
    idealFor:
      "Fast-growing startups needing operational infrastructure",
    flagship: false,
  },
  {
    title: "Atlassian Implementation & Optimisation",
    duration: "Ongoing (projects 6–16 weeks)",
    investment: "Custom",
    description:
      "Jira/Confluence architecture, workflow optimisation, automation setup, and team adoption training. Built from the ground up or fixed when it's become a mess.",
    idealFor:
      "Teams struggling with Jira/Confluence setup or adoption",
    flagship: false,
  },
  {
    title: "Speaking & Workshop Facilitation",
    duration: "1–4 hours",
    investment: "Custom",
    description:
      "Board talks, company workshops, and team training on operational intelligence, margin recovery, AI in operations, and process design. Previous venues: SIGMA, MARE BALTICUM Gaming Summit.",
    idealFor: "Leadership teams and industry conferences",
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
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Consulting Services
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Work With Me
          </h1>
          <p className="mt-6 max-w-[560px] text-lg text-white/75">
            While I&apos;m primarily looking for a full-time leadership role, I&apos;m available for consulting engagements in these areas.
          </p>
          <Link
            href="/career"
            className="mt-6 inline-block text-sm text-white/60 hover:text-white underline-offset-4 hover:underline"
          >
            Looking to hire? View my career →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            Services
          </p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Four ways to work together
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-card py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-12 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="max-w-[700px]">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-bg py-20">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            Ready to start a conversation?
          </h2>
          <p className="mt-4 text-brand-gray">
            30 minutes. No commitment. Let&apos;s see if there&apos;s a fit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
