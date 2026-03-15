import { notFound } from "next/navigation";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { GithubProjectsSection } from "@/components/sections/github-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OtherProjectsSection } from "@/components/sections/other-projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { isLocale } from "@/lib/i18n";
import { locales } from "@/lib/types";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function PortfolioPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <main>
      <HeroSection locale={lang} />
      <AboutSection locale={lang} />
      <SkillsSection locale={lang} />
      <FeaturedProjectsSection locale={lang} />
      <OtherProjectsSection locale={lang} />
      <ExperienceSection locale={lang} />
      <EducationSection locale={lang} />
      <GithubProjectsSection locale={lang} />
      <ContactSection locale={lang} />
    </main>
  );
}
