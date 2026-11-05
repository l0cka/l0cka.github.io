# Portfolio editorial register

## Goal

Refresh Daniel Alkurdi's portfolio so a visitor can identify his current role, understand Policai and Legal Skills, and follow a direct project link. Keep the existing static Astro architecture and three themes. Use only the public facts recorded in `docs/2026-11-06-portfolio-design-context.md` and `docs/content-sources.md`.

## Usage from the caller's view

A maintainer edits biography copy in `src/pages/index.astro` and project facts in `src/data/projects.ts`. The homepage reads `featuredProjects` once and passes each visible record to `ProjectRow`. It does not import the hidden project array or `moreProjects`.

`Base` still accepts `title`, `description`, and optional `ogType`. It owns metadata, local fonts, the shared header and footer, navigation, and theme behavior. The 404 page uses the same shell.

The homepage has one `h1`, a role-first opening section, two project articles, and an About section. It has no client-side content state, filtering, routing, or project imagery.

## Shape and ownership

Keep the existing project model with these narrow changes:

```ts
type ProjectLink = Readonly<{
  label: string
  href: string
}>

type Project = Readonly<{
  name: string
  tagline: string
  description: string
  stack: readonly [string, ...string[]]
  year: string
  status: "Live" | "Open source" | "Released · archived" | "Early development" | "Upstream contributions"
  links: readonly [ProjectLink, ...ProjectLink[]]
  hidden?: true
}>

type ProjectRowProps = {
  project: Project
  index: number
}
```

The nonempty `links` tuple makes the current optional-link branch unnecessary. The literal `hidden` type retains the two meaningful states without adding `hidden: false`. Keep every current project record, including `year`, but do not render `year` because its meaning is not established as a launch or release date.

`featuredProjects` remains the only visibility derivation. Kitroom, CaseLaw Guard, and Harvey LAB stay in the source array with `hidden: true`. Commodity and SHGPR UCF Figures stay in `moreProjects`. None of those names or URLs may appear in `dist/index.html`.

`Base.astro` owns one ordered theme registry containing `everforest`, `nord`, and `paper`. Derive both the native select options and the values accepted by the before-paint storage script from that registry. Do not maintain separate copies of the theme list. Everforest remains the fallback. Paper uses `color-scheme: light`; the other themes use dark.

The module ownership stays as follows:

- `src/pages/index.astro` owns homepage metadata, hero copy, exact role copy, About copy, and section composition.
- `src/data/projects.ts` owns all project records, project types, and visibility.
- `src/components/ProjectRow.astro` owns one labelled project article, its decorative ordinal, explicit destination links, stack, and status. Project titles are plain text, so the first destination does not appear twice in keyboard order.
- `src/components/SectionHead.astro` keeps its current props and numbered section-heading markup.
- `src/layouts/Base.astro` owns the shared shell, font imports, metadata, theme registry, and theme scripts.
- `src/styles/global.css` owns all visual rules, including the 404 layout. Remove the unused `.minor-item` and `.fine-print` rules, old pixel-type rules, and superseded hero rules.
- `src/pages/404.astro` keeps one `h1` and its Back home action. Replace its inline style with the shared not-found classes.
- `scripts/verify-content.mjs` owns source-content and hidden-record contracts.
- `scripts/verify-rendered.mjs` owns built-HTML structure, visibility, current-fact, destination, and link-safety contracts.
- `docs/content-sources.md` records the 6 November 2026 public-fact review.

Do not add a profile model, component, source module, client script file, route, or framework. Replace `@fontsource-variable/pixelify-sans` with `@fontsource-variable/newsreader` in the manifest, lockfile, and `Base.astro`. Keep JetBrains Mono Variable.

Move useful rationale from comments in every edited file into this document or `docs/content-sources.md`. New and edited code contains no comments.

## Content contract

Use this homepage metadata:

- Title: `Daniel Alkurdi | Technology lawyer and software builder`
- Description: `Daniel Alkurdi is a technology lawyer in Sydney. Explore Policai and Legal Skills, his personal projects for public AI policy and legal work.`

The opening section contains the following content in this order:

- Eyebrow: `Sydney, Australia`
- `h1`: `Daniel Alkurdi`
- Statement: `Technology lawyer working in pro bono. I build open-source tools for legal work and public AI policy.`
- Role label: `Current role`
- Role: `Lawyer - Technology and Innovation`
- Team: `Pro Bono + CSR team at Gilbert + Tobin`
- Primary anchor: `Explore selected work`, targeting `#work`
- Secondary external link: `GitHub profile`

