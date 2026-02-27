import Link from "next/link";
import type { Story } from "@/lib/types";
import { VOICE_COLORS } from "@/lib/constants";

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const { slug, frontmatter } = story;
  const voiceColor = VOICE_COLORS[frontmatter.voice] || VOICE_COLORS.storyteller;

  return (
    <Link
      href={`/stories/${slug}`}
      className="group block rounded-lg border-2 border-transparent bg-white p-6 transition-all hover:border-brand-amber hover:shadow-md"
    >
      {/* Voice Tag */}
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-medium capitalize ${voiceColor}`}
      >
        {frontmatter.voice}
      </span>

      {/* Title */}
      <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-brand-charcoal md:text-2xl">
        {frontmatter.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 line-clamp-2 text-base leading-relaxed text-text-secondary">
        {frontmatter.excerpt}
      </p>

      {/* Metadata */}
      <div className="mt-4 flex items-center gap-3 font-mono text-xs text-text-secondary">
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span aria-hidden="true">|</span>
        <span>{frontmatter.readTime}</span>
      </div>
    </Link>
  );
}
