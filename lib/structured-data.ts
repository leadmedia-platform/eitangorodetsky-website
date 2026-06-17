import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";
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
    knowsAbout: [
      "AI-native operations",
      "Marketing operations",
      "Operational intelligence",
      "AI governance",
      "Margin recovery",
      "Organisational design",
      "iGaming",
      "Performance marketing",
    ],
    sameAs: [
      "https://linkedin.com/in/socialeitan",
      "https://twitter.com/eitangorodetsky",
      "https://instagram.com/eitangorodetsky",
      "https://eitangorodetsky.substack.com",
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

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  };
}

// ProfilePage for /about — lets LLMs resolve "Eitan Gorodetsky" as an entity.
export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: getPersonSchema(),
  };
}

export function getFAQPageSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

// One Service node per offering (with an Offer when a price is given).
export function getServiceSchema(
  services: { title: string; description: string; investment?: string }[]
) {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    areaServed: "Worldwide",
    ...(s.investment
      ? { offers: { "@type": "Offer", description: s.investment, priceCurrency: "AUD" } }
      : {}),
  }));
}
