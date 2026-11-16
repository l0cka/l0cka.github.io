# l0cka.github.io

Daniel's public portfolio, built with Astro. The site content is public, so
nothing private (client or matter names, host names, personal paths, email
addresses) goes into it.

## Layout

- `src/data/projects.ts` holds the work showcase.
- `src/pages/index.astro` is the single page.
- `src/styles/global.css` holds the design tokens and styling.

## Checks

Run `npm install` once per worktree, then `npm test` and `npm run build`.
The build runs `astro check`, the Astro build and the rendered-HTML contract
in `scripts/verify-rendered.mjs`. For a visual change, run `npm run dev` and
inspect a rendered screenshot.

## Delivery

A push to `main` deploys the site through `.github/workflows/pages.yml`, so
work goes on a branch and a pull request. Commit and push as `l0cka-bot`
with `bot-git` and `bot-gh`. Daniel merges.
