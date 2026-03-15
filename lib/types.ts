export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedText = Record<Locale, string>;

export interface SkillItem {
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  technologies: string[];
  featured: boolean;
}

export interface ExperienceItem {
  company: string;
  role: LocalizedText;
  year: string;
  highlights: LocalizedText[];
}

export interface EducationItem {
  school: string;
  degree: LocalizedText;
  period: string;
}

export interface GithubProjectItem {
  id: string;
  name: string;
  description: LocalizedText;
  stars: number;
  language: string;
  url: string;
}

export interface ContactLink {
  label: LocalizedText;
  value: string;
  href: string;
}
