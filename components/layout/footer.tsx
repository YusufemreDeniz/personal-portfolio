import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02] py-12">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.16em] text-white">
            {portfolioData.fullName}
          </p>
          <p className="mt-1.5 text-sm text-slate-400">{t(locale, portfolioData.title)}</p>
        </div>
        <p className="text-xs text-slate-500">
          {locale === "tr"
            ? `© ${new Date().getFullYear()} Tüm hakları saklıdır.`
            : `© ${new Date().getFullYear()} All rights reserved.`}
        </p>
      </Container>
    </footer>
  );
}
