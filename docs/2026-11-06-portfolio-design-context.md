# Portfolio design context

## Goal and constraints

Refresh both the written content and visual design of Daniel Alkurdi's personal portfolio. Give a visitor a clear account of Daniel's current role, public work, and reasons to explore the projects. Keep the site a small static Astro page. Do not invent employment history, client work, project metrics, testimonials, contact details, or personal interests.

The current site already communicates the basic role and two public projects. The refresh should make that information easier to scan and give the page a deliberate visual identity without adding a client framework or new application architecture.

## Architecture

`src/pages/index.astro` supplies the homepage copy and composes two project rows. `src/layouts/Base.astro` owns the shared header, footer, metadata, fonts, and theme behavior. `src/styles/global.css` owns all visual styling. There is no client framework. The only browser behavior is theme selection and persistence.

`src/data/projects.ts` defines typed `Project`, `ProjectLink`, and `MinorProject` records. `featuredProjects` filters out records marked `hidden`. Only Policai and Legal Skills currently pass that filter. Hidden projects are retained source content, not deleted content. Kitroom, CaseLaw Guard, and Harvey LAB must remain in the data file but must not appear in rendered homepage HTML. `moreProjects` contains Commodity and SHGPR UCF Figures, but nothing imports it. Both must remain absent from rendered HTML.

Themes are CSS variable sets on `data-theme`. The allowed values are `everforest`, `nord`, and `paper`. Everforest is the default, and Paper switches `color-scheme` to light. An inline head script reads `localStorage["portfolio-theme"]` before painting. A later script reveals the hidden select and saves changes. Storage failures leave the current theme working.

`index.astro` imports `featuredProjects` and maps each record to `src/components/ProjectRow.astro`. That component derives the visible number from array position, renders the title as plain text in an `h3` with separate destination links, joins stack entries with `·`, and renders status and links. The typed `year` field is not rendered. `src/components/SectionHead.astro` supplies numbered section headings. Hero and About copy remain directly in `index.astro`.

`Base.astro` receives `title`, `description`, and optional `ogType`. It generates canonical and Open Graph URLs from `Astro.site`, which `astro.config.mjs` sets to `https://l0cka.github.io`. The config also enables the sitemap integration. `src/pages/404.astro` reuses the same shell.

## Verification contracts

`npm test` runs `scripts/verify-content.mjs`, which checks source text. `npm run build` runs Astro type checking, the static build, and `scripts/verify-rendered.mjs`, which checks built HTML. CI runs these checks on every pull request and before deploying `dist` through GitHub Pages.

The content test requires exact identity, role, project, and status phrases. It also forbids stale names and claims. The rendered test also requires `dist/404.html` to render its `h1` and `main#main` with `noindex`. It requires exactly two `.project-row` elements, one `h1`, `main#main`, a working skip link, the Policai and Legal Skills URLs, and `noreferrer` on every `target="_blank"` link. Hidden projects and unused research links must not appear in rendered HTML.

Browser verification is manual and not part of CI. The implementation must also pass desktop and mobile browser inspection, all three theme checks, keyboard and theme-control interaction, browser console checks, and failed-request checks. The 404 page shares the shell and must remain usable. Playwright 1.65.0 and Chromium are installed on the host. A temporary server must run as a loopback-only `systemd-run --user --unit=sandbox-portfolio ...` service and be stopped afterward.

## Current facts

Daniel Alkurdi is a technology lawyer in Sydney. His current public role is Lawyer - Technology and Innovation in the Pro Bono + CSR team at Gilbert + Tobin. Do not describe client work or imply that personal projects are firm services.

Policai is a curated public register of Australian federal, state, and territory AI policy, regulation, court guidance, and developments. Every record links to an official source. The live site was checked on 6 November 2026. Do not add volatile record counts.

Legal Skills now documents one `legal-skills` plugin with 109 skills across 17 practice areas for Claude Cowork and ChatGPT Work. This replaces the outdated eleven-plugin, sixty-one-skill description. The public README was checked through GitHub on 10 November 2026. Preserve the existing emphasis on sources and human review.

Harvey LAB pull requests 132, 133, 134, and 135 remain open as of 6 November 2026. That project remains hidden. Kitroom, CaseLaw Guard, Commodity, and SHGPR UCF Figures retain their current documented status and visibility.

Public fact provenance lives in `docs/content-sources.md`. Update its review date and the Legal Skills evidence in the implementation change.

## Existing design

The current visual treatment uses centered pixel type, a monospace body, open project rows, and Everforest, Nord, and Paper palettes. The page has a header, hero, selected work, about section, and footer. Existing breakpoints are 1050px and 680px. The site has visible focus states, a skip link, reduced-motion handling, and large mobile link targets.

Some CSS selectors, including `.minor-item` and `.fine-print`, have no markup consumer. Remove dead styling owned by this refresh rather than treating it as a requirement to restore hidden sections.

## Baseline

On 6 November 2026, `npm test` passed and `npm run build` completed with zero Astro diagnostics. The rendered portfolio contract passed. The reusable Playwright check passed nine baseline scenarios, including theme persistence, keyboard navigation, reduced motion, contrast, and browser-error checks. The baseline desktop screenshot is `.audit/screenshots/baseline-desktop.png`; the check also captured every theme at desktop and mobile widths plus the 404 page.
