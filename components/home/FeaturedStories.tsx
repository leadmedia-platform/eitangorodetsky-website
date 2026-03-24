import Link from "next/link";
import { getAllStories } from "@/lib/stories";
import StoryCard from "@/components/stories/StoryCard";

export default function FeaturedStories() {
  const stories = getAllStories().slice(0, 3);

  return (
    <section className="bg-brand-card py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
              Latest Stories
            </p>
            <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
              The stories nobody tells in meetings.
            </h2>
          </div>
          <Link
            href="/stories"
            className="hidden text-sm font-medium text-brand-blue underline-offset-4 hover:underline md:block"
          >
            All stories →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/stories"
            className="text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
          >
            View all stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
