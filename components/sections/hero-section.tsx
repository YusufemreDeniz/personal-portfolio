import Image from "next/image";
import Link from "next/link";

import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="section-shell relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-radial-noise opacity-95" />
          <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <Reveal>
              <div>
                <Tag>{t(locale, portfolioData.availability)}</Tag>
                <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {portfolioData.fullName}
                </h1>
                <p className="mt-4 text-base font-semibold uppercase tracking-[0.12em] text-brand-soft sm:text-lg">
                  {t(locale, portfolioData.title)}
                </p>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base sm:leading-7">
                  {t(locale, portfolioData.shortProfile)}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3.5">
                  {portfolioData.heroCtas.map((cta, index) => (
                    <Link
                      key={cta.href}
                      href={`/${locale}${cta.href}`}
                      className={index === 0 ? "button-primary" : "button-secondary"}
                    >
                      {t(locale, cta.label)}
                    </Link>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-2.5 text-xs text-slate-300 sm:text-sm">
                  <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5">
                    {locale === "tr" ? "Backend odaklı ürün geliştirme" : "Backend-focused product engineering"}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5">
                    {locale === "tr" ? "CRM ve ticari yazılım uzmanlığı" : "CRM and commercial software expertise"}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="premium-card mx-auto w-full max-w-sm rounded-3xl p-5 sm:p-6">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent">
                  <Image
                    src="/profile-placeholder.svg"
                    alt={t(locale, portfolioData.profilePhotoAlt)}
                    width={560}
                    height={560}
                    className="h-auto w-full scale-[1.01]"
                    priority
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-300">{t(locale, portfolioData.location)}</span>
                  <span className="rounded-full border border-brand/45 bg-brand/15 px-3 py-1 text-xs font-semibold text-brand-soft">
                    {portfolioData.languages.join(" / ")}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
