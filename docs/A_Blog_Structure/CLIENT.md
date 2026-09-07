# CLIENT — Vidyayatan Technologies (our own site)

Audience, voice, and every standing instruction. **This file is living.** Every time
someone reacts to a draft, write the lesson down here as a rule with its reason. That is
the whole mechanism by which the next post is better than this one.

> **This one is us.** There is no external client to defer to — which means there is no
> external client to catch a mistake either. Hold the bar higher here, not lower.

---

## The business

**Vidyayatan Technologies** — a software engineering agency. The work the blog draws on:
AI systems in production, taking prototypes and "vibe-coded" apps to production grade,
architecture at scale, and long-running client engagements (the Habuild series is a
worked case study across several posts).

- Site: **https://www.vidyayatan.com** · blog at `/blog`, guides at `/guides`

## The reader

A technical decision-maker at a company that already has software and a problem with it —
a founder, CTO, or head of engineering. They can tell the difference between someone who
has run a system in production and someone who has read about it. They are evaluating
whether we know what we're talking about, whether or not they'd ever say so.

## Voice

Direct, engineering-literate, argument-first. The posts that work here open on a claim
someone could disagree with and then earn it with mechanism.

- **Explain the mechanism, not the benefit.** "Inference got cheap enough to be boring"
  beats "AI is more affordable than ever."
- **Concede where the argument is weak.** A post that admits nothing reads as marketing,
  and this audience is unusually good at spotting that.
- **Specifics over adjectives** — the constraint that broke, the number that changed, the
  line of code that replaced the pipeline.
- Vary sentence length deliberately. Short sentences carry the turns.
- **Bold sparingly**, for the load-bearing phrase in a paragraph.

### Avoid

`delve` · `leverage` · `robust` · `seamless` · `unlock` · `harness` ·
`in today's fast-paced world` · `game-changing` · `revolutionise` · `tapestry` ·
`it's important to note` · `at the end of the day` · listicle openers ·
"In this post we will…"

### Byline

The `author` frontmatter field — e.g. **"Vidyayatan Engineering"**. Use a team byline
unless there's a specific reason to name a person.

### Tags in use

`AI & Business` · `AI Strategy` · `App Maintenance` · `Case Study` · `Engineering` ·
`Playbook` · `Production Readiness` · `Technical Debt` · `Vibe Coding & Scale`

Reuse an existing tag rather than inventing a near-duplicate.

## Facts and sourcing

- Every statistic gets a real, checkable source. If you can't verify it, reframe
  qualitatively — never invent a number.
- **Case-study posts name real clients.** Anything attributed to a client must be true and
  approved by them. Do not infer, round up, or dramatise an outcome.
- Technical claims about tooling and models age fast. Date them — "as at August 2026" —
  rather than writing as if permanent.

## Visual direction — SVG diagrams, not photographs

The house style is **diagrammatic**. Every existing post's image is an SVG in
`public/images/blog/` (`ai-transforming-business.svg`, `hidden-cost-ai-software.svg`, …).

- Prefer a diagram that carries an idea over a decorative image.
- Keep the palette consistent with the site.
- If a raster image is genuinely the right call, it must still be legible in both light
  and dark contexts and it must not look like stock photography.
- No real faces, no third-party logos, no fabricated UI presented as ours.

---

## Standing instructions and past feedback

*Append every new one, newest first, with the date and the reason. Never delete an entry
— supersede it and say so.*

- **2026-09-04 — An FAQ question must be a `###` heading, never a bold line above the answer.**
  The house pattern of `**Question?**` on its own line then the answer renders as one run-on
  paragraph — MDX joins a single newline into the same paragraph. Sent back as "fix this FAQ
  section". `###` also nests the questions in the article's own contents list and gives each
  one an anchor. The older DPDP post still has the broken form; fix it when next touched.
- **2026-09-04 — Product examples in a post are the marketing lead's call, not ours.**
  A brief naming Satvaa, Innowell and BharatPe was changed mid-draft to drop Satvaa and add
  HABUILD and Shrichakra. Treat the named examples as a starting list, and **never write up a
  client that has no product page, client entry or logo in the repo** — there is nothing
  approved to say. Ask for one sentence on what was built and where it sits by stage.
- **2026-09-04 — "Under 1000 words" can arrive after the draft, so build for the cut.**
  A 1,600-word draft was cut to 999 without dropping a section, an image or a link — only
  padding. Second time this client has asked for a hard trim; assume ~1,000 unless told
  otherwise, even when the brief states no count. Supersedes nothing in the 2026-08-27 entry,
  which still governs briefs that *do* state a count.
- **2026-08-27 — When a brief states a word count and a title, both are fixed.** A 1,900-word
  draft was sent back with "keep this under 1000 words" and "please stick with this topic",
  quoting the brief's own headline. The brief's numbers are an agreed SEO spec, not a
  starting point. Write to the stated count first time; if the material genuinely needs more
  room, say so in one line and let them decide. **Corollary:** the house instinct to run
  long has to be checked against the brief before drafting, not after.
- **2026-08-27 — Diagrams belong inside the post, not only at the top.** Asked to replace an
  abstract hero, they added "add some relevant infographs". In-article diagrams work here —
  but the article column is only ~640px, so a 1200px-wide canvas renders every label at
  ~8px and is useless. Author in-article SVGs on an **880px canvas with body type at 18–20
  and titles at 30**, which lands near 15px on screen. Check it in the column, not
  standalone.
- **This is our own shop window.** A weak post here costs more than a weak post on a
  client site. When in doubt, cut the post rather than ship a thin one.
- **Reuse an existing tag** rather than adding a near-duplicate — the tag list is already
  long for 18 posts.

*Last reviewed: 2026-09-04.*