The role note sits beside the statement on wide screens and directly after it on mobile. The opening section identifies Daniel, his role, and the page's two subject areas before the visitor scrolls.

Use `Selected work` as the first section title and `Personal open-source projects` as its introduction.

Policai keeps `Live`, its existing stack, and both existing URLs. Use this copy:

- Tagline: `Australian AI policy and court guidance, with official sources.`
- Description: `A curated public register covering federal, state and territory AI policy, regulation, court guidance and developments. Every record links to an official source.`
- Link labels: `Visit the register` and `View source`

Legal Skills keeps `Open source`, `2026` in source only, and its existing source URL. Use this copy:

- Tagline: `Legal workflows for Claude Cowork and ChatGPT Work.`
- Description: `One legal-skills plugin with 103 skills across 16 practice areas for Australian legal work. Each workflow states its sources and where human review is required.`
- Stack: `Python`, `Claude Cowork`, `ChatGPT Work`, `Legal research`
- Link label: `View on GitHub`

The About section retains `Law, technology and access to justice.` as its lead. Use these two paragraphs:

> I work as a Lawyer - Technology and Innovation in the Pro Bono + CSR team at Gilbert + Tobin in Sydney.
>
> Policai and Legal Skills are personal projects, separate from that role. They focus on public sources, practical legal workflows and human review.

Keep the LinkedIn profile link in About and GitHub and LinkedIn in the footer. Add no contact address, client work, testimonial, availability claim, biography timeline, personal interests, Policai counts, or update-frequency claims. Do not claim that Daniel's software controls AI systems.

Every external link that opens a new tab keeps `rel="noreferrer"` and includes a visually hidden `opens in new tab` notice. Decorative arrows remain hidden from assistive technology.

## Visual direction

The page is an editorial register. Newsreader display type refers to legal publishing. System sans-serif body copy supports reading. JetBrains Mono identifies indexes, labels, status, stack entries, and the theme control. Thin rules and margin numbers supply structure without cards, gradients, shadows, illustrations, or fabricated project imagery.

Use Newsreader for the `h1`, project titles, section headings, and the About lead. Use a native system sans-serif stack for paragraphs and actions. Body copy stays between 16 and 18 pixels with a measure near 65 characters. Display sizes use `clamp()` and balanced wrapping.

On wide screens, use a twelve-column grid with a maximum width near 1280 pixels. The hero statement takes seven columns and the role note four. Section numbers occupy the left margin. Each project article has a narrow ordinal column, a broad copy column, and a metadata column. Project titles are prominent, but descriptions and actions remain easier to read than technical metadata.

Retain the established Everforest, Nord, and Paper palette values. Add only semantic tokens required by the new type and action treatment, such as `--display`, `--sans`, and `--on-accent`. Normal text and muted text must reach 4.5:1 contrast in every theme. Large text and focus indicators must reach 3:1. Status never relies on colour alone. Hover underlines supplement colour changes.

## Responsive and accessible behavior

Above 1050 pixels, use the split hero and three-column project grid. Keep the header on one line. From 681 through 1050 pixels, reduce gutters and place the role note below the statement. Keep project text in multiple columns only while both columns remain readable.

At 680 pixels and below, use one content column with 20-pixel gutters. Keep the wordmark and theme select on the first header row and the three navigation links on the second. Do not add a menu. Stack the role note, project content, metadata, and actions in source order. Support 320 pixels without horizontal scrolling. All visible links and the theme select have a target of at least 44 by 44 CSS pixels on mobile.

Keep one `h1`, ordered `h2` and `h3` headings, `main#main`, the labelled navigation, and the skip link. Each project article uses `aria-labelledby`. Decorative numbers and arrows use `aria-hidden="true"`. Focus indicators remain visible and unclipped. Keyboard order matches source order at every breakpoint.

The before-paint script accepts only a registry theme. Invalid values and storage exceptions leave Everforest active. The select stays hidden without JavaScript and receives the active value when revealed. A selection changes the current page even when storage writes fail. Reduced-motion mode disables smooth scrolling and nonessential transitions. No content or navigation requires animation.

## Verification contract

Sequence the implementation in these units:

1. Update the source and rendered contracts for the new role placement and Legal Skills facts. Run them against the old implementation and record the expected content failures.
2. Update the project copy, homepage copy, and `docs/content-sources.md`. Run `npm test`.
3. Replace the font dependency and implement the visual and responsive design. Run `npm test` and `npm run build`.
4. Verify the built site through `npm run preview` on loopback, not only the development server. Run the reusable Playwright checks and inspect the screenshots.

