import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Essay, EssayWithContent, EssayFrontmatter } from "./types";

const ESSAYS_DIR = path.join(process.cwd(), "content", "essays");

export function getEssaySlugs(): string[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  return fs
    .readdirSync(ESSAYS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllEssays(): Essay[] {
  const slugs = getEssaySlugs();
  const essays = slugs.map((slug) => {
    const filePath = path.join(ESSAYS_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      frontmatter: data as EssayFrontmatter,
    };
  });

  return essays.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getEssayBySlug(slug: string): EssayWithContent | null {
  const filePath = path.join(ESSAYS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as EssayFrontmatter,
    content,
  };
}
