# Adding a case study

All case-study content lives in one file: [`src/content/case-studies.ts`](../src/content/case-studies.ts).
Adding a study means adding one object to the `caseStudies` array — there is no
new page to write. `/case-studies` and `/case-studies/<slug>` are both generated
from that array at build time.

> **Content rule:** every metric, quote and claim must come from an approved
> source — the client's own published figures, or a signed-off write-up. Where a
> number is the client's published claim rather than our measurement, say so in
> the metric's `context` and in `resultsNarrative`, as the Home Review study does.

## 1. Add the object

```ts
{
  slug: "acme-logistics",          // becomes /case-studies/acme-logistics
  clientName: "Acme Logistics",
  industry: "Logistics",           // must be one of `industryOptions`
  services: ["Web App", "AI/ML"],  // must be from `serviceOptions`
  techStack: ["Next.js", "PostgreSQL"],
  engagementLength: "6 months",     // optional — omit if not disclosed
  teamSize: "4 engineers, 1 designer", // optional — omit if not disclosed
  year: "2026",
  region: "India",
  regionFlag: "🇮🇳",
  cardTitle: "One line, the outcome — not the scope",
  summary: "2–3 sentences. Used on the card, the hero, and as the meta description.",
  challenge: ["Paragraph one.", "Paragraph two."],
  approach: ["Paragraph one.", "Paragraph two."],
  solutionFeatures: [{ title: "…", description: "…", icon: "workflow" }],
  results: [{ metric: "62%", label: "faster onboarding", context: "vs the manual process" }],
  resultsNarrative: ["Two or three paragraphs expanding the metrics above."],
  featured: false,
}
```

Required fields are enforced by the `CaseStudyEntry` type — `pnpm typecheck`
will tell you if something is missing. Everything optional (`testimonial`,
`gallery`, `phases`, `comparisons`, `liveUrl`, `challengePullQuote`, every image
field) can simply be left out, and the corresponding block renders nothing
rather than an empty box.

## 2. Field notes

| Field | Notes |
| --- | --- |
| `industry` / `services` | Only values present in the data get a filter chip, so a new industry appears in the filter bar automatically. |
| `results` | The first entry is the hero metric on the grid card; the first four render in the results strip. Keep `metric` short — it is set very large. |
| `solutionFeatures[].icon` | One of the keys in `FeatureIcon`. Add a new key there and map it in `case-study-feature-row.tsx` if you need another. |
| `comparisons` | Optional before/after bars. Set `lowerIsBetter: true` when a smaller number is the win. |
| `featured: true` | Sorts the study to the front of the index grid. Everything else keeps the order it is authored in. |
| `challenge` / `approach` / `resultsNarrative` | Plain paragraph arrays — no MDX. Write in the client's business language, not ours. |

## 3. Images

Every image field is optional. Where one is missing, a neutral placeholder
block renders (never a broken image). To add art:

1. Drop files in `public/case-studies/<slug>/`.
2. Reference them as `/case-studies/<slug>/hero.jpg`.
3. Fields: `cardThumbnail` (16:9), `heroImage` (16:9), `clientLogo` (transparent
   PNG/SVG), `solutionFeatures[].image` (16:10), `gallery[]` (4:3 thumbnails),
   `testimonial.authorPhoto` (square).

The site is a static export with the Next image optimizer disabled
(`images.unoptimized`), so **export images at their final size** — nothing is
resized at build or request time. Target 1600px wide, WebP, under ~100 KB each.
`ffmpeg` does both in one pass:

```bash
ffmpeg -i screenshot.png -vf scale=1600:-2 -c:v libwebp -quality 82 screenshot.webp
```

For social cards, `heroImage` is used as the OG image, falling back to
`/og/default.png`. SVGs are rejected by every social platform, so
[`src/lib/metadata.ts`](../src/lib/metadata.ts) silently falls back for those —
use a raster file if the card matters.

## 4. Check it

```bash
pnpm typecheck
pnpm dev        # /case-studies and /case-studies/<slug>
pnpm build      # confirms the new route is prerendered
```

New routes are picked up by [`src/app/sitemap.ts`](../src/app/sitemap.ts)
automatically. Nothing else needs touching.
