import type { Metadata } from "next";
import Link from "next/link";
import { getAllEssays } from "@/lib/essays";
import Section from "@/components/shared/Section";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on building and operating an AI-native marketing business — frameworks, teardowns, and what actually moves the number, written for marketing leaders.",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function WritingPage() {
  const essays = getAllEssays();

  return (
    <div className="pt-20">
      <Section>
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal md:text-5xl">
            Writing
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Frameworks and field notes on running an AI-native marketing
            operation — for the people deciding where AI actually fits.
          </p>
        </div>

        <div className="mx-auto max-w-[760px] space-y-4">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className="group block rounded-xl border border-brand-dark/8 bg-brand-card p-6 transition-colors hover:border-brand-blue/40"
            >
              {(essay.frontmatter.pillar || essay.frontmatter.framework) && (
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  {[essay.frontmatter.pillar, essay.frontmatter.framework]
                    .filter(Boolean)
                    .join("  ·  ")}
                </p>
              )}
              <h2 className="mt-2 font-serif text-xl font-bold text-brand-dark group-hover:text-brand-blue md:text-2xl">
                {essay.frontmatter.title}
              </h2>
              <p className="mt-2 text-brand-gray">{essay.frontmatter.dek}</p>
              <p className="mt-4 text-sm text-brand-gray">
                {formatDate(essay.frontmatter.date)}
                {essay.frontmatter.readTime
                  ? `  ·  ${essay.frontmatter.readTime} read`
                  : ""}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
