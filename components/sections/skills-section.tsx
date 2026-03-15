import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

interface SkillsSectionProps {
  locale: Locale;
}

export function SkillsSection({ locale }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="section-shell rounded-3xl p-6 sm:p-8 lg:p-10">
            <SectionHeading
              overline={locale === "tr" ? "Uzmanlık" : "Expertise"}
              title={t(locale, portfolioData.sectionTitles.skills)}
              description={t(locale, portfolioData.sectionDescriptions.skills)}
            />
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
