import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const index = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const layout = readFileSync(new URL("../src/layouts/Base.astro", import.meta.url), "utf8");
const projects = readFileSync(new URL("../src/data/projects.ts", import.meta.url), "utf8");
const publicCopy = `${index}\n${layout}\n${projects}`;

// Identity and professional boundary.
assert.match(publicCopy, /Daniel Alkurdi/);
assert.match(publicCopy, /technology lawyer/i);
assert.match(publicCopy, /Personal work and views/);
assert.match(publicCopy, /Not legal advice/);
assert.match(publicCopy, /No client or firm material/);

// Current public work and its important assurance boundaries.
for (const project of ["Policai", "Legal Skills", "CaseLaw Guard", "Kitroom", "Harvey LAB"]) {
  assert.match(publicCopy, new RegExp(project));
}
assert.match(projects, /citation existence, not proposition support or good-law status/);
assert.match(projects, /Four upstream pull requests/);
assert.match(projects, /remain under upstream review/);
assert.match(projects, /status: "Released · archived"/);
assert.match(projects, /status: "Early development"/);
assert.match(projects, /status: "Upstream contributions"/);
assert.match(projects, /Public-source Australia and APAC oil and LNG market tracker/);

for (const staleClaim of [
  "Daniel Kurdi",
  "AI receptionist",
  "WhisperPad",
  "OpenClaw",
  "hello@l0cka.dev",
  "srgb-galahad-ii-trinity-aio-plugin",
  "Open-source Australia and APAC oil",
]) {
  assert.doesNotMatch(publicCopy, new RegExp(staleClaim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
}

console.log("Portfolio content contract passed.");
