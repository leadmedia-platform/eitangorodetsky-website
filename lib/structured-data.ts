import { SITE_URL, SITE_NAME } from "./constants";
import type { EssayFrontmatter } from "./types";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "AI-native marketing operator",
    description:
      "Builds and runs an AI-native marketing operation and writes about what it takes — memory, integration, codified workflows, governance. 15+ years across iGaming, tech, and digital.",
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
      "AI-native marketing operator — building businesses that run on AI, and writing about what it takes.",
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
