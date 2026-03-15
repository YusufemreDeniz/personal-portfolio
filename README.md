# Yusuf Emre Deniz | Personal Portfolio

<p align="center">
  Premium, bilingual (TR/EN), dark-theme personal portfolio website built with modern SaaS-grade UI principles.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-UI_Animation-0E1016?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/App_Router-Enabled-111827?style=flat-square" alt="App Router" />
  <img src="https://img.shields.io/badge/i18n-TR%20%2F%20EN-10B981?style=flat-square" alt="i18n" />
</p>

---

## Overview

This project is a production-ready portfolio website designed to present software projects, professional background, and contact channels with a high-trust visual style.

The experience targets modern product quality close to top-tier SaaS landing pages, with strong focus on:

- Visual refinement
- Mobile-first responsiveness
- Fast load and clean component architecture
- Centralized content management for easy updates

---

## Key Features

- Bilingual content architecture (`/tr` and `/en`)
- Premium dark UI with controlled gradients and polished contrast
- Smooth and subtle scroll-reveal animations
- Structured sections:
  - Hero
  - About
  - Skills
  - Featured Projects
  - Other Projects
  - Experience
  - Education
  - GitHub Projects (mock-ready API architecture)
  - Contact
- Floating WhatsApp CTA (placeholder-ready)
- SEO-ready metadata, Open Graph image, `robots`, and `sitemap`

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

---

## Project Structure

```txt
app/                # Routing, layouts, metadata, OG image, SEO files
components/         # Reusable UI + section components
data/portfolio.ts   # Centralized bilingual content and portfolio data
lib/                # i18n helpers, SEO builder, GitHub repository layer
public/             # Static assets (icon + profile placeholder)
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Production commands:

```bash
npm run build
npm run start
npm run lint
```

---

## Content Customization

Main content is managed from:

- `data/portfolio.ts` (texts, projects, experience, contact, GitHub mocks)

Important extension points:

- `lib/github.ts` for real GitHub API integration
- `lib/seo.ts` for metadata and social sharing config
- `NEXT_PUBLIC_SITE_URL` for canonical URLs and sitemap domain

---

## Deployment

The project is ready to deploy on platforms like Vercel.

Recommended environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Notes

- Contact links are intentionally placeholder-based.
- Profile image can be replaced from `public/profile-placeholder.svg`.
- No admin panel is included by design.
