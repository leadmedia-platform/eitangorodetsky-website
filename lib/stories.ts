import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Story, StoryWithContent, StoryFrontmatter } from "./types";

const STORIES_DIR = path.join(process.cwd(), "content", "stories");

export function getStorySlugs(): string[] {
  if (!fs.existsSync(STORIES_DIR)) return [];
  return fs
    .readdirSync(STORIES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllStories(): Story[] {
  const slugs = getStorySlugs();
  const stories = slugs.map((slug) => {
    const filePath = path.join(STORIES_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      frontmatter: data as StoryFrontmatter,
    };
  });

  return stories.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getStoryBySlug(slug: string): StoryWithContent | null {
  const filePath = path.join(STORIES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as StoryFrontmatter,
    content,
  };
}
