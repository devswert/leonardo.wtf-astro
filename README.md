# leonardo.wtf

Personal portfolio site for [leonardo.wtf](https://leonardo.wtf). Bilingual (English / Spanish), built with Astro and deployed on Vercel.

The site showcases professional experience, side projects, and a downloadable CV. CV PDFs are generated automatically at build time from structured YAML—no manual PDF editing in the repo.

## Features

- **i18n** — English and Spanish routes (`/` and `/es/`)
- **Content collections** — Jobs and side projects as Markdown with typed frontmatter
- **CV pipeline** — Harvard-style HTML template → PDF via Puppeteer (`cv_en.pdf`, `cv_es.pdf`)
- **Organic UI** — Blob-shaped photo carousel ([BurbleShape](src/components/BurbleShape.tsx)), SSR wave dividers, tool icons in random blob frames
- **Minimal client JS** — React islands only where needed (accordion jobs, photo carousel)

## Tech stack

| Layer              | Tools                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| Framework          | [Astro 4](https://astro.build/) (SSR on Vercel)                                      |
| UI                 | [Tailwind CSS 3](https://tailwindcss.com/), [React 18](https://react.dev/) (islands) |
| Content            | Astro Content Collections, [js-yaml](https://github.com/nodeca/js-yaml)              |
| CV                 | [Handlebars](https://handlebarsjs.com/), [Puppeteer](https://pptr.dev/)              |
| Animation / shapes | [anime.js](https://animejs.com/), [blobs](https://blobs.dev/)                        |
| Deploy             | [Vercel](https://vercel.com/) (`@astrojs/vercel`)                                    |

## Project layout

```text
cv/
  data/en.yaml, es.yaml   # CV source of truth
  template.html           # Print layout
  generate.mjs            # YAML → HTML → PDF
public/                   # Static assets (+ generated PDFs, gitignored)
src/
  components/             # Astro + React UI
  content/jobs/           # Work experience entries
  content/sideProjects/   # Personal projects
  i18n/ui.ts              # Site copy (EN / ES)
  pages/                  # Routes
```

## Getting started

**Requirements:** [Node.js 24.x](https://nodejs.org/) (matches Vercel build and serverless runtime). With [nvm](https://github.com/nvm-sh/nvm): `nvm use` (reads `.nvmrc`).

```bash
git clone https://github.com/devswert/leonardo.wtf-astro.git
cd leonardo.wtf-astro
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

`npm install` downloads a local Chrome binary for Puppeteer (skipped on Vercel — see below).

## Commands

| Command                   | Description                                                           |
| ------------------------- | --------------------------------------------------------------------- |
| `npm run dev`             | Dev server at `localhost:4321`                                        |
| `npm run generate:cv`     | Build `public/cv_en.pdf` and `public/cv_es.pdf` from `cv/data/*.yaml` |
| `npm run build`           | Generate CVs → typecheck → production build                           |
| `npm run preview`         | Preview the production build locally                                  |
| `npm run astro -- --help` | Astro CLI help                                                        |

## CV generation

1. Edit `cv/data/en.yaml` and/or `cv/data/es.yaml`.
2. Adjust layout in `cv/template.html` if needed.
3. Run `npm run generate:cv` (or `npm run build`).

PDFs are written to `public/` and served at `/cv_en.pdf` and `/cv_es.pdf`. They are listed in `.gitignore` so generated files are not committed; each deploy rebuilds them.

**Chrome not found locally?** Re-run:

```bash
npx puppeteer browsers install chrome
```

## Deployment (Vercel)

Node **24.x** is pinned via `package.json` → `engines.node` and `.nvmrc`. Vercel uses it for both the build and SSR functions (see `vercel.json`).

`vercel.json` sets `buildCommand` to `npm run build`, which:

1. Installs dependencies (`postinstall` skips the Chrome download on Vercel)
2. Runs `generate:cv` using [`@sparticuz/chromium`](https://github.com/Sparticuz/chromium) (Linux libs bundled — fixes `libnspr4.so` errors)
3. Runs `astro check` and `astro build`

CV generation runs at **build time**, not inside serverless functions on each request. Locally, `generate:cv` uses Puppeteer’s Chrome from `~/.cache/puppeteer`.

After a deploy, confirm the build log contains:

```text
Generated cv_en.pdf
Generated cv_es.pdf
```

## Credits

- Blob shapes: [blobs.dev](https://blobs.dev/) — used for the photo carousel and tool icon backgrounds
- Blob inspiration: [blobs.app](https://lokesh-coder.github.io/blobs.app/)
