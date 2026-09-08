import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");

assert.equal((html.match(/<h1\b/g) || []).length, 1, "Rendered page must have one h1");
assert.match(html, /<main id="main">/);
assert.match(html, /href="#main"[^>]*>Skip to content</);
assert.match(html, /Daniel Alkurdi/);
for (const removed of [
  "Kitroom", "CaseLaw Guard", "Harvey LAB", "Research &amp; prototypes",
  "SHGPR UCF Figures", "Commodity", "Personal work and views",
  "Not legal advice", "No client or firm material",
]) {
  assert.ok(!html.includes(removed), `Hidden content must not render: ${removed}`);
}
assert.equal((html.match(/class="project-row"/g) || []).length, 2);

const externalBlankLinks = [...html.matchAll(/<a\b([^>]*target="_blank"[^>]*)>/g)];
assert.ok(externalBlankLinks.length > 0, "Expected external links");
for (const [, attrs] of externalBlankLinks) {
  assert.match(attrs, /rel="[^"]*noreferrer[^"]*"/, "Every target=_blank link must use noreferrer");
}

for (const href of [
  "https://policai.org/",
  "https://github.com/l0cka/legal-skills",
]) {
  assert.ok(html.includes(href.replaceAll("&", "&amp;")), `Missing rendered link: ${href}`);
}

console.log("Rendered portfolio contract passed.");
