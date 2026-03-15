import Link from "next/link";

import { portfolioData } from "@/data/portfolio";
import { githubRepository } from "@/lib/github";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

interface GithubProjectsSectionProps {
  locale: Locale;
}

export async function GithubProjectsSection({ locale }: GithubProjectsSectionProps) {
  const projects = await githubRepository.listPinnedProjects();

  return (
    <section id="github" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            overline="GitHub"
            title={t(locale, portfolioData.githubSection.title)}
            description={t(locale, portfolioData.githubSection.description)}
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="premium-card group relative overflow-hidden rounded-2xl p-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent/15 blur-3xl" />
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white sm:text-lg">{project.name}</h3>
                  <Tag>★ {project.stars}</Tag>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{t(locale, project.description)}</p>
                <div className="mt-5 flex items-center justify-between">
                  <Tag>{project.language}</Tag>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-accent transition hover:text-white"
                  >
                    {locale === "tr" ? "Depoya Git" : "Open Repo"}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
