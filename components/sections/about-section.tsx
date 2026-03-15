import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface AboutSectionProps {
  locale: Locale;
}

export function AboutSection({ locale }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="section-shell rounded-3xl p-6 sm:p-8 lg:p-10">
            <SectionHeading
              title={t(locale, portfolioData.sectionTitles.about)}
              overline={locale === "tr" ? "Profil" : "Profile"}
            />
            <div className="grid gap-5 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-7">
              {portfolioData.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.tr}>{t(locale, paragraph)}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
