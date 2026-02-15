# AGENTS

## Development Workflow

1. Start from the latest `main` branch.
2. Create a new feature branch off `main` for your work.
3. Implement and test changes on that branch.
4. Open a pull request to merge back into `main` when done.

## Local Setup

1. Use Node.js 24 to match CI.
2. Install dependencies with `npm ci`.

## Quality Checks Before PR

1. Run `npm run build` and ensure it succeeds.
2. Run `npm run a11y:check` for accessibility and build validation.
3. For local iteration, use `npm run dev`; for production verification, use `npm run preview`.

## Content and Build Notes

1. Primary content lives under `content/` (projects, other-things, and site pages).
2. Build-generated JSON is written to `src/content/*.json`; review generated output when content changes.

## CI and Deploy Behavior

1. Pushes to `main` deploy GitHub Pages from `dist/`.
2. Pull requests automatically publish a preview under `gh-pages/pr-preview/pr-<PR#>/`.
3. Keep PRs focused and passing so preview and production deploys stay stable.
