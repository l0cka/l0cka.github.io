import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const notFound = readFileSync(new URL("../dist/404.html", import.meta.url), "utf8");
assert.match(notFound, /<h1>Page not found\.<\/h1>/, "404 page must render its heading");
assert.match(notFound, /<main id="main">/, "404 page must render main");
assert.match(notFound, /<meta name="robots" content="noindex"/, "404 page must be noindex");

assert.equal((html.match(/<h1\b/g) || []).length, 1, "Rendered page must have one h1");
assert.match(html, /<main id="main">/);
assert.match(html, /<select id="theme" data-themes="everforest nord paper"/, "Theme select must carry the theme registry");
assert.match(html, /href="#main"[^>]*>Skip to content</);
assert.match(html, /Daniel Alkurdi/);
assert.match(html, /Current role/);
assert.match(html, /Technology lawyer working in pro bono\. I build open-source tools for legal work and public AI policy\./);
assert.match(html, /One legal-skills plugin with 109 skills across 17 practice areas/);
assert.match(html, /Claude Cowork/);
assert.match(html, /ChatGPT Work/);
assert.match(html, /Every record links to an official source\./);
assert.match(html, /where human review is required/);

const projectRows = html.match(/<article\b[^>]*class="project-row"[^>]*>[\s\S]*?<\/article>/g) || [];
assert.equal(projectRows.length, 2, "Rendered page must have exactly two project articles");
for (const article of projectRows) {
  assert.match(article, /aria-labelledby="[^"]+"/, "Each project article needs an accessible label");
  assert.doesNotMatch(article, />2026</, "Project year must not render");
}

for (const removed of [
  "Kitroom",
  "CaseLaw Guard",
  "Harvey LAB",
  "Research &amp; prototypes",
  "SHGPR UCF Figures",
  "Commodity",
  "Personal work and views",
  "Not legal advice",
  "No client or firm material",
  "https://github.com/l0cka/kitroom",
  "https://github.com/l0cka/caselaw-guard",
  "https://pypi.org/project/caselaw-guard/",
  "https://github.com/harveyai/harvey-labs",
  "https://github.com/l0cka/commodity",
  "https://l0cka.github.io/SHGPR_UCF_Figures/",
]) {
  assert.ok(!html.includes(removed), `Hidden content must not render: ${removed}`);
}

const externalBlankLinks = [...html.matchAll(/<a\b([^>]*target="_blank"[^>]*)>([\s\S]*?)<\/a>/g)];
assert.ok(externalBlankLinks.length > 0, "Expected external links");
for (const [, attrs, content] of externalBlankLinks) {
  assert.match(attrs, /rel="[^"]*noreferrer[^"]*"/, "Every target=_blank link must use noreferrer");
  assert.match(content, /class="sr-only">opens in new tab</, "Every new-tab link needs an accessibility notice");
}

for (const href of [
  "https://policai.org/",
  "https://github.com/l0cka/policai",
  "https://github.com/l0cka/legal-skills",
]) {
  assert.ok(html.includes(href.replaceAll("&", "&amp;")), `Missing rendered link: ${href}`);
}

console.log("Rendered portfolio contract passed.");
