import type { StoryFrontmatter } from "@/lib/types";

interface StoryHeaderProps {
  frontmatter: StoryFrontmatter;
}

const voiceBadge: Record<string, string> = {
  storyteller: "bg-brand-gold text-brand-dark",
  wit: "bg-brand-teal text-white",
  confessional: "bg-brand-blue text-white",
  witness: "bg-brand-gray text-white",
};

export default function StoryHeader({ frontmatter }: StoryHeaderProps) {
  const badge = voiceBadge[frontmatter.voice] || voiceBadge.storyteller;

  return (
    <header className="mb-12">
      {/* Voice Tag */}
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${badge}`}
      >
        {frontmatter.voice}
      </span>

      {/* Title */}
      <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
        {frontmatter.title}
      </h1>

      {/* Metadata */}
      <div className="mt-4 flex items-center gap-3 font-mono text-xs text-brand-gray">
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span aria-hidden="true">·</span>
        <span>{frontmatter.readTime}</span>
        {frontmatter.author && (
          <>
            <span aria-hidden="true">·</span>
            <span>{frontmatter.author}</span>
          </>
        )}
      </div>

      <hr className="mt-8 border-brand-dark/10" />
    </header>
  );
}
