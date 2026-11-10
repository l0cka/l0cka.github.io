import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const index = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const layout = readFileSync(new URL("../src/layouts/Base.astro", import.meta.url), "utf8");
const projects = readFileSync(new URL("../src/data/projects.ts", import.meta.url), "utf8");
const publicCopy = `${index}\n${layout}\n${projects}`;

assert.match(publicCopy, /Daniel Alkurdi/);
assert.match(publicCopy, /technology lawyer/i);
assert.match(index, /Technology lawyer working in pro bono\. I build open-source tools for legal work and public AI policy\./);
assert.match(index, /Current role/);
assert.match(index, /Lawyer - Technology and Innovation/);
assert.match(index, /Pro Bono \+ CSR team at Gilbert \+ Tobin/);
assert.ok(index.indexOf("Current role") < index.indexOf('id="work"'), "Current role must appear before selected work");
assert.match(projects, /One legal-skills plugin with 109 skills across 17 practice areas/);
assert.match(projects, /Claude Cowork/);
assert.match(projects, /ChatGPT Work/);
assert.match(projects, /Every record links to an official source\./);
assert.match(projects, /where human review is required/);
assert.doesNotMatch(projects, /Eleven plugins|sixty-one skills/i);

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
