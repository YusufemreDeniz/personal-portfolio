import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface EducationSectionProps {
  locale: Locale;
}

export function EducationSection({ locale }: EducationSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            overline={locale === "tr" ? "Akademik Geçmiş" : "Education"}
            title={t(locale, portfolioData.sectionTitles.education)}
          />
        </Reveal>
        <div className="grid gap-5">
          {portfolioData.education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.05}>
              <article className="premium-card rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{item.school}</h3>
                    <p className="mt-1 text-sm text-slate-300">{t(locale, item.degree)}</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-300">
                    {item.period}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
