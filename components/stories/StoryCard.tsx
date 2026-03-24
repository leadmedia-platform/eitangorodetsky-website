import Link from "next/link";
import type { Story } from "@/lib/types";

interface StoryCardProps {
  story: Story;
}

const voiceBadge: Record<string, string> = {
  storyteller: "bg-brand-gold text-brand-dark",
  wit: "bg-brand-teal text-white",
  confessional: "bg-brand-blue text-white",
  witness: "bg-brand-gray text-white",
};

export default function StoryCard({ story }: StoryCardProps) {
  const { slug, frontmatter } = story;
  const badge = voiceBadge[frontmatter.voice] || voiceBadge.storyteller;

  return (
    <Link
      href={`/stories/${slug}`}
      className="group flex flex-col rounded-xl bg-white p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Voice Tag */}
      <span
        className={`self-start inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${badge}`}
      >
        {frontmatter.voice}
      </span>

      {/* Title */}
      <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-brand-dark group-hover:text-brand-blue transition-colors">
        {frontmatter.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-brand-gray">
        {frontmatter.excerpt}
      </p>

      {/* Metadata */}
      <div className="mt-5 flex items-center gap-3 font-mono text-xs text-brand-gray/70">
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span aria-hidden="true">·</span>
        <span>{frontmatter.readTime}</span>
      </div>
    </Link>
  );
}
