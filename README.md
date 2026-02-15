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
  - Triggers on push to `main`
  - Builds with `npm ci` + `npm run build`
  - Deploys `dist/` to the root of `gh-pages` using `JamesIves/github-pages-deploy-action@v4`
  - Preserves PR previews with `clean: true` and `clean-exclude: pr-preview/`
- `.github/workflows/pr-preview.yml`
  - Triggers on pull requests (`opened`, `reopened`, `synchronize`, `closed`)
  - On open/update: builds and deploys preview to `gh-pages/pr-preview/pr-<PR#>/`
  - On close: removes that PR preview
  - Uses `rossjrw/pr-preview-action@v1` with:
    - `preview-branch: gh-pages`
    - `umbrella-dir: pr-preview`
    - `source-dir: dist`

Base path environment values:

- Production: `VITE_BASE_PATH=/jameslytle.com/`
- PR previews: `VITE_BASE_PATH=/jameslytle.com/pr-preview/pr-<PR#>/`
