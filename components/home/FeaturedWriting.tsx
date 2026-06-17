import Link from "next/link";
import { getAllEssays } from "@/lib/essays";

export default function FeaturedWriting() {
  const essays = getAllEssays().slice(0, 3);

  if (essays.length === 0) return null;

  return (
    <section className="bg-brand-card py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
              Latest Writing
            </p>
            <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
              Essays on running an AI-native operation.
            </h2>
          </div>
          <Link
            href="/writing"
            className="hidden text-sm font-medium text-brand-blue underline-offset-4 hover:underline md:block"
          >
            All writing →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className="group block rounded-xl border border-brand-dark/8 bg-white p-6 transition-colors hover:border-brand-blue/40"
            >
              {(essay.frontmatter.pillar || essay.frontmatter.framework) && (
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  {[essay.frontmatter.pillar, essay.frontmatter.framework]
                    .filter(Boolean)
                    .join("  ·  ")}
                </p>
              )}
              <h3 className="mt-2 font-serif text-lg font-bold text-brand-dark group-hover:text-brand-blue">
                {essay.frontmatter.title}
              </h3>
              <p className="mt-2 text-sm text-brand-gray">{essay.frontmatter.dek}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/writing"
            className="text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
          >
            View all writing →
          </Link>
        </div>
      </div>
    </section>
  );
}
