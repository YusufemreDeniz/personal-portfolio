"use client";

import Link from "next/link";

import { getOppositeLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const opposite = getOppositeLocale(locale);

  return (
    <Link
      href={`/${opposite}`}
      className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 transition hover:border-brand/60 hover:bg-brand/10 hover:text-brand-soft"
      aria-label={locale === "tr" ? "Switch to English" : "Türkçeye geç"}
    >
      {opposite.toUpperCase()}
    </Link>
  );
}
