import type { StoryFrontmatter } from "@/lib/types";
import { VOICE_COLORS } from "@/lib/constants";

interface StoryHeaderProps {
  frontmatter: StoryFrontmatter;
}

export default function StoryHeader({ frontmatter }: StoryHeaderProps) {
  const voiceColor = VOICE_COLORS[frontmatter.voice] || VOICE_COLORS.storyteller;

  return (
    <header className="mb-12 text-center">
      {/* Voice Tag */}
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-medium capitalize ${voiceColor}`}
      >
        {frontmatter.voice}
      </span>

      {/* Title */}
      <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-brand-charcoal md:text-5xl">
        {frontmatter.title}
      </h1>

      {/* Metadata */}
      <div className="mt-4 flex items-center justify-center gap-3 font-mono text-xs text-text-secondary">
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span aria-hidden="true">|</span>
        <span>{frontmatter.readTime}</span>
        {frontmatter.author && (
          <>
            <span aria-hidden="true">|</span>
            <span>{frontmatter.author}</span>
          </>
        )}
      </div>
    </header>
  );
}
