import { locales, type Locale } from "@/lib/types";

export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === "tr" ? "en" : "tr";
}

export function t(locale: Locale, copy: Record<Locale, string>): string {
  return copy[locale];
}
