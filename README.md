# jameslytle.com

**[View the live site](https://jameslytle.com/)**

React + Vite portfolio site, statically prerendered for GitHub Pages.

## Local setup

Use Node.js 22, matching CI and `.nvmrc`. Install dependencies with `npm ci`, then start the site with `npm run dev`.

## Scripts

- `npm run dev` - build content, start local dev server (LAN accessible), and rebuild/reload when content changes
- `npm run build` - build content, client bundle, SSR bundle, and prerender routes
- `npm run preview` - preview the last production build (no watching; rebuild to update)
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

- Production: `VITE_BASE_PATH=/` for `https://jameslytle.com/`.
- PR previews: the workflow reads the active repository Pages URL and appends `pr-preview/pr-<PR#>/` to its path. Before the custom-domain cutover this is `/jameslytle.com/pr-preview/pr-<PR#>/`; afterward it is `/pr-preview/pr-<PR#>/`. The preview comment uses the same active URL.

`public/CNAME` contains `jameslytle.com` and is copied to `dist/CNAME`, preserving the custom-domain setting when production replaces the contents of `gh-pages`. Pages must continue publishing from `gh-pages` at `/ (root)`.

The custom-domain configuration takes effect when this change is deployed. Configure the domain in repository Settings → Pages before updating live DNS. Point the apex at GitHub Pages and `www` at `03stories.github.io`, then enable Enforce HTTPS after the DNS check and certificate issuance complete. DNS is currently delegated to DigitalOcean; Squarespace records become authoritative only after changing nameservers. Preserve all required mail and verification records if moving DNS providers.

## Project visibility

Edit `src/content/projectVisibility.json` to include or exclude a project. Set `home` or `projects` to `true` to display it on that surface, or `false` to hide it. These settings only control listings; content and direct project URLs remain available. Additional index entries follow the file order, after the three anchor projects and before the Finestra archive. To list a new project, create its content folder and add its slug to this file.

## Lab archive

Lab posts live in `content/labs/*/index.md`. Run `npm run lab:new -- my-exploration "My exploration" [notes.txt]` to create a draft. See [Lab publishing](docs/labs-publishing.md) for mobile/desktop publishing, notes and recordings, artifact embeds, and draft behavior.
