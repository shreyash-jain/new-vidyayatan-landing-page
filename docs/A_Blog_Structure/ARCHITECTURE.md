# ARCHITECTURE — Vidyayatan

How the site is built, the exact commands, the image pipeline, and the traps. Verified
against the repo on 2026-08-21.

---

## Stack

Next.js **15.1.6** (App Router) · React · TypeScript · Tailwind (with `autoprefixer`) ·
**MDX content files** read through `gray-matter` · package manager **pnpm 10.11.1** ·
static output to `out/` · deployed to **Cloudflare Pages**.

```
src/content/blog/<slug>.mdx  (or content/guides/<slug>.mdx)
        │
        ▼
  src/lib/mdx.ts  — gray-matter frontmatter + h2/h3 heading extraction for the TOC
        │
        ▼
  src/app/blog/[slug]/  ──►  page + JSON-LD (src/lib/structured-data.ts)
        │
        ▼
  guard-postcss  ──►  next build  ──►  out/  ──►  Cloudflare Pages
```

## Commands

| What | Command |
|---|---|
| Install | `pnpm install` |
| Dev server | `pnpm dev` |
| **The build that matters** | `pnpm build` — runs the postcss guard, then `next build` |
| Guard only | `pnpm guard` |
| Type check | `pnpm typecheck` |
| Lint | `pnpm lint` |
| Cloudflare preview | `pnpm cf:preview` (`wrangler pages dev out`) |
| Cloudflare deploy | `pnpm cf:deploy` / `cf:deploy:production` |

## Key modules

| Path | Responsibility |
|---|---|
| `src/lib/mdx.ts` | Loads a collection (`blog` \| `guides`), parses frontmatter, extracts `h2`/`h3` into `Heading[]` for the TOC. Fenced code blocks are skipped so a `# comment` never becomes a phantom entry |
| `src/lib/metadata.ts` | Page metadata helpers |
| `src/lib/structured-data.ts` | JSON-LD builders |
| `src/lib/slug.ts` | `slugify` — also used for heading anchors |
| `src/content/site.ts` | Site name and canonical URL (`https://www.vidyayatan.com`) |
| `scripts/guard-postcss.mjs` | The build-time malware guard |
| `public/images/blog/` | Post illustrations (SVG) |

---

## Generating blog images (OpenRouter)

The house style here is **hand-authored SVG diagrams** (see `BLOG_PLAYBOOK.md`), so
generation is the exception rather than the rule on this site. When a generated raster
genuinely is the right call, the session produces it — the marketing lead never saves,
downloads or renames a file.

**The key lives outside every repo**, at:

```
C:\Users\Admin\.blog-keys.env
```

`C:\Aadi` is itself a git repository, so nothing secret may live under it. Never copy the
key into a repo, never print it, never paste it into chat. The file holds
`OPENROUTER_API_KEY` and `OPENROUTER_IMAGE_MODEL`.

Write a **throwaway** script into the session scratchpad — never into this repo — holding
this post's prompts. The API contract:

```js
// scratchpad/gen-images.mjs  —  run with: node scratchpad/gen-images.mjs
import { readFileSync, writeFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync("C:/Users/Admin/.blog-keys.env", "utf8")
    .split(/\r?\n/)
    .filter((l) => l.trim() && !l.trimStart().startsWith("#") && l.includes("="))
    .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()])
);

const jobs = [
  { file: "public/images/blog/<slug>.png", prompt: "…40–70 words…" },
];

for (const { file, prompt } of jobs) {
  const res = await fetch("https://openrouter.ai/api/v1/images", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: env.OPENROUTER_IMAGE_MODEL,  // qwen/qwen-image-3
      prompt,
      size: "1822x1024",                  // 16:9 — pick the ratio the slot needs
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(json).slice(0, 800));
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error("no image in response: " + JSON.stringify(json).slice(0, 800));
  writeFileSync(file, Buffer.from(b64, "base64"));
  console.log("wrote", file);
}
```

> **Two different endpoints — this is the trap.** OpenRouter has two families of image
> model and they do **not** share an API:
>
> | Kind | Example | Endpoint | Where the image is |
> |---|---|---|---|
> | **Dedicated image model** | `qwen/qwen-image-3` (ours), `qwen/qwen-image-3-pro` | `POST /api/v1/images` with `{model, prompt, size}` | `data[0].b64_json` |
> | Chat model that emits images | `google/gemini-3-pro-image`, `google/gemini-3.1-flash-image` | `POST /api/v1/chat/completions` with `modalities: ["image","text"]` | `choices[0].message.images[0].image_url.url` (a `data:` URL) |
>
> Calling a dedicated image model on `/chat/completions` returns **`404 … is an image
> generation model and cannot be used with the chat/completions endpoint`**. Asking
> `qwen/qwen-image-3` for `modalities:["image","text"]` returns **`404 No endpoints found
> that support the requested output modalities`**, because its `output_modalities` is
> `["image"]` only. **Neither 404 means the model is missing** — that misreading cost a
> session once already.
>
> **Listing image models:** the default `GET /api/v1/models` (~419 entries) **excludes
> them**. Use `GET /api/v1/models?output_modalities=image` (~45 entries), or
> `GET /api/v1/models/<id>/endpoints` for one model's modalities and pricing.

**Verified working 2026-08-21** against `qwen/qwen-image-3` via `/api/v1/images`: ~74 s
per image, ~2.5 MB PNG at 1822×1024, correctly honouring "no people, no text, no logos".


---

## Traps

### The postcss guard, and why it is chained into `build`

`scripts/guard-postcss.mjs` fails the build if `postcss.config.mjs` exceeds **200
characters on any line** or **500 bytes total**, or contains any of these IOCs:
`createRequire`, `_0x`, `global['!']`, `global.i=`, `_t_s`, `ETH_RPC_URL`, `0x/clb`,
`0x/ls`, `166.88.134.62`, `String.fromCharCode`, `child_process`. It fails closed on
detection and open on unexpected errors.

**It is chained directly into `build`, not only into `prebuild`, because *pnpm skips
`pre*` scripts*.** A `prebuild`-only guard is silently dead here. If you edit
`package.json`, keep the guard in `build`, `cf:preview`, `cf:deploy` and
`cf:deploy:production`.

Clean `postcss.config.mjs` = **9 lines / 166 bytes / longest line 51 chars** (the object
form with `tailwindcss` + `autoprefixer`).

### The worm (remediated 2026-08-20) — and how to spot a relapse

An evil merge (`4760ce0`) collapsed all five branches. The payload was a **new
blockchain-C2 (EtherHiding) variant**, which means **it cannot be blocked by IP** — the
old `166.88.134.62` block is not sufficient on its own.

Two detection tells, both cheap:

1. **A merge commit committed by anyone other than `GitHub <noreply@github.com>` is
   forged.**
   ```bash
   git log origin/main --merges -8 --format='%h | committer: %cn <%ce> | %s'
   ```
2. **Every infected commit has a clean twin** — the same tree published twice, once with
   the payload.

**If anything on the remote looks tampered with, stop and escalate. Do not attempt a
cleanup from a blog session.** The remediation playbook is
`.saral/docs/PLAYBOOK-force-push-worm-future-sessions.md` in the krazy-kreators repo, and
it is a technical-owner job.

### chrome-devtools-mcp is compiled into the Antigravity IDE

There is **no config to delete** — it respawns per IDE window, and the loader was live
again on 2026-08-20. **The hosts file is useless** (it connects to a raw IP); a firewall
rule is what works, and one is active. The only full fix is not using Antigravity.

*Last reviewed: 2026-08-21.*
