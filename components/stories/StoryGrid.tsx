import type { Story } from "@/lib/types";
import StoryCard from "./StoryCard";

interface StoryGridProps {
  stories: Story[];
}

export default function StoryGrid({ stories }: StoryGridProps) {
  if (stories.length === 0) {
    return (
      <p className="py-12 text-center text-lg text-text-secondary">
        No stories found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <StoryCard key={story.slug} story={story} />
      ))}
    </div>
  );
}
