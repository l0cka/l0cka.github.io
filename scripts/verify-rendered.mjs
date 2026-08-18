import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");

assert.equal((html.match(/<h1\b/g) || []).length, 1, "Rendered page must have one h1");
assert.match(html, /<main id="main">/);
assert.match(html, /href="#main"[^>]*>Skip to content</);
assert.match(html, /Daniel Alkurdi/);
assert.match(html, /Not legal advice/);
assert.match(html, /No client or firm material/);
assert.match(html, /Released · archived/);
assert.match(html, /remain under upstream review/);
assert.match(html, /citation existence, not proposition support or good-law status/);

const externalBlankLinks = [...html.matchAll(/<a\b([^>]*target="_blank"[^>]*)>/g)];
assert.ok(externalBlankLinks.length > 0, "Expected external links");
for (const [, attrs] of externalBlankLinks) {
  assert.match(attrs, /rel="[^"]*noreferrer[^"]*"/, "Every target=_blank link must use noreferrer");
}

for (const href of [
  "https://policai.org/",
  "https://github.com/l0cka/legal-skills",
  "https://pypi.org/project/caselaw-guard/",
  "https://github.com/l0cka/kitroom",
  "https://github.com/harveyai/harvey-labs/pulls?q=is%3Apr+author%3Al0cka",
]) {
  assert.ok(html.includes(href.replaceAll("&", "&amp;")), `Missing rendered link: ${href}`);
}

console.log("Rendered portfolio contract passed.");
