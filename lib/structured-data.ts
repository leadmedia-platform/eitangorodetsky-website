import { SITE_URL, SITE_NAME } from "./constants";
import type { StoryFrontmatter } from "./types";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "Operations Intelligence Architect",
    description:
      "Helping companies find what's hidden and fix what's broken through operational intelligence.",
    url: SITE_URL,
    sameAs: [
      "https://linkedin.com/in/eitangorodetsky",
      "https://twitter.com/eitangorodetsky",
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Operations Intelligence Architecture — finding what dashboards hide.",
  };
}

export function getArticleSchema(
  slug: string,
  frontmatter: StoryFrontmatter
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    author: {
      "@type": "Person",
      name: frontmatter.author || SITE_NAME,
    },
    datePublished: frontmatter.date,
    url: `${SITE_URL}/stories/${slug}`,
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
