# jameslytle.com

React + Vite portfolio site, statically prerendered for GitHub Pages.

## Scripts

- `npm run dev` - start local dev server (LAN accessible)
- `npm run build` - build content, client bundle, SSR bundle, and prerender routes
- `npm run preview` - preview built site
- `npm run a11y:check` - run build plus basic accessibility audit

## Content

Main content lives in:

- `content/projects/*/index.md`
- `content/other-things/*/index.md`
- `content/site/home/index.md`
- `content/site/about/index.md`

Generated JSON is written to `src/content/*.json` during build.

## Deploy

GitHub Pages deploy is handled by:

- `.github/workflows/pages.yml`
