import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getStoryBySlug, getStorySlugs, getAllStories } from "@/lib/stories";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import StoryHeader from "@/components/stories/StoryHeader";
import StoryFooter from "@/components/stories/StoryFooter";
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

  // Get prev/next stories for navigation
  const allStories = getAllStories();
  const currentIndex = allStories.findIndex((s) => s.slug === slug);
  const prevStory = currentIndex < allStories.length - 1 ? allStories[currentIndex + 1] : null;
  const nextStory = currentIndex > 0 ? allStories[currentIndex - 1] : null;

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
      <article className="mx-auto max-w-[680px] px-6">
        <StoryHeader frontmatter={story.frontmatter} />
        <div className="prose-stories">{content}</div>
        <StoryFooter prevStory={prevStory} nextStory={nextStory} />
      </article>
    </div>
  );
}
