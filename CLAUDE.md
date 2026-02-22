# HireDeveloper.ae - Project Instructions

## Project Overview
Next.js 16.1.6 talent marketplace for hiring remote developers, designers, marketers in UAE/GCC.
Tech stack: React 19, TypeScript 5.9, Tailwind CSS 4, Nodemailer.

## Key Architecture
- **App Router** with route groups: `(companies)` for all hiring pages
- **i18n**: Custom React Context at `/app/i18n/` (EN/AR, localStorage-based)
- **Data files**: `/app/data/` (locations, team-members, developer/marketer subcategories, competitors, mega-menu)
- **Programmatic SEO**: Dynamic routes `/hire-developers/[slug]`, `/hire-marketers/[slug]`, `/locations/[country]`

## Important Files
- `/app/i18n/translations.ts` - All UI translations (170+ keys, EN/AR)
- `/app/data/developer-subcategories.ts` - 40+ developer roles with skills, bios
- `/app/data/marketer-subcategories.ts` - 25+ marketer specializations
- `/app/data/locations.ts` - UAE, Saudi, Qatar, Bahrain, Oman, Kuwait cities
- `/app/data/mega-menu.ts` - Navigation structure
- `/middleware.ts` - Basic auth (admin/password)

## Conventions
- Bilingual fields use `En`/`Ar` suffixes: `nameEn`, `nameAr`, `roleEn`, `roleAr`
- Components in `/app/components/` (global) and `/app/(companies)/components/` (company pages)
- Images in `/public/images/` organized by section
- Use Next.js `<Image>` component for all images
- Tailwind for all styling, no CSS modules

## SEO Rules
- Every page needs unique meta title (50-60 chars) and description (150-160 chars)
- Include "Dubai", "UAE", or city name in titles for local pages
- One H1 per page with primary keyword
- JSON-LD schema on all pages
- Internal linking: every page links to related pages (cocon semantique)

## Available Agents
- `translator-en` - English translation and copy quality
- `translator-ar` - Arabic translation and RTL
- `seo-auditor` - Technical SEO and cocon semantique audit
- `pseo-builder` - Programmatic SEO pages at scale
- `uae-localizer` - UAE imagery, local content, cultural adaptation

## Available Skills (from .claude/skills/)
- `programmatic-seo` - Building SEO pages at scale
- `seo-audit` - SEO health check and fixes
- `schema-markup` - JSON-LD structured data
- `content-strategy` - Content planning
- `copywriting` - Marketing copy
- `page-cro` - Page conversion optimization
- `competitor-alternatives` - Comparison pages
- `copy-editing` - Copy polish and review

## Dev Server
```bash
npm run dev  # Runs on port 3000 (or 3001 if occupied)
```
