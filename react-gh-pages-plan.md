# React + GitHub Pages Rebuild Plan

## Summary
Build a new, standalone React site that statically renders pages and reads project content from Markdown under a `content/` folder. Deploy via GitHub Actions to GitHub Pages with a custom domain. Kirby CMS and login gating are removed. This plan documents the approach only, not implementation.

## Goals
1. New repo for a clean React-only site.
2. Static pre-rendered pages for SEO and shareable URLs.
3. Markdown-driven projects with images and frontmatter metadata.
4. Resume served as a downloadable PDF.
5. Simple GitHub Actions deploy to GitHub Pages + custom domain.

## Non-goals
1. No Kirby CMS or PHP runtime.
2. No private or gated content in the public build.
3. No dynamic backend or database.

## Target Site Sections (Full Parity)
1. Home
2. Projects list
3. Project detail
4. About
5. Resume
6. Other Things (albums)
7. Login page as static placeholder
8. Sandbox page as static placeholder if needed

## Content Model
### Projects
Folder structure:
`content/projects/<slug>/index.md`

Frontmatter fields:
- `title`
- `date`
- `headline`
- `client`
- `tags`
- `cover`
- `clientLogo`
- `gallery`
- `summary`
- `draft`

Markdown body contains the project narrative.

### Other Things (Albums)
Folder structure:
`content/other-things/<slug>/index.md`

Frontmatter fields:
- `title`
- `date`
- `cover`
- `images`

Markdown body optional.

### Site-level data
Use a small JSON or TS file for navigation and social links if needed.

## Build Pipeline
1. Add a build script to scan `content/projects` and `content/other-things`.
2. Parse frontmatter with `gray-matter`.
3. Convert Markdown to HTML using `remark` + `rehype`.
4. Emit JSON for React pages, for example `src/content/projects.json` and `src/content/other-things.json`.
5. Copy asset folders to `public/content/<slug>/` for stable URLs.

## Rendering Strategy
1. Use React Router for routes.
2. Use a static site generation plugin such as `vite-plugin-ssg`.
3. Generate an `index.html` for each route at build time.

Routes:
1. `/`
2. `/projects`
3. `/projects/:slug`
4. `/about`
5. `/resume`
6. `/other-things`
7. `/other-things/:slug`
8. `/login`
9. `/sandbox`

## UI and Components
1. Port existing React components from `assets/components` into the new repo.
2. Create page-level components for each route.
3. Keep typography and layout parity where feasible.

## Migration Steps
1. Convert `content/1_projects/**/note.txt` to Markdown with frontmatter.
2. Convert Kirbytext:
- `(image: foo.png caption: bar)` to `![bar](./foo.png)`.
- `(link: /projects text: XYZ)` to `[XYZ](/projects)`.
3. Move each project image into the corresponding `content/projects/<slug>/` folder.
4. Convert `content/other-things/**/album.txt` to Markdown with frontmatter.
5. Put the resume PDF in `public/resume.pdf`.
6. Spot-check at least three projects across different years and formats.

## GitHub Pages Deployment
1. GitHub Actions workflow builds the site and uploads `dist/`.
2. Pages source set to GitHub Actions.
3. Add `public/CNAME` with the custom domain.
4. Configure DNS with a CNAME record pointing to `<username>.github.io`.

## Validation
1. `npm run build` succeeds and generates static pages.
2. Project pages render Markdown and images correctly.
3. Resume download works at `/resume`.
4. Deployed site loads on the custom domain.

## Open Questions
1. Final repo name and GitHub organization.
2. Exact custom domain and DNS provider.

## Next Steps
1. Confirm repo name and domain.
2. Create the new repo and scaffold the React app.
3. Start content conversion with a small subset of projects.
