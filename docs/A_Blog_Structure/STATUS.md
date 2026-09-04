# STATUS — Vidyayatan blog

**The living state of blog work.** It exists so anyone picking up — a new teammate or a
fresh AI session — knows where things stand without needing chat history. The other docs
say *how*; this says *where we are*.

> **Handoff protocol:**
> - **Before you start:** read `README.md`, then this file.
> - **While you work:** keep the tables below current.
> - **Before you leave:** update statuses, record blockers, list the next actions, and
>   commit your branch.

*Last updated: 2026-09-04.*

---

## Where things stand

- **29 posts** in `src/content/blog/` and **2 guides** in `src/content/guides/`.
- There is no registry to keep in sync — the folder *is* the collection. `src/lib/mdx.ts`
  reads it at build time.

Content clusters so far:

| Cluster | Posts |
|---|---|
| **Vibe coding & scale** | production-grade, maintenance, scaling, hidden cost of AI-generated software |
| **AI & business** | AI transformation 2026, AI strategy, AI vs human developers, why AI can't replace engineers |
| **Habuild case study** | 10x growth, architecture at scale, build vs buy, live-session automation, referral system, WhatsApp automation, who built it |
| **Engagement / process** | choosing an engagement model, Google Sheets to IPO-ready, monolith to microservices (payments), custom software for startups vs enterprises |
| **EdTech** | how to build a school accreditation platform like ICOSA |

## In flight

| Work | Branch | State | Next action |
|---|---|---|---|
| Blog docs standardisation | *(this folder)* | Uncommitted | Commit `docs/A_Blog_Structure/` + `.claude/commands/blog.md` |
| School accreditation software guide | `blog/school-accreditation-software-guide` | PR open, awaiting client review | Merge only when the marketing lead says so |
| Custom software: startups vs enterprises | `blog/custom-software-development-startups-vs-enterprises` | PR open, on `preview` | Awaiting a Shrichakra example to add to the scoping section; merge only when the marketing lead says so |

## Security state

- **The worm was remediated on 2026-08-20.** Evil merge `4760ce0` had collapsed all five
  branches; the payload was a blockchain-C2 (EtherHiding) variant that **cannot be
  IP-blocked**.
- **The build-time guard is live and correctly chained** into `build` (not only
  `prebuild`, which pnpm skips). Verified 2026-08-21.
- `postcss.config.mjs` verified clean on 2026-08-21: 9 lines / 166 bytes / longest line
  51 chars.
- **chrome-devtools-mcp is compiled into the Antigravity IDE** and respawns per window; a
  firewall rule is the mitigation. See `ARCHITECTURE.md § Traps`.
- **The 2026-08-20 cleanup itself trips two of the safety-check tells — do not escalate on
  them alone.** Merge `90c33fc` shows committer `saral10-dubey <…@users.noreply.github.com>`
  rather than `GitHub <noreply@github.com>`, and `gh api …/activity` lists force-pushes to
  `main` plus four branches at 2026-08-20 07:20–07:21Z. Both are the remediation rewriting
  history, not a relapse: `90c33fc` has an empty diff against its second parent (so it is
  not an evil merge), its `postcss.config.mjs` is clean, and there is no force-push activity
  after that date. Verified again 2026-08-27. **A tell dated after 2026-08-20 is a real
  signal — re-check rather than assuming this note covers it.**

## Open items

- No editorial calendar exists for this site yet. Posts have been written opportunistically
  around the agency's work. Worth building one if the blog becomes a priority.
- The tag list is long relative to 18 posts — consider consolidating before adding more.
