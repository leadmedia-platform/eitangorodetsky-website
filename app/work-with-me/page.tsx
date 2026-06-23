import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/work/FAQ";
import SchemaOrg from "@/components/global/SchemaOrg";
import { getFAQPageSchema, getServiceSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "How I work with founders and operators on AI-native operations — no packages off a shelf. Reach out and we figure out the fit together.",
  alternates: { canonical: "/work-with-me" },
  openGraph: { title: "Work With Me — Eitan Gorodetsky", url: "/work-with-me", type: "website" },
};

// Kinds of work — described, never priced. Schema carries no Offer.
const areas = [
  {
    title: "AI-native operations",
    description:
      "Designing and running a business that actually runs on AI — persistent memory, real integrations, codified workflows, and autonomy you can trust. The thing I do every day, applied to yours.",
  },
  {
    title: "Operational intelligence & margin",
    description:
      "Finding what's hidden and fixing what's broken — the costs, friction, and decision lag that quietly compound. Structured discovery, then the changes that actually move a number.",
  },
  {
    title: "Advisory, talks & workshops",
    description:
      "Board talks and team sessions on AI in operations, governance that speeds you up, and operating models that ship. Previous venues include SIGMA and MARE BALTICUM Gaming Summit.",
  },
];

const faqs = [
  {
    question: "Do you have fixed packages?",
    answer:
      "No. Every engagement is shaped to the problem. Tell me what you're wrestling with and we'll figure out the right way to work together — scope, shape, and pace.",
  },
  {
    question: "How does it start?",
    answer:
      "A conversation. No forms to fill or pitch deck to sit through — just reach out and we'll talk about what's actually going on. If there's a fit, we'll shape it from there.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Founders and operators who want their business to genuinely run on AI, and leaders who'd rather build the thing than just talk about it.",
  },
  {
    question: "Remote or on-site?",
    answer:
      "Mostly remote — data, calls, and working sessions. On-site when it earns its place.",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="pt-20">
      <SchemaOrg data={getFAQPageSchema(faqs)} />
      {getServiceSchema(areas).map((s, i) => (
        <SchemaOrg key={`svc-${i}`} data={s} />
      ))}

      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Work with me
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Let&apos;s figure it out together
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-white/80">
            I work for myself, running my own AI-native operation — and take on a small
            amount of outside work alongside it. I don&apos;t sell packages off a shelf. The
            work is shaped to the problem — so the best place to start isn&apos;t a price
            list, it&apos;s a conversation. If something here resonates, reach out and
            we&apos;ll work out the fit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-gold hover:text-brand-dark"
          >
            Reach out
          </Link>
        </div>
      </section>

      {/* Where I help */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            Where I help
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            The kinds of problems I work on
          </h2>
          <p className="mb-14 max-w-[620px] text-brand-gray">
            Not a menu to order from — a sense of where I tend to be useful. Most real work
            starts somewhere in here and gets shaped from there.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-brand-dark/8 bg-brand-card p-8"
              >
                <h3 className="font-serif text-xl font-bold text-brand-dark">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-card py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-12 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            A few honest answers
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
            The best way to find out is to talk
          </h2>
          <p className="mt-4 text-brand-gray">
            Tell me what you&apos;re working on. We&apos;ll figure out if — and how — I can help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
          >
            Reach out
          </Link>
        </div>
      </section>
    </div>
  );
}
