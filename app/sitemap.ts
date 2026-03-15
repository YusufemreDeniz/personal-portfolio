import type { MetadataRoute } from "next";

import { locales } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    alternates: {
      languages: {
        tr: `${siteUrl}/tr`,
        en: `${siteUrl}/en`
      }
    }
  }));
}
