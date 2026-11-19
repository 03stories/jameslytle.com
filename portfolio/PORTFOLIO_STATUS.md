# Portfolio Status

Last updated: 2026-11-19

## V1 goal

See [PORTFOLIO_GOALS.md](./PORTFOLIO_GOALS.md): ship a focused portfolio for senior design-engineering and product leadership opportunities, led by three evidence-backed case studies.

## Current phase

Drafting

## Current focus

Juicebox and Resume remain Presentable. The requested copy pass is implemented locally: Home/About heroes, Forward title, conversational case-study wording, fewer em dashes, and James’s exact Finestra reflection. Review the remaining evidence gaps and copy before publication.

## Single recommended next action

Prepare and review the custom-domain deployment configuration before changing live DNS.

## Completed portfolio milestones

1. [x] Publish evidence-checked Forward and Juicebox case-study routes.
2. [x] Resolve ownership and adoption for Pipeline Canvas.
3. [x] Select the Forward Narrative Claude Skill as the distinct third anchor.

## Readiness

| Item | Level | Blocking issue | Next proof |
|---|---|---|---|
| Home | Presentable | Visual direction approved; Juicebox preview replaced with approved sample video (G-027 resolved) | Review the updated hero copy; preserve the approved visual baseline |
| Forward | Draft-ready | The evidence-checked public route is implemented; it includes the generation diagram and three recordings | Review the revised copy and new process evidence |
| Juicebox | Presentable | None — James approved the project as ready on 2026-11-06 | Preserve approved evidence and presentation; confirm publication state before further release work |
| Forward Narrative Claude Skill | Draft-ready | Public case draft, explicit responsibility boundaries, and three synthetic visuals and three recordings are implemented; Home now features it | Review the conversational copy pass and accompanying evidence |
| Finestra historical reflection | Draft-ready | The case now names its period, role boundaries, and the buyer-research lesson; older copy still needs review for stale or unsupported claims | Review remaining legacy wording and linked evidence; requested reflection is implemented |
| Lab | Draft-ready | Original four artifacts plus Considered and Snark have authored Lab pages; stronger OpenIDEO participation claims remain outside its public post | Review current Lab entries and Snark media; verify participation evidence before expanding OpenIDEO copy |
| Writing | Draft-ready | The three selected V1 pieces now appear on About | Keep the curated presentation consistent with the refreshed system |
| About/contact | Draft-ready | Updated positioning and personal voice, current role, contact link, curated writing, project links, and approved travel portrait are present | Review updated hero and conversational wording; retain approved travel portrait |
| Resume | Presentable | None — James approved the resume as ready on 2026-11-06 | Preserve the approved resume during remaining portfolio work |

Allowed levels: Not assessed, Blocked, Skeleton, Evidence-ready, Draft-ready, Presentable, Shipped.

## Future TODO

- Consider changing the contact email to james@jameslytle.com. Keep jameslytle@hey.com until that decision is made.

## Blocking gaps

- None prevent narrative drafting; documented asset and verification gaps remain bounded.

## Latest work — 2026-11-19

- Committed the earlier copy pass, status sweep, voice guide, and source review as `228dd73` on `copy/website-feedback`.
- Rewrote the Forward Narrative Skill case using the voice guide: opens with the documented publication workflow, uses more natural headings and concrete explanations, and preserves Dispatch/skill ownership, weekly adoption, synthetic visuals, and the absence of precise time-savings metrics. Readiness remains Draft-ready pending James’s review. Production build and accessibility audit passed for 25 prerendered pages after the rewrite.
- James explicitly requested questions wherever personal details are missing rather than fabricated tone alignment. Updated the reusable prompt accordingly. James identified the turning point: needing PTO while multiple requests were arriving at once. Added that firsthand detail to the opening and project notes without inventing dates, request counts, feelings, or missed deliveries.

- Completed a [source-backed review of the writing guidance](./WRITING_VOICE_REVIEW.md), refined the prompt to distinguish observed habits from current preferences and editorial recommendations, and added two illustrative before/after paragraph pairs. These are documentation examples, not public copy changes.

