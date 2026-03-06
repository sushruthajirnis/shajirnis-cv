# sushruthajirnis.com

Personal portfolio and resume site for Sushrut Hajirnis — Senior Site Reliability Engineer at Intuit.

**Live:** [sushruthajirnis.com](https://sushruthajirnis.com)

## Stack

- [Next.js 14](https://nextjs.org/) — static export
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — slate + violet theme, dark/light adaptive
- [Framer Motion](https://www.framer.com/motion/) — scroll animations
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Inter + JetBrains Mono
- Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions

## Development

```bash
# Install dependencies (Node 20+ required)
yarn install --ignore-engines

# Start dev server
yarn dev        # http://localhost:3000

# Type check
yarn compile

# Production build
yarn build
```

## Content

All site content lives in a single file: [`src/data/data.tsx`](src/data/data.tsx)

Update that file to change bio, experience, skills, education, contact links, and social profiles.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml).
