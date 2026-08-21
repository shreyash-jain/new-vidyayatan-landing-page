# START HERE — Vidyayatan blog

**This folder is the single source of truth for blog work in this repo.** A new teammate
or a fresh AI session with zero chat history can ship a correct post using only these
files.

**Read in this order:**

1. **README.md** (this file) — what this site is, the rules you must not break
2. **[CLIENT.md](CLIENT.md)** — audience, voice, and every standing instruction. Living
   file: add to it after every round of feedback.
3. **[BLOG_PLAYBOOK.md](BLOG_PLAYBOOK.md)** — how to write and build a post *here*
4. **[ARCHITECTURE.md](ARCHITECTURE.md)** — commands, image pipeline, traps, deploy
5. **[STATUS.md](STATUS.md)** — the living ledger: what's published, what's next

> **These files win.** When they disagree with an old memory, a stale doc, or chat
> history — believe these. If you find one wrong, fix it and bump the date.

The day-to-day workflow is the **`/blog`** command (`.claude/commands/blog.md`). It is
identical in every client repo; everything site-specific is here.

---

## 60-second context

**Vidyayatan Technologies** — this is **our own agency site**, not a client's. That makes
it the shop window: every post is a work sample as much as a piece of content. A weak post
here costs more credibility than a weak post anywhere else in the portfolio.

- Live site: **https://www.vidyayatan.com** · blog at `/blog`
- The agency builds and scales software — AI systems, production-hardening of prototypes,
  architecture at scale — and the blog argues from that experience.

**Two content collections**, both MDX, both handled by the same loader:

| Collection | Path | What it is |
|---|---|---|
| `blog` | `src/content/blog/*.mdx` | Posts — 18 live |
| `guides` | `src/content/guides/*.mdx` | Long-form reference pieces — 2 live |

## Stack in one line

Next.js **15.1.6** (App Router) · React · TypeScript · Tailwind · **MDX content files**
read through `gray-matter` · **pnpm 10.11.1** · static output to `out/` · deployed to
**Cloudflare Pages**.

## The non-negotiables

1. **`postcss.config.mjs` is guarded at build time** — `scripts/guard-postcss.mjs` runs
   inside `build`, `cf:preview`, `cf:deploy` and `prebuild`. **Never remove it, and never
   move the guard so it only runs via `prebuild`** — *pnpm skips `pre*` scripts*, so a
   `prebuild`-only guard is silently dead. It must stay chained into `build` itself.
2. **This repo was hit by a worm** (remediated 2026-08-20) whose payload used blockchain
   C2 and therefore **cannot be IP-blocked**. Two detection tells: a merge commit
   committed by anyone other than `GitHub <noreply@github.com>` is **forged**, and every
   infected commit has a clean twin. See ARCHITECTURE § Traps.
3. **Use `pnpm`** — `packageManager` pins `pnpm@10.11.1`.
4. **Posts are MDX files.** Adding one is dropping a `.mdx` file into
   `src/content/blog/` — there is no route to scaffold and no registry to edit.
5. **Illustrations are SVG, not photographs.** The house style for this site is
   diagrammatic. See CLIENT.md.
6. **Never claim a client outcome we can't stand behind.** Case-study posts name real
   clients; anything attributed to them must be true and approved.

## Where everything lives

| Thing | Path |
|---|---|
| A post | `src/content/blog/<slug>.mdx` |
| A guide | `src/content/guides/<slug>.mdx` |
| MDX loader, heading extraction, TOC | `src/lib/mdx.ts` |
| Metadata helpers | `src/lib/metadata.ts` |
| JSON-LD | `src/lib/structured-data.ts` |
| Slugify | `src/lib/slug.ts` |
| Post route | `src/app/blog/[slug]/` |
| Images | `public/images/blog/` |
| Site config (name, url) | `src/content/site.ts` |
| The postcss guard | `scripts/guard-postcss.mjs` |

*Last reviewed: 2026-08-21.*
