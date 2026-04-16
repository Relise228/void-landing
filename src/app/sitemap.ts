import type { MetadataRoute } from "next";

const DOMAIN = "https://voidseries.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: DOMAIN,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/#features`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/#pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/#faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/#waitlist`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
