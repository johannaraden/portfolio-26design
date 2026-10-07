# Johanna Richter Rådén — Portfolio (2026)

A rebuild of [johannaraden.netlify.app](https://johannaraden.netlify.app), repositioned for
communication / art direction / AI-assisted content roles.

**Stack:** Next.js 16 (App Router, static export) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
self-hosted fonts (Geist + Instrument Serif) · no runtime UI libraries.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Editing content

All copy lives in two files — no layout code needed:

| File | What's in it |
| --- | --- |
| `src/content/site.ts` | Hero, approach, AI work, skills, articles, code projects, contact links |
| `src/content/work.ts` | The case studies (one object per case study → one page at `/work/<slug>/`) |

Anything with `placeholder: true` shows a dashed **"To fill in"** outline on the site.
`npm run build` refuses to build while placeholders remain, so nothing half-finished goes live.

### Adding images

1. Drop PNG/JPG/SVG files into `/assets`.
2. Run `npm run images` → optimised WebP files land in `/public/img`, and image sizes are registered automatically.
3. Reference them in content as `/img/<name>.webp`.

## Scripts

| Script | Does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Content check + static build to `/out` |
| `npm run preview` | Build ignoring placeholders and serve `/out` locally |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run images` | Optimise `/assets` → `/public/img` and regenerate the image manifest |

## Deploying to Netlify

`netlify.toml` is included (build `npm run build`, publish `out`, Node 22).
Point the existing Netlify site at this repo/branch, or drag the `/out` folder into Netlify.

## What changed from the 2020 version

- Create React App (deprecated) → Next.js static export: pre-rendered HTML, better SEO and speed.
- JavaScript → strict TypeScript; class components and styled-components → server components + Tailwind.
- ~25 MB of SVG/PNG images → ~1 MB of WebP with explicit sizes (no layout shift).
- Removed Material UI, AOS, react-lottie, react-modal-image, react-device-detect — replaced by CSS scroll-driven
  animations and a native `<dialog>` lightbox.
- Accessibility: semantic landmarks, skip link, focus styles, reduced-motion support, WCAG AA colour contrast (axe-checked) in light and dark mode.
- SEO: per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`, schema.org `Person` data.
- Fonts self-hosted (no Google Fonts requests — GDPR-friendly).
- Public phone number removed from the site; contact is via email and LinkedIn.
