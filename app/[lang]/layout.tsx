import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { portfolioData } from "@/data/portfolio";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }
  return buildMetadata(lang);
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <div className="relative">
      <Navbar locale={lang} />
      {children}
      <Footer locale={lang} />
      <WhatsappFloat href={portfolioData.contact.whatsapp.href} label={portfolioData.contact.whatsapp.label} locale={lang} />
    </div>
  );
}
