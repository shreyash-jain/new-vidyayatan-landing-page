# BLOG PLAYBOOK — Vidyayatan

How a post is **written** and **built** in this repo. Voice and standing rules live in
[CLIENT.md](CLIENT.md); commands and traps in [ARCHITECTURE.md](ARCHITECTURE.md). The
end-to-end process is `/blog`.

**Posts are MDX files, not React components.** Adding a post is dropping a `.mdx` file
into `src/content/blog/` — no route to scaffold, no registry to edit.

---

## Part 1 — Write the file

Create `src/content/blog/<slug>.mdx`. (A long-form reference piece goes in
`src/content/guides/` instead — same loader, same frontmatter.)

### Frontmatter

```yaml
---
title: "How AI is Transforming Businesses in 2026"
description: "…"                      # the meta description and the card dek
date: "2026-08-01"                    # ISO
author: "Vidyayatan Engineering"
tag: "AI & Business"                  # reuse an existing tag — see CLIENT.md
image: "/images/blog/<slug>.svg"
---
```

### Body

- **Open on a claim**, not on context-setting. The best existing opener runs: *"For four
  years, 'AI transformation' mostly meant a pilot project, a slide deck, and a chatbot
  nobody used twice. In 2026 that changed."*
- **`##` and `###` headings only.** `src/lib/mdx.ts` extracts h2 and h3 into the article
  table of contents — an `#` in the body will not appear there, and a `#` comment inside a
  fenced code block is correctly skipped.
- Explain mechanisms. Number the constraints that broke. Show the before and after.
- **Bold the load-bearing phrase** in a paragraph, sparingly.
- Concede at least one limit or counter-case.
- Date time-sensitive technical claims ("as at August 2026").

---

## Part 2 — Images

The house style is **SVG diagrams**, one per post, at
`public/images/blog/<slug>.svg`, referenced from the `image` frontmatter field.

- A hand-authored SVG that carries the post's central idea beats a generated picture. If
  the post has a real structure — a pipeline, a before/after, a layering — draw that.
- If a generated raster genuinely is the right call, produce it per
  [ARCHITECTURE.md § Generating blog images](ARCHITECTURE.md) and keep it consistent with
  the site palette.
- No real faces, no third-party logos, no fabricated UI presented as ours.

---

## Part 3 — Verify and ship

```bash
pnpm install
pnpm guard              # the postcss guard, standalone
pnpm lint
pnpm typecheck
pnpm build              # runs the guard, then next build — the gate
pnpm dev                # then open /blog/<slug> and check the TOC + image render
```

**Never bypass the guard.** `scripts/guard-postcss.mjs` is chained into `build` itself —
not only into `prebuild` — because **pnpm skips `pre*` scripts**, which would make a
`prebuild`-only guard silently dead. If you touch `package.json`, keep it chained.

Commit scoped to this post's files, push `blog/<slug>`, open a PR, hand over the link.
**Don't merge until told.**

---

## Pre-ship checklist

- [ ] Frontmatter complete; `tag` reuses an existing one; `image` path exists
- [ ] Opens on a claim, not on context-setting
- [ ] `##`/`###` headings only, so the TOC builds
- [ ] Every statistic sourced; time-sensitive claims dated
- [ ] Anything attributed to a named client is true and approved
- [ ] At least one conceded limit or counter-case
- [ ] Image is an SVG in the house style, or a deliberate exception
- [ ] `pnpm build` clean, with the guard intact
- [ ] `postcss.config.mjs` unchanged and clean

*Last reviewed: 2026-08-21.*
