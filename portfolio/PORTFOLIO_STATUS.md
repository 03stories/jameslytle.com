# Portfolio Status

Last updated: 2026-10-10

## V1 goal

See [PORTFOLIO_GOALS.md](./PORTFOLIO_GOALS.md): ship a focused portfolio for senior design-engineering and product leadership opportunities, led by three evidence-backed case studies.

## Current phase

Drafting

## Current focus

Apply approved Home patterns to the scoped MVP pages

## Single recommended next action

Review the scoped MVP pages together, then complete the final content and launch checks.

## This week's three outcomes

1. [x] Publish evidence-checked Forward and Juicebox case-study routes.
2. [x] Resolve ownership and adoption for Pipeline Canvas.
3. [x] Select the Forward Narrative Claude Skill as the distinct third anchor.

## Readiness

| Item | Level | Blocking issue | Next proof |
|---|---|---|---|
| Home | Presentable | Visual direction approved; Juicebox replacement image remains G-027 | Preserve approved appearance during shared-pattern extraction |
| Forward | Draft-ready | The evidence-checked public route is implemented; the process visual remains a documented placeholder | Apply refreshed case-study patterns after Home direction is set |
| Juicebox | Draft-ready | The evidence-checked public route is implemented; the before/after visual remains a documented placeholder | Apply refreshed case-study patterns after Home direction is set |
| Forward Narrative Claude Skill | Draft-ready | Public case draft, explicit responsibility boundaries, and three synthetic visuals are implemented; Home now features it | Apply refreshed case-study patterns after Home direction is set |
| Finestra historical reflection | Draft-ready | The case now names its period, role boundaries, and the buyer-research lesson; older copy still needs review for stale or unsupported claims | Review obsolete references and superlatives |
| Lab | Draft-ready | Four selected artifacts are in V1; OpenIDEO's strongest participation fact still needs verification during copywriting | Present as a compact Lab index and four artifact pages |
| Writing | Draft-ready | The three selected V1 pieces now appear on About | Keep the curated presentation consistent with the refreshed system |
| About/contact | Draft-ready | Updated positioning and personal voice, current role, contact link, curated writing, and project links are present; 2020 headshot retained | Apply refreshed page patterns after Home direction is set |

Allowed levels: Not assessed, Blocked, Skeleton, Evidence-ready, Draft-ready, Presentable, Shipped.

## Blocking gaps

- None prevent narrative drafting; documented asset and verification gaps remain bounded.

## Last session

- Replaced independently centered detail blocks with a shared reading/artifact grid. Title, metadata, section headings, paragraphs, inline document images, and footer now share the reading edge. Added configurable reading and artifact widths plus temporary layout guides. Verified matching text edges on Design Docs and Forward, and narrow layouts on Design Docs and Juicebox without horizontal overflow.

- Migrated Lab and artifact routes to the approved portfolio shell and tokens. Curated the index to Photo Palette, Design Docs, Mural, and OpenIDEO Atlanta; added a compact Design Docs artifact with template and handoff evidence while preserving its original article. Added named Lab pagination, month dates where available, and uncropped imagery. Photo Palette now previews its extracted theme within the utility, keeping the portfolio design configuration stable. Checked all four routes and narrow Photo Palette/Design Docs layouts without horizontal overflow.

- Added a visual design system at `/design-system` with browser-local controls, live component specimens, contrast checks, reset, JSON export/download, and validated import. Centralized core portfolio foundations in `src/design/tokens.json`; verified an image-radius change persisted to Home and reset successfully. Legacy Lab migration remains the next portfolio rollout step.

- Resumed the local site on Node 22 after installing dependencies with npm ci. Applied the approved shell, title hierarchy, portrait treatment, contact links, and prose spacing to About; matched Resume to the shell with a direct PDF action. Reviewed both routes and About at a narrow 325px CSS viewport, with a loaded portrait and no horizontal overflow. Production build and accessibility audit passed for 21 routes.

- Applied the shared portfolio shell to project detail routes. Added a clear title/headline opening, quiet metadata, readable prose measure, wider artifact images, consistent corners/shadows, and return links. Viewed Forward in the local browser.

- Promoted Home shell styles to the shared portfolio shell and extracted SelectedWork for Home and Projects. Projects now presents the three anchors and historical Finestra inset in the approved visual language. Viewed the refreshed index in the local browser.

- James approved Home as the baseline for the rest of the site. Updated DESIGN.md with current labels, top alignment, centered archive treatment, reusable rules, page mappings, and rollout order.

- Surface refinement: James requested softer image/archive corners and subtle image shadows. Applied 10px project image and archive surface corners, 8px archive image corners, and restrained image shadows.

- Narrative Skill visual feedback: replaced Home’s three styled synthetic images with one plain before/after workflow wireframe. Created a separate Home asset; the detailed case-study assets remain available.

- Icon refinement: James wanted different icons rather than no icons. Added local Google Material SVGs with consistent 6px spacing and semantic choices for internal, external, email, and Resume links.

- Browser feedback pass: Removed decorative arrows, standardized role labels and Resume links, defined image edges, removed the working-principles section, simplified the contact heading, and condensed Finestra into a dark documentary inset. Recorded the Juicebox image replacement as TODO G-027; James will select or supply a better image.

- Design iteration (2026-10-03): Reworked Home around an introduction-first composition, lighter typography, uncropped dominant project images, a quieter Finestra inset, and a neutral surface. Retained the existing Geologica font and vermilion accent. Added `DESIGN.md` with provisional reusable patterns; updated navigation from Other Things to Lab while retaining its route. The production build and basic accessibility audit passed. James's visual feedback is the next input; this direction is not frozen.

- Captured: James wants Finestra shown as an honest historical reference, and the existing case notes his wish for earlier buyer research and more attention to the buyer-artist exchange. Before rollout, he wants to refresh Home's aesthetic and apply it consistently across the site; page relevance should be settled before launch validation.
- Scoped: V1 includes Home, a curated Projects index, three major case studies, Finestra as a historical reflection, a four-item Lab, About, and Resume. Legacy case pages and gallery pages stay outside the index until inbound links and redirects are reviewed; login and sandbox are not public portfolio pages.
- Changed: Home now features Forward, Juicebox, and the Forward Narrative Skill; adds Finestra as a distinct historical section; and aligns the positioning copy. About now matches that positioning, restores James's conversational product-design philosophy, links project references to their case pages, frames Finestra as an earlier chapter, and features the three selected writing pieces.
- Verified: Generated updated content JSON, reviewed Home and Finestra in the local browser previously; this session generated About content and reviewed `/about`. `git diff --check` passed. LinkedIn and Medium pieces were source-checked; Twitter and Quora links were removed from the public page because they could not be verified.
- Deferred: Refresh Home's visual direction and extend it to the scoped page patterns; then clean the in-scope content, review responsive behavior, run launch checks, and open a PR. Replace the 2020 headshot if a current portrait is available.

## Next review trigger

The Projects index uses the approved shared foundations and is ready for visual review.
