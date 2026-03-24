import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getStoryBySlug, getStorySlugs, getAllStories } from "@/lib/stories";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import StoryHeader from "@/components/stories/StoryHeader";
import StoryFooter from "@/components/stories/StoryFooter";
import StoryCard from "@/components/stories/StoryCard";
import SchemaOrg from "@/components/global/SchemaOrg";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import type { StoryFrontmatter } from "@/lib/types";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};

  return {
    title: story.frontmatter.title,
    description: story.frontmatter.excerpt,
    openGraph: {
      title: `${story.frontmatter.title} — Eitan Gorodetsky`,
      description: story.frontmatter.excerpt,
      type: "article",
      publishedTime: story.frontmatter.date,
      authors: [story.frontmatter.author || "Eitan Gorodetsky"],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const { content } = await compileMDX<StoryFrontmatter>({
    source: story.content,
    components: mdxComponents,
  });

  const allStories = getAllStories();
  const currentIndex = allStories.findIndex((s) => s.slug === slug);
  const prevStory = currentIndex < allStories.length - 1 ? allStories[currentIndex + 1] : null;
  const nextStory = currentIndex > 0 ? allStories[currentIndex - 1] : null;

  // Related: up to 3 other stories, same voice preferred
  const related = allStories
    .filter((s) => s.slug !== slug)
    .sort((a, b) => (a.frontmatter.voice === story.frontmatter.voice ? -1 : 1) - (b.frontmatter.voice === story.frontmatter.voice ? -1 : 1))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-16">
      <SchemaOrg data={getArticleSchema(slug, story.frontmatter)} />
      <SchemaOrg
        data={getBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Stories", url: `${SITE_URL}/stories` },
          { name: story.frontmatter.title, url: `${SITE_URL}/stories/${slug}` },
        ])}
      />

      {/* Story content */}
      <article className="mx-auto max-w-[680px] px-6">
        <StoryHeader frontmatter={story.frontmatter} />
        <div className="prose-stories prose prose-lg max-w-none">{content}</div>

        {/* Author box */}
        <div className="mt-16 rounded-xl bg-brand-card p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">Written by</p>
          <p className="mt-2 font-serif text-lg font-bold text-brand-dark">Eitan Gorodetsky</p>
          <p className="mt-1 text-sm text-brand-gray">
            Senior Marketing & Operations Executive. 15 years finding what dashboards hide.{" "}
            <Link href="/about" className="text-brand-blue hover:underline underline-offset-4">
              Full story →
            </Link>
          </p>
        </div>

        <StoryFooter prevStory={prevStory} nextStory={nextStory} />
      </article>

      {/* Related stories */}
      {related.length > 0 && (
        <section className="mt-20 border-t border-brand-dark/8 bg-brand-card py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mb-8 font-serif text-2xl font-bold text-brand-dark">
              More stories
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(135deg, #1B5E8C 0%, #2D8B6F 100%)" }}
      >
        <div className="mx-auto max-w-[560px] px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-white">
            Get the next story in your inbox
          </h2>
          <p className="mt-3 text-sm text-white/75">Once a week. Real insights. No spam.</p>
          <Link
            href="/#newsletter"
            className="mt-6 inline-block rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-white"
          >
            Subscribe
          </Link>
        </div>
      </section>
    </div>
  );
}
