import { t } from "@/lib/i18n";
import type { Locale, Project } from "@/lib/types";

import { Tag } from "@/components/ui/tag";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <article className="premium-card group relative overflow-hidden rounded-2xl p-6">
      <div className="pointer-events-none absolute -right-16 -top-14 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition duration-500 group-hover:bg-brand/20" />
      <h3 className="relative font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
        {project.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-300">{t(locale, project.description)}</p>
      <div className="relative mt-5 flex flex-wrap gap-2.5">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </article>
  );
}
