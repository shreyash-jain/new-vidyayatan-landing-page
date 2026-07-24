# Vidyayatan Technologies — Website

Marketing site for [vidyayatan.com](https://www.vidyayatan.com), hand-built on
Next.js (App Router). Previously a headless Plasmic site; fully rebuilt from
scratch and owned in this repo.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**-style primitives (Radix under the hood)
- **Framer Motion** for subtle scroll reveals
- Content lives in typed data files under `src/content/` (CMS seam for later)

## Getting started

Use Node 22 (see `.nvmrc` / `engines`).

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export → out/
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
```

## Deployment (Cloudflare Pages)

The site is a **static export** (`output: "export"` → `out/`). The only dynamic
piece is the contact form, served by a **Cloudflare Pages Function** at
`functions/api/contact.ts`.

- **Build command:** `pnpm build`
- **Build output directory:** `out`
- **Node version:** 22 (`.node-version`)
- Optional env vars (Pages dashboard): `NEXT_PUBLIC_GA_ID` (build-time),
  and `VACADEMY_LEAD_ENDPOINT` / `VACADEMY_AUDIENCE_ID` / `VACADEMY_SOURCE_TYPE`
  / `VACADEMY_SOURCE_ID` for the lead function. All have sensible defaults.

```bash
pnpm cf:preview   # build + serve locally via wrangler (pages + functions)
pnpm cf:deploy    # build + deploy to Cloudflare Pages
```

Redirects live in `public/_redirects`.

## Project structure

```
src/
  app/          # routes (App Router) + api/contact
  components/
    ui/         # design-system primitives
    layout/     # header, footer, logo
    sections/   # page sections (hero, testimonials, faq, …)
    common/     # container, section-heading, reveal, cta
  content/      # site config, nav, and page data (services/products/industries/…)
  lib/          # utils, metadata + structured-data helpers
```

### Editing content

- **Navigation / footer:** `src/content/nav.ts` (single source of truth).
- **Services / Products / Industries:** typed arrays in `src/content/*.ts`. Add an
  entry and its detail page is generated automatically.
- **Blog / Guides:** MDX under `src/content/blog` and `src/content/guides`.

### Contact form → CRM leads

`src/app/api/contact/route.ts` submits every enquiry to the Vacademy CRM open
lead endpoint (`admin-core-service/open/v1/audience/lead/submit`). Form fields
map to the audience's custom fields (Full Name, Email, Phone, Details — with
Company folded into Details — and a fixed "Website Contact Form" intent). The
target audience/source and endpoint are overridable via env (see `.env.example`);
sensible defaults are baked in.