- Documented James’s natural writing voice from the largely self-written Finestra narrative in [WRITING_VOICE.md](./WRITING_VOICE.md), with source examples, editing guidance, and a reusable prompt. Expanded it after reading all three linked Medium articles, adding verbatim examples, humor, conviction, rhetorical pacing, and guidance by writing context. Linked it from DESIGN.md. This analysis did not change public project copy.

- Implemented James’s copy feedback: heroes now say “making complex things useful”; the project title is “Forward”; most prose em dashes were removed; case-study copy is more conversational; Finestra uses the supplied replacement verbatim.
- Kept the current email unchanged and recorded the possible switch to james@jameslytle.com under Future TODO.
- Validation: production build and accessibility audit passed for 25 prerendered pages. Generated content was refreshed. No new browser review was performed for this copy pass.
- Delivery: earlier work is committed locally on `copy/website-feedback`; the Skill rewrite follows as a separate change. Fetching GitHub failed because the configured proxy was unreachable; this branch has no PR or deployment verified in this session.
- Reviewed status, inventory, content gaps, editorial decisions, design guidance, and historical QA/planning notes for stale current-state instructions.

## Earlier session history

The entries below describe their original sessions; later completed work supersedes their pending actions and PR references.

- 2026-11-16: James approved Narrative Skill as finished and requested V1 release preparation. Reviewed Forward’s full story, generation diagram, and product/QA media: no missing required case-study material remains. Root and production-subpath builds passed; the repository accessibility audit passed for 25 HTML files; five existing content/Lab tests passed. A production-path scan checked 300 local asset/navigation references across 14 scoped routes with no missing target or placeholder. PR #13 was mergeable with a successful preview check at inspection. Public DNS uses DigitalOcean nameservers, while the repository has no custom domain and still builds production under `/jameslytle.com/`; custom-domain build configuration and DNS cutover remain launch work. No DNS, Pages settings, or merge was changed.

- 2026-11-16: Reviewed the complete Narrative Skill case study against all six case-study requirements and inspected the rendered case/index. Marked Presentable as an editorial assessment, with no new required assets or interview questions. Clarified the revision-film caption to state its actual visible evidence. Updated Projects’ Juicebox thumbnail to the approved current survey-report poster and Narrative Skill’s thumbnail to an authentic Claude-plus-result frame; kept the appropriate Forward and historical Finestra previews. All four thumbnails loaded; narrow Projects and case-study checks showed no horizontal overflow and correctly sized videos. Detailed findings: `reviews/forward-narrative-skill.md`. Next action is James’s final editorial sign-off; merge still requires authorization.

- 2026-11-16: Replaced the “What the team made” placeholder using James’s supplied 28-second devnav recording. Kept a continuous 23-second sequence at normal speed, trimmed the repeated ending, and added brief opening/closing fades. Obscured workspace names, expanded workspace menus, and narrative-list details while preserving visible list structure, selection, and phone previews. The film shows workspace switching and varied product, economic, healthcare, banking, and hospitality examples; it does not independently establish the total narrative count or customer outcomes. Added a poster and text description. Raw footage and editing intermediates remain outside the repository.

- 2026-11-16: Reviewed commits `8d6e286` and `37a3b7a` before editing James’s supplied 7:49 silent Claude recording. Produced a 45-second creation sequence and a 33-second revision sequence using the fictional lighting-brand demo. Cropped for legibility and to exclude internal browser addresses; labeled accelerated playback, cut long waits and window rearrangement, and added brief fades at time jumps. Replaced the Claude-session placeholder and added the revision film beside Decision 3, with posters, native controls, viewport playback, and text descriptions. The separate MCP-created-narratives browsing placeholder remains: this recording does not establish team-wide adoption. Original recording and intermediate edits remain outside the repository.