The source contract requires the exact current role, one `legal-skills` plugin, 103 skills, 16 practice areas, Claude Cowork, ChatGPT Work, official Policai sources, and human review. It rejects the old eleven-plugin and sixty-one-skill wording. It retains every hidden-record and stale-name assertion.

The rendered contract requires one `h1`, `main#main`, the skip link, exactly two `.project-row` articles, the current role, the updated Legal Skills facts, and both public project URLs. Every new-tab link uses `noreferrer`. Hidden project names and URLs, Commodity, SHGPR UCF Figures, and their URLs do not appear anywhere in `dist/index.html`.

The browser check covers these behaviors:

- Desktop and mobile screenshots in Everforest, Nord, and Paper.
- Tablet, 320-pixel reflow, and a desktop viewport reduced to the equivalent CSS width at 200 percent zoom.
- Keyboard use of the skip link, navigation, project actions, and theme select, with visible focus.
- Theme selection and persistence after reload for all three themes.
- Invalid stored values, blocked storage reads and writes, and JavaScript-disabled browsing.
- Mobile target sizes, horizontal overflow, reduced motion, and computed text and action contrast.
- The shared 404 page at desktop and mobile sizes.
- No unexpected console errors, page errors, unhandled rejections, failed requests, external asset requests, or HTTP errors. Allow only the intentional 404 document response on the 404 test.

Use the installed Playwright 1.65.0 with `/usr/bin/chromium`. Temporary servers run as loopback-only `systemd-run --user --unit=sandbox-<name>` units. Stop only units created for this task. Save final screenshots and browser output in `.audit/`, then inspect all six theme screenshots and the 404 images.

## Synthesis decision

Candidate 1 is the base. The coordinator and a separately dispatched judge both scored it 24 out of 25, ahead of Candidate 3 at 23 and Candidate 4 at 21. It has the clearest ownership, the smallest public interface, and one theme registry. Its content stays within the verified facts.

Candidate 3 contributes Newsreader display type, visually hidden new-tab notices, JavaScript-disabled checks, and measured contrast. Candidate 4 contributes the decision to retain but not render ambiguous `year` metadata and the invalid-storage test. These grafts keep the same editorial model rather than combining separate layouts.

Reject Candidate 3's daily-check wording because the shared current-facts contract does not establish it for this refresh. Reject Candidate 4's AI-control claim, sticky identity sidebar, mono body copy, and duplicate title and action links. The sidebar adds a short-height failure mode, and duplicate destinations add keyboard stops without helping the visitor.

All three candidates converge on the existing typed project collection, an early role statement, editorial project rows, one shared shell, and no client framework. The requested Fable seat failed because its model was unavailable. Three structurally distinct candidates completed, so the round retained enough alternatives for comparison.

The runtime resolved every completed candidate, judge, implementation agent, and final trail reviewer to Kimi k3.1-pro:cloud. Requested Opus, Sonnet, and Haiku names describe configuration, not the models that ran. These were separate agent reviews, not cross-model-family reviews.

Experience First favours readable body copy and a deliberate display face. Minimize Reader Load keeps biography copy and project facts in their current owners. Type System Discipline removes optional-link handling and duplicate theme lists. Subtract Before You Add removes dead CSS and Pixelify Sans before adding Newsreader. Redesign From First Principles applies the editorial model across the homepage, 404 page, tests, and documentation.

## Tradeoffs and alternatives

A bundled Newsreader dependency replaces Pixelify Sans rather than adding a third font. Platform serif fonts would avoid that replacement but give less consistent display typography across devices.

The fixed two-project sequence stays. Cards, filters, and project routes would add layout and navigation decisions without adding verified content. A typed profile collection would add indirection for copy used only on the homepage.

The design retains hidden records and unused research records because the source contract requires them. Rendered-output checks enforce their public absence.

Implementation is complete. The content and rendered contracts pass, the build has zero Astro diagnostics, and all 16 production-browser scenarios pass against the deployed site. The keyboard scenarios tab to every project action and check its visible focus. All 11 final screenshots passed visual review. The implementation commit and GitHub Pages deployment are recorded in the repository and workflow history.

The final trail review accepted the implementation evidence. It identified the missing project-action keyboard check and the incorrect model-family claims. The browser check now covers project actions, and this document records the resolved runtime. A cross-model-family trail review remains unavailable because model requests resolve to the same Kimi runtime.
