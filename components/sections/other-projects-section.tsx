import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

interface OtherProjectsSectionProps {
  locale: Locale;
}

export function OtherProjectsSection({ locale }: OtherProjectsSectionProps) {
  const otherProjects = portfolioData.projects.filter((project) => !project.featured);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            overline={locale === "tr" ? "Ek Çalışmalar" : "More Work"}
            title={t(locale, portfolioData.sectionTitles.otherProjects)}
            description={t(locale, portfolioData.sectionDescriptions.otherProjects)}
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.04 * index}>
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
