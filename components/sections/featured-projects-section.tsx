import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

interface FeaturedProjectsSectionProps {
  locale: Locale;
}

export function FeaturedProjectsSection({ locale }: FeaturedProjectsSectionProps) {
  const featuredProjects = portfolioData.projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            overline={locale === "tr" ? "Seçili İşler" : "Selected Work"}
            title={t(locale, portfolioData.sectionTitles.featuredProjects)}
            description={t(locale, portfolioData.sectionDescriptions.featuredProjects)}
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.06 * index}>
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
