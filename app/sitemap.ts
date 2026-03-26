import type { MetadataRoute } from "next";
import { getStorySlugs } from "@/lib/stories";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // Core pages
    { url: SITE_URL,                                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/about`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/career`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/work-with-me`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Stories
    { url: `${SITE_URL}/stories`,                     lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },

    // Thinking section
    { url: `${SITE_URL}/thinking`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/thinking/oia`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/thinking/scu`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/thinking/ai`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Inner world section
    { url: `${SITE_URL}/inner-world`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/inner-world/sound-healing`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/inner-world/kabbalah`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/inner-world/freediving`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/inner-world/bodywork`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },

    // Utility
    { url: `${SITE_URL}/tools`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`,                     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/terms`,                       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

  const storySlugs = getStorySlugs();
  const storyPages: MetadataRoute.Sitemap = storySlugs.map((slug) => ({
    url: `${SITE_URL}/stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...storyPages];
}
