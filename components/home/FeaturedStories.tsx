import { getAllStories } from "@/lib/stories";
import StoryGrid from "@/components/stories/StoryGrid";
import Section from "@/components/shared/Section";

export default function FeaturedStories() {
  const stories = getAllStories().slice(0, 3);

  return (
    <Section>
      <h2 className="mb-8 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
        Latest Stories
      </h2>
      <StoryGrid stories={stories} />
    </Section>
  );
}
