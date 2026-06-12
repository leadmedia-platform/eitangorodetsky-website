import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getEssayBySlug, getEssaySlugs, getAllEssays } from "@/lib/essays";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import SchemaOrg from "@/components/global/SchemaOrg";
import { getEssayArticleSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import type { EssayFrontmatter } from "@/lib/types";

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};

  return {
    title: essay.frontmatter.title,
    description: essay.frontmatter.excerpt,
    openGraph: {
      title: `${essay.frontmatter.title} — Eitan Gorodetsky`,
      description: essay.frontmatter.excerpt,
      type: "article",
      publishedTime: essay.frontmatter.date,
      authors: [essay.frontmatter.author || "Eitan Gorodetsky"],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  const { content } = await compileMDX<EssayFrontmatter>({
    source: essay.content,
    components: mdxComponents,
  });

  const fm = essay.frontmatter;
  const allEssays = getAllEssays();
  const currentIndex = allEssays.findIndex((e) => e.slug === slug);
  const prevEssay =
    currentIndex < allEssays.length - 1 ? allEssays[currentIndex + 1] : null;
  const nextEssay = currentIndex > 0 ? allEssays[currentIndex - 1] : null;
  const eyebrow = [fm.pillar, fm.framework].filter(Boolean).join("  ·  ");

  return (
    <div className="pt-24 pb-16">
      <SchemaOrg data={getEssayArticleSchema(slug, fm)} />
      <SchemaOrg
        data={getBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Writing", url: `${SITE_URL}/writing` },
          { name: fm.title, url: `${SITE_URL}/writing/${slug}` },
        ])}
      />

      <article className="mx-auto max-w-[680px] px-6">
        <header className="mb-12">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-brand-dark md:text-4xl">
            {fm.title}
          </h1>
          {fm.dek && (
            <p className="mt-4 text-lg text-brand-gray">{fm.dek}</p>
          )}
          <p className="mt-5 text-sm text-brand-gray">
            {formatDate(fm.date)}
            {fm.readTime ? `  ·  ${fm.readTime} read` : ""}
          </p>
        </header>

        <div className="prose-stories prose prose-lg max-w-none">{content}</div>

        {/* Author box */}
        <div className="mt-16 rounded-xl bg-brand-card p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">
            Written by
          </p>
          <p className="mt-2 font-serif text-lg font-bold text-brand-dark">
            Eitan Gorodetsky
          </p>
          <p className="mt-1 text-sm text-brand-gray">
            I run Lead Media as an AI-native marketing operation, and write about
            what it takes to operate this way.{" "}
            <Link
              href="/about"
              className="text-brand-blue hover:underline underline-offset-4"
            >
              Full story →
            </Link>
          </p>
        </div>

        {/* Prev / next */}
        {(prevEssay || nextEssay) && (
          <nav className="mt-12 flex justify-between gap-6 border-t border-brand-dark/8 pt-8 text-sm">
            <div className="max-w-[45%]">
              {prevEssay && (
                <Link href={`/writing/${prevEssay.slug}`} className="group">
                  <span className="text-brand-gray">← Previous</span>
                  <span className="mt-1 block font-medium text-brand-dark group-hover:text-brand-blue">
                    {prevEssay.frontmatter.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="max-w-[45%] text-right">
              {nextEssay && (
                <Link href={`/writing/${nextEssay.slug}`} className="group">
                  <span className="text-brand-gray">Next →</span>
                  <span className="mt-1 block font-medium text-brand-dark group-hover:text-brand-blue">
                    {nextEssay.frontmatter.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>
    </div>
  );
}
