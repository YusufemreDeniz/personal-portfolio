"use client";

import { motion } from "framer-motion";

import type { Locale } from "@/lib/types";

interface WhatsappFloatProps {
  href: string;
  label: Record<Locale, string>;
  locale: Locale;
}

export function WhatsappFloat({ href, label, locale }: WhatsappFloatProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label[locale]}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-brand/45 bg-[#08131b]/90 px-4 py-3 text-sm font-semibold text-brand-soft shadow-soft-glow backdrop-blur-xl sm:bottom-5 sm:right-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand" />
      WhatsApp
    </motion.a>
  );
}
