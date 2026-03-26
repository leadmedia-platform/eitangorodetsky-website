import type { Metadata } from "next";
import { getAllStories } from "@/lib/stories";
import StoriesArchive from "@/components/stories/StoriesArchive";
import Section from "@/components/shared/Section";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Honest field notes from 15 years inside iGaming, Tech & Digital. Operations, margin recovery, leadership, and what dashboards hide.",
};

export default function StoriesPage() {
  const stories = getAllStories();

  return (
    <div className="pt-20">
      <Section>
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal md:text-5xl">
            Stories
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            The stories nobody tells in meetings.
          </p>
        </div>
        <StoriesArchive stories={stories} />
      </Section>
    </div>
  );
}
