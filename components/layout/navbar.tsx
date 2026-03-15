"use client";

import Link from "next/link";
import { useState } from "react";

import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

interface NavbarProps {
  locale: Locale;
}

export function Navbar({ locale }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const actionLabel = locale === "tr" ? "İletişim" : "Contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a0f]/80 backdrop-blur-2xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href={`/${locale}`}
            className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.24em] text-white transition hover:text-brand-soft"
          >
            YED
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-md border border-white/20 bg-white/5 p-2 text-slate-200 lg:hidden"
            aria-label={locale === "tr" ? "Menüyü aç" : "Open menu"}
          >
            <span className="block h-0.5 w-4 bg-current" />
            <span className="mt-1.5 block h-0.5 w-4 bg-current" />
          </button>

          <div className="hidden items-center gap-3 xl:gap-5 lg:flex">
            {portfolioData.navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="rounded-full px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {t(locale, item.label)}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
            <Link
              href={`/${locale}#contact`}
              className="button-primary px-4 py-2 text-sm"
            >
              {actionLabel}
            </Link>
          </div>
        </nav>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-[#0b121b]/95 px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {portfolioData.navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="rounded-lg border border-transparent px-3 py-2 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {t(locale, item.label)}
              </Link>
            ))}
            <div className="mt-1 flex items-center justify-between">
              <LanguageSwitcher locale={locale} />
              <Link
                href={`/${locale}#contact`}
                className="button-primary px-4 py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                {actionLabel}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
