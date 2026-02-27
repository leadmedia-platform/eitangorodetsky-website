import Link from "next/link";
import type { Story } from "@/lib/types";

interface StoryFooterProps {
  prevStory: Story | null;
  nextStory: Story | null;
}

export default function StoryFooter({ prevStory, nextStory }: StoryFooterProps) {
  return (
    <footer className="mt-16 border-t border-brand-charcoal/10 pt-8">
      {/* Author Bio */}
      <div className="mb-8 text-center">
        <p className="text-sm leading-relaxed text-text-secondary">
          Written by{" "}
          <Link
            href="/about"
            className="font-medium text-brand-amber hover:text-brand-terracotta"
          >
            Eitan Gorodetsky
          </Link>{" "}
          — Operations Intelligence Architect. 15 years inside the machine,
          telling the stories nobody tells in meetings.
        </p>
      </div>

      {/* Previous / Next Navigation */}
      <div className="flex items-stretch justify-between gap-4">
        {prevStory ? (
          <Link
            href={`/stories/${prevStory.slug}`}
            className="group flex-1 rounded-lg border border-brand-charcoal/10 p-4 transition-colors hover:border-brand-amber"
          >
            <span className="font-mono text-xs text-text-secondary">
              Previous
            </span>
            <p className="mt-1 font-serif text-sm font-bold text-brand-charcoal group-hover:text-brand-amber">
              {prevStory.frontmatter.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextStory ? (
          <Link
            href={`/stories/${nextStory.slug}`}
            className="group flex-1 rounded-lg border border-brand-charcoal/10 p-4 text-right transition-colors hover:border-brand-amber"
          >
            <span className="font-mono text-xs text-text-secondary">
              Next
            </span>
            <p className="mt-1 font-serif text-sm font-bold text-brand-charcoal group-hover:text-brand-amber">
              {nextStory.frontmatter.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </footer>
  );
}
