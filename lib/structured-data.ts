import { SITE_URL, SITE_NAME } from "./constants";
import type { StoryFrontmatter, EssayFrontmatter } from "./types";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "Senior Marketing & Operations Executive",
    description:
      "15+ years building growth engines, leading people, and finding what's hidden across iGaming, Tech & Digital.",
    url: SITE_URL,
    sameAs: [
      "https://linkedin.com/in/socialeitan",
      "https://twitter.com/eitangorodetsky",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Central Coast",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Senior Marketing & Operations Leader — building growth systems, leading people, finding what's hidden.",
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

export function getEssayArticleSchema(
  slug: string,
  frontmatter: EssayFrontmatter
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    author: {
      "@type": "Person",
      name: frontmatter.author || SITE_NAME,
      url: SITE_URL,
      sameAs: [
        "https://linkedin.com/in/socialeitan",
        "https://twitter.com/eitangorodetsky",
      ],
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
    },
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    url: `${SITE_URL}/writing/${slug}`,
    mainEntityOfPage: `${SITE_URL}/writing/${slug}`,
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
