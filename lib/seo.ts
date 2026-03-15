import type { Metadata } from "next";

import { portfolioData } from "@/data/portfolio";
import type { Locale } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const seoCopy: Record<Locale, { title: string; description: string }> = {
  tr: {
    title: `${portfolioData.fullName} | Startup-Minded Software Engineer`,
    description:
      "Yusuf Emre Deniz'in backend odaklı yazılım projeleri, CRM çözümleri ve profesyonel portföy sitesi."
  },
  en: {
    title: `${portfolioData.fullName} | Startup-Minded Software Engineer`,
    description:
      "Professional portfolio of Yusuf Emre Deniz featuring backend-focused software projects and CRM solutions."
  }
};

export function buildMetadata(locale: Locale): Metadata {
  const copy = seoCopy[locale];
  const localePath = `/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: localePath,
      languages: {
        tr: "/tr",
        en: "/en"
      }
    },
    openGraph: {
      type: "website",
      title: copy.title,
      description: copy.description,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: localePath,
      siteName: portfolioData.fullName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: portfolioData.fullName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/opengraph-image"]
    },
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg"
    }
  };
}