- 2026-11-16: Resumed main-project review on `codex/update-main-projects` from current `origin/main`. Checked planning state against the Forward and Forward Narrative Claude Skill source pages. Forward still contains its public process-visual placeholder (G-010); Narrative Skill has its draft and three synthetic visuals implemented. Juicebox and Resume retain their recorded approval. Earlier PR publication notes are historical; this status check did not reverify external deployments or rerun launch checks. Recommended next action remains resolving Forward’s evidence gap.

- Added Snark as a new Lab artifact at James's request, with an opening live-capture marketing clip, two store stills, and a factual account of the motivation, AI-assisted design/development loop, agent folder, and store launch. See `projects/snark.md` for evidence and ownership boundaries. Next action for this addition: review the post and video before authorizing merge. Existing case-study priorities remain unchanged.

- Replaced Home’s historical Juicebox image with the same 65-second sample report video used on the project page. Reuses the viewport playback helper, muted looping playback, native controls, poster, and responsive proportions. Verified offscreen pause and mobile sizing; resolved G-027.

- Improved About’s mobile layout by pairing a compact off-center portrait with contact links in the same row, reducing the gap before the introduction, and tightening prose spacing. Contact targets remain 44px high. Verified narrow, tablet, and desktop layouts without horizontal overflow; desktop keeps its existing two-column composition.

- Replaced About’s 2020 headshot with James’s approved travel portrait: subtle AI-assisted hair/gaze retouch, followed by a tighter off-center crop retaining the train setting. Exported an optimized WebP, updated alternative text, and verified the image loads on About without horizontal overflow.

- James approved the Resume as ready on 2026-11-06. Added a Presentable readiness entry and recorded approval in RESUME.md; no resume content or PDF changes were requested.

- James approved Juicebox as ready on 2026-11-06. Marked the case study Presentable: reviewed narrative and role boundaries, looping product overview, Pie Slice interaction film, approved Editor before/after recordings, and four-report gallery with modal viewing and live examples. Build and accessibility checks passed for 23 routes. Changes are in PR #7; publication is pending merge.

- Replaced the two What shipped images with four supplied report captures: Quarterly Performance Review, Website Dashboard, Start:ME Entrepreneurs, and Acme Rentals Survey Results. A three-column gallery preserves full image proportions, stacks the compact dashboard above Start:ME, and collapses to one column on mobile. Added the supplied dashboard and survey live links, shared modal image viewing, and optimized WebP assets. Desktop and narrow layouts have no horizontal overflow.

- Replaced the opening Juicebox still with James’s full 65-second sample recording, exported as a 1920px MP4 with a poster, description, muted viewport playback, and looping. Removed the NashvilleHealth and early Runners Tracker/Story Designer screenshots at James’s request.

- Added the approved Editor comparison: 45 seconds from the 2022 Juice Analytics demo (3:42–4:26) and the first 60 seconds of James’s 2026 recording. Both reuse the existing muted viewport playback helper, native controls, and reduced-motion behavior. Added poster frames, text descriptions, source credit, and English captions for the older narration; replaced the Decision 3 placeholder and historical still.

- Added the Pie Slice prototype film to Juicebox with a short interaction-craft section, native playback controls, and a text description. The selected public export covers coordinated selection, authoring rules, layout/formatting states, and James's replacement filter-change transition. Playback starts muted when 35% visible and pauses below that threshold; reduced-motion users retain manual playback. Build and accessibility checks passed for 23 routes, and targeted playback-logic checks passed. Raw recordings and the review archive remain local. The matched Editor before/after is still the next evidence gap.

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

James’s review of the revised copy and the remaining Forward process-visual gap. Readiness levels remain unchanged until review; this pass does not establish a new publication state.

## Historical stopping point — 2026-10-10 (superseded)

James approved the current website refinements as a good stopping point. Next work is primarily content review: Home/About/resume positioning, ownership and evidence in the three primary case studies, remaining placeholders, and final resume PDF export. James also wants a new portrait of himself for About, replacing the 2020 headshot. Obtain a current photo before replacing the asset. The existing draft PR #4 holds the implementation work. Local development server stopped at James's request.
