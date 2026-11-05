# Portfolio design round brief

## Goal

Refresh both the written content and visual design of Daniel Alkurdi's personal portfolio so visitors can understand his role and public work quickly. Produce four independent design sketches, then synthesize one implementation contract.

Implementation, commits, pushes, pull requests, deployment, new personal claims, new project metrics, and changes outside this repository are out of scope for this round.

## Pre-flight checklist

1. No privileged steps are expected. Candidates only read this repository and the installed skill files, then write one assigned file under `/tmp/arena-portfolio-refresh/`.
2. No network access, credentials, keychain unlock, sudo, commits, pushes, or deployment is needed.
3. The coordinator needs Daniel's approval before spawning the four candidates, as required by the local agent-brief workflow.

## Shared context

Every candidate must read `docs/2026-11-06-portfolio-design-context.md`, the architect skill's `references/runner-prompt.md`, `references/design-red-flags.md`, and `references/rationale-template.md` before designing. Candidates may inspect repository source but must not edit any repository file.

Each candidate produces one self-contained design package with caller usage first, the existing typed data shape or a justified replacement, component and CSS ownership, content direction, responsive behavior, accessibility behavior, and verification criteria. Use pseudocode or `not implemented` bodies rather than production implementation. Do not add comments to production files because this round writes no production files.

The existing `Project` and `ProjectLink` records are the default domain model. A candidate may recommend keeping biography copy in `index.astro` or moving it to a typed profile record only if that removes repetition or ambiguity without adding a pass-through layer. Hidden projects must stay hidden. Two visible projects must remain visible.

Use sentence-case headings and plain English. Do not use em dashes. Do not invent facts or visual content that implies nonexistent clients, commercial products, or professional endorsements.

The synthesis rubric has five criteria:

1. Content accuracy and usefulness. Copy uses the verified facts, improves clarity, and avoids unsupported claims.
2. Visual direction. The page has a coherent, distinctive identity suited to a technology lawyer and software builder.
3. Responsive and accessible behavior. The design works at mobile and desktop widths, preserves landmarks and keyboard use, supports reduced motion, and keeps all three themes legible.
4. Structural simplicity. Typed content, components, and styles have clear ownership without unnecessary files, state, dependencies, or abstractions.
5. Verifiability. Existing content and rendered contracts remain enforceable, and the design names concrete browser checks.

## Lanes

### Candidate 1

- Objective: Produce a structurally distinct content and visual design package.
- Acceptance criteria: Address all shared-context requirements and all five rubric criteria. Include a short rationale naming alternatives considered and rejected.
- Files expected to change: `/tmp/arena-portfolio-refresh/candidate-1/design.md` only.
- Must read: The shared context and architect references listed above.
- Must not touch: Every repository file and every other candidate directory.
- Exact check: `test -s /tmp/arena-portfolio-refresh/candidate-1/design.md`
- Self-verification: Report the completed check and summarize the proposed data shape, visual direction, and main tradeoff.
- Requested model: `opus` at medium effort.

### Candidate 2

- Objective: Produce a structurally distinct content and visual design package.
- Acceptance criteria: Address all shared-context requirements and all five rubric criteria. Include a short rationale naming alternatives considered and rejected.
- Files expected to change: `/tmp/arena-portfolio-refresh/candidate-2/design.md` only.
- Must read: The shared context and architect references listed above.
- Must not touch: Every repository file and every other candidate directory.
- Exact check: `test -s /tmp/arena-portfolio-refresh/candidate-2/design.md`
- Self-verification: Report the completed check and summarize the proposed data shape, visual direction, and main tradeoff.
- Requested model: `fable` at medium effort.

### Candidate 3

- Objective: Produce a structurally distinct content and visual design package.
- Acceptance criteria: Address all shared-context requirements and all five rubric criteria. Include a short rationale naming alternatives considered and rejected.
- Files expected to change: `/tmp/arena-portfolio-refresh/candidate-3/design.md` only.
- Must read: The shared context and architect references listed above.
- Must not touch: Every repository file and every other candidate directory.
- Exact check: `test -s /tmp/arena-portfolio-refresh/candidate-3/design.md`
- Self-verification: Report the completed check and summarize the proposed data shape, visual direction, and main tradeoff.
- Requested model: `sonnet` at medium effort.

### Candidate 4

- Objective: Produce a structurally distinct content and visual design package.
- Acceptance criteria: Address all shared-context requirements and all five rubric criteria. Include a short rationale naming alternatives considered and rejected.
- Files expected to change: `/tmp/arena-portfolio-refresh/candidate-4/design.md` only.
- Must read: The shared context and architect references listed above.
- Must not touch: Every repository file and every other candidate directory.
- Exact check: `test -s /tmp/arena-portfolio-refresh/candidate-4/design.md`
- Self-verification: Report the completed check and summarize the proposed data shape, visual direction, and main tradeoff.
- Requested model: `haiku` at medium effort.

## Merge order

No branches or merges are involved. The coordinator reads all four packages, screens them against the design red flags, and scores them against the rubric. An independent judge scores the same packages. The coordinator chooses one base, grafts useful ideas from the others, and writes one synthesized design contract for implementation.

## Green gate

All four assigned design files must exist and be nonempty before judging starts. Each candidate must report its exact check. The coordinator must read every package end to end. Synthesis requires a completed rubric comparison and an independent judge verdict. If a candidate drops out, the round continues only with at least two structurally distinct candidates.

## Needs the user

Approve this four-candidate design round. No additional personal information is available, so candidates must work from the verified public facts and leave unsupported biographical additions out. Visual taste remains a design judgment for the coordinator within these constraints.
