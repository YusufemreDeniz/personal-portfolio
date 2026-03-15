import Link from "next/link";

import { portfolioData } from "@/data/portfolio";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface ContactSectionProps {
  locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="section-shell relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
            <div className="pointer-events-none absolute -left-14 top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <SectionHeading
              overline={locale === "tr" ? "İletişim Kanalları" : "Contact Channels"}
              title={t(locale, portfolioData.sectionTitles.contact)}
              description={t(locale, portfolioData.sectionDescriptions.contact)}
            />
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {t(locale, portfolioData.contact.heading)}
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              {t(locale, portfolioData.contact.description)}
            </p>

            <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {portfolioData.contact.links.map((link) => (
                <Link
                  key={link.label.tr}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="premium-card rounded-xl p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {t(locale, link.label)}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white sm:text-[15px]">{link.value}</p>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
