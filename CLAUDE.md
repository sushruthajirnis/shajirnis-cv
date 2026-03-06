# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # TypeScript compile + start Next.js dev server
yarn build      # TypeScript compile + Next.js static export (output: ./out)
yarn lint       # Prettier write + ESLint fix (max-warnings=0)
yarn compile    # TypeScript type-check only
yarn clean      # Remove build-tsc and .next directories
```

No test suite exists in this project.

## Architecture

This is a **personal CV/resume site** built with Next.js 14 (static export), TypeScript, Tailwind CSS, and SCSS. It deploys automatically to GitHub Pages on push to `main`.

### Data Layer

All site content lives in **`src/data/data.tsx`** — this is the single file to edit for any content changes (bio, skills, experience, education, portfolio, testimonials, contact info, social links). TypeScript interfaces for all data shapes are defined in **`src/data/dataDef.ts`**.

### Page Structure

`src/pages/index.tsx` is the only page. It composes sections in order: `Header → Hero → About → Resume → Footer`. The `Header` is dynamically imported with `ssr: false` (scroll-based nav observer). Sections removed from the current page: Portfolio, Testimonials, Contact — components still exist in `src/components/Sections/` but are unused.

### Styling

- **Tailwind CSS** for utility classes (configured in `tailwind.config.js`)
- **SCSS** for global styles (`src/globalStyles.scss`)
- **`stylelint`** enforces CSS/SCSS style (config in `stylelint.config.js`)
- Prettier with `prettier-plugin-tailwindcss` auto-sorts Tailwind classes on lint

### Static Export

`next.config.js` sets `output: 'export'` and `images: {unoptimized: true}`. The built site lands in `./out/` and is served from GitHub Pages. There is no SSR.

### Images

Place images in `src/images/`. They are imported as Next.js `StaticImageData` objects and referenced in `data.tsx`. Portfolio images go in `src/images/portfolio/`. A resume PDF can be placed at `public/resume.pdf` and linked via `heroData.actions[0].href`.

### Adding/Removing Sections

To restore removed sections (Portfolio, Testimonials, Contact), import them in `src/pages/index.tsx` and add the corresponding data exports from `src/data/data.tsx`. The components and data definitions are already complete.
