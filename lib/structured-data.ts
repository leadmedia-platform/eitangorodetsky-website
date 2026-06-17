import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";
import type { EssayFrontmatter } from "./types";

/** Stable entity ids so schemas reference one canonical Person/Org (not duplicates). */
export const PERSON_ID = `${SITE_URL}/#person`;
export const ORG_ID = `${SITE_URL}/#organization`;

const PERSON_SAME_AS = [
  "https://linkedin.com/in/socialeitan",
  "https://twitter.com/eitangorodetsky",
  "https://instagram.com/eitangorodetsky",
  "https://eitangorodetsky.substack.com",
];

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    jobTitle: "AI-native marketing operator",
    description:
      "AI-native marketing operator. Fifteen years from SEO specialist to C-level operator across iGaming, tech and digital — Head of SEO at Catena Media, Director of Acquisition & Digital Performance at Betsson Group, Chief Product Officer at Speed Media Group, Director of Performance Marketing at TonyBet — leading €100M+ budgets across 20+ regulated markets. Now builds and runs an AI-native operation and writes about what it takes.",
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "AI-native marketing operator",
        occupationLocation: { "@type": "Country", name: "Australia" },
      },
      { "@type": "Occupation", name: "Chief Product Officer" },
      { "@type": "Occupation", name: "Director of Performance Marketing" },
      { "@type": "Occupation", name: "Director of Acquisition & Digital Performance" },
      { "@type": "Occupation", name: "Head of SEO" },
    ],
    alumniOf: [
      { "@type": "Organization", name: "888 Holdings" },
      { "@type": "Organization", name: "Catena Media" },
      { "@type": "Organization", name: "Betsson Group" },
      { "@type": "Organization", name: "Speed Media Group" },
      { "@type": "Organization", name: "TonyBet" },
    ],
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "AI-native operations",
      "Marketing operations",
      "Operational intelligence",
      "AI governance",
      "Margin recovery",
      "Organisational design",
      "Generative AI in marketing",
      "Marketing technology",
      "Operations Intelligence Architecture",
      "AI-native maturity ladder",
      "The compounding test",
      "Autonomous ingestion, gated promotion",
      "iGaming",
      "Performance marketing",
    ],
    sameAs: PERSON_SAME_AS,
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
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "AI-native marketing operator — building businesses that run on AI, and writing about what it takes.",
    founder: { "@id": PERSON_ID },
    sameAs: PERSON_SAME_AS,
  };
}

export function getEssayArticleSchema(
  slug: string,
  frontmatter: EssayFrontmatter,
  wordCount?: number
) {
  const url = `${SITE_URL}/writing/${slug}`;
  const keywords = [frontmatter.framework, frontmatter.pillar].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    url,
    mainEntityOfPage: url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    ...(keywords.length ? { keywords } : {}),
    ...(frontmatter.pillar ? { articleSection: frontmatter.pillar } : {}),
    ...(wordCount ? { wordCount } : {}),
    ...(frontmatter.sources?.length
      ? {
          citation: frontmatter.sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.name,
            ...(s.url ? { url: s.url } : {}),
            ...(s.date ? { datePublished: s.date } : {}),
          })),
        }
      : {}),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
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
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": PERSON_ID },
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

export function getFAQPageSchema(items: { question: string; answer: string }[]) {
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
    provider: { "@id": PERSON_ID },
    areaServed: "Worldwide",
    ...(s.investment
      ? { offers: { "@type": "Offer", description: s.investment, priceCurrency: "AUD" } }
      : {}),
  }));
}

/**
 * Framework pages (OIA, SCU, AI) as named, citable concepts.
 * DefinedTerm + CreativeWork so frontier LLMs resolve the framework as an entity
 * authored by Eitan, not just page text.
 */
export function getFrameworkSchema(opts: {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  termCode?: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": `${url}#term`,
      name: opts.name,
      description: opts.description,
      url,
      ...(opts.termCode ? { termCode: opts.termCode } : {}),
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Eitan Gorodetsky — operating frameworks",
        url: `${SITE_URL}/thinking`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${url}#work`,
      name: opts.name,
      description: opts.description,
      url,
      author: { "@id": PERSON_ID },
      publisher: { "@id": ORG_ID },
      ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    },
  ];
}
