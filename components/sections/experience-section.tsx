import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface ExperienceSectionProps {
  locale: Locale;
}

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            overline={locale === "tr" ? "Kariyer Adımları" : "Career Path"}
            title={t(locale, portfolioData.sectionTitles.experience)}
            description={t(locale, portfolioData.sectionDescriptions.experience)}
          />
        </Reveal>

        <div className="relative space-y-5">
          <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand/45 via-white/20 to-transparent sm:block" />
          {portfolioData.experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.year}`} delay={index * 0.06}>
              <article className="premium-card relative rounded-2xl p-5 sm:pl-10 sm:pr-6">
                <span className="absolute left-2 top-8 hidden h-2.5 w-2.5 rounded-full bg-brand sm:block" />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-brand-soft">{t(locale, item.role)}</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-300">
                    {item.year}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.tr} className="flex items-start gap-2">
                      <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-brand/80" />
                      <span>{t(locale, highlight)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
