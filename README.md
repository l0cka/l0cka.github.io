# Daniel Alkurdi — portfolio

Personal portfolio for [https://l0cka.github.io](https://l0cka.github.io). It presents Daniel's public legal-technology, AI and open-source work. The site is built with Astro.

## Structure

- `src/data/projects.ts` — the work showcase
- `src/pages/index.astro` — the single page
- `src/styles/global.css` — design tokens and styling

## Local development

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` builds and deploys via GitHub Actions (`.github/workflows/pages.yml`).

```bash
npm run build   # astro check + astro build → dist/
```
