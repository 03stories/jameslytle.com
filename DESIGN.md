# Portfolio visual direction

Updated 2026-10-03. James approved Home as the visual baseline for the MVP. These rules capture that design and guide its application to the remaining scoped pages. The reference implementation is `src/pages/HomePage.jsx` and the Home section of `src/styles.css`.

## Voice

Practical, precise, approachable. Real product artifacts carry the visual evidence. The Cimen Fluid reference informs varying image scales and generous spacing; it does not define the site's identity.

## Foundations

- Keep the existing Geologica family. Use 400 for prose, 500 for display and links, and 600 for the name. Weight contrast should help long headlines breathe.
- Home's neutral background is `#f8f9f9`, ink `#202322`, secondary text `#555d59`, rules `#d9dfdc`, and vermilion action color `#bd3023`.
- CSS foundations live under `--portfolio-*` in `src/styles.css`. They now live on `.portfolio-shell`, used by Home and Projects; extend that shell deliberately as remaining pages migrate.
- Fluid outer gutter: 20–64px. Section spacing: 56–112px. Display scale: 38–70px on desktop, 36–52px on mobile, with line height 1.12 and tracking no tighter than -0.035em.
- Primary actions use a solid accent, white text, 4px corners, and a minimum 44px target. Secondary actions are underlined text. Links use local Google Material outlined SVGs: chevrons for internal project links, open-in-new for live products, mail for contact, and a document for Resume. Icons are 18px with a 6px label gap and inherit the text color; they are hidden from assistive technology. Hover lifts have reduced-motion alternatives.

## Page patterns to carry forward

1. **Introduction:** lead with a clear heading, supporting first-person copy, contact action, and a short “Current:” role line. Top-align the heading and supporting column. Avoid a separate rail that repeats the same positioning.
2. **Project preview:** readable text beside one dominant, uncropped artifact; alternate composition when it helps the reading rhythm. Give images a thin defined edge. On mobile, put copy before the artifact. Give case studies a direct link, with live-product links secondary. Role metadata starts with “Role:” and uses comma-separated items.
3. **Artifact caption:** Optional small sentence-case text beneath the real image, describing what it shows. Omit captions that repeat nearby copy; Forward has no Home caption. Preserve the source image's proportions. Project images use 10px corners and a subtle 3px-offset, 8px-blur shadow; archive images use 8px corners. The archive surface uses 10px corners.
4. **Historical reflection:** a compact, horizontally centered subtle neutral documentary inset with an archive icon, period information, a short reflection, and small authentic period images. Cap its width at 1040px; keep its contents left-aligned. Use denser, smaller typography to distinguish it from current work.
5. **Closing contact:** “Let’s chat” beside the opportunity statement and contact links. Resume links are labelled “Resume”. The working-principles section was removed at James's request.

## Explanatory diagrams

Use plain wireframe styling: neutral fills, thin outlines, simple connectors, readable labels, and no gradients, glows, decorative grids, or shadows. Home shows only one workflow image for the Narrative Skill. More detailed evidence belongs in the case study.

## Reuse rules

- Extend the existing `--portfolio-*` token family and `MaterialIcon` component. Shared styles belong in `src/styles.css`; reusable presentation components belong in `src/components/`. `SelectedWork.jsx` supplies Home previews using `portfolio-*` classes. Projects uses a compact semantic list with 180px thumbnails, brief summaries, direct title links, and 24px row padding; visibility is controlled by `projectVisibility.json`. Give shared patterns portfolio names rather than making other pages depend on Home class names.
- Promote the palette, gutter, spacing, type, image treatment, and action styles to the shared portfolio shell as pages migrate. Keep the approved Home appearance stable during this work.
- Extract components when repeated uses have the same purpose. Good candidates are contact actions, artifact figures with optional captions, and project metadata. Keep Home's introduction and Finestra composition specific until another page needs the same structure.
- Use authentic screenshots for product evidence. Use plain wireframes for explanatory systems. Preserve image proportions, avoid decorative crops, and keep the Home preview to one dominant artifact per project.
- Use the accent for primary actions; use underlined text for secondary navigation. Material icons inherit the label color, measure 18px, have a 6px gap, and are decorative to assistive technology. Use archive for historical labels.
- Maintain visible keyboard focus, semantic headings, descriptive image alternatives, and at least 44px action targets. Hover motion must respect reduced-motion preferences.
- At 1000px, tighten column gaps; at 720px, stack columns with copy before images. Let actions and navigation wrap. Check long headings and images at narrow widths before considering a page finished.
- Keep body copy readable, generally at 65–75ch maximum; introductions and project previews may use shorter measures. Preserve James's first-person voice and concrete responsibility boundaries.

## Page application map

| Page | Composition and rules |
|---|---|
| Projects index | Clear introduction followed by a tight list of smaller thumbnails, titles, role metadata, and short summaries. Use direct title links and thin row separators. Distinguish Finestra with a compact neutral archive row. |
| Major case studies | Clear title, short summary and role/context metadata, followed by readable narrative sections and generously sized artifacts. Use consistent captions only where they explain evidence. |
| Finestra | Carry the archive icon, dates, and documentary treatment into the introduction. Keep reflection and period artifacts distinct from current design claims. |
| About | Apply the shared title, prose, links, and spacing while preserving personal voice, inline project references, portrait, and curated writing. |
| Resume | Use dense, readable typography and clear experience hierarchy within the same shell; prioritize scanning and a direct resume action. |
| Lab | Compact index and four artifact pages with the same typography, links, image treatment, and spacing. Keep `/other-things` routes. |

## Rollout order

1. Promote shared foundations and repeated actions/figures while preserving Home.
2. Apply the system to Projects and the three major case studies.
3. Apply the historical pattern to Finestra, then About, Resume, and the scoped Lab pages.
4. Clean relevant content and resolve remaining evidence/assets, then review responsive behavior and accessibility before the launch PR.

Home's direction is approved. The Juicebox replacement image remains tracked as G-027; approval of the visual patterns does not resolve that asset gap. Legacy pages outside MVP remain subject to the existing relevance and inbound-link plan.

## Interactive design system

Open `/design-system` (`/sandbox` is an alias) for live foundations, type, action, artifact, and contrast specimens. The page is deliberately outside the public header navigation.

`src/design/tokens.json` is the committed source of truth for the portfolio palette, desktop display ceiling, long-form body size, fluid gutter/section ceilings, image/action corners, image edge/shadow, and Resume icon spacing. `src/design/tokens.js` validates configurations and maps values to `--portfolio-*` CSS variables. App renders these variables before hydration, preserving the default appearance in prerendered output.

Edits are local browser previews, stored separately from the older Photo Palette experiment. They carry across the migrated portfolio routes. Copy/download the current JSON and provide it to Codex to apply to `src/design/tokens.json`; reset restores committed defaults. Import accepts known token names, six-digit hex colors, and bounded numeric values. Contrast ratios are basic body-text checks, not a full accessibility audit.

Scope: Home, Projects, shared case studies, About, Resume, and the design-system page use the portfolio foundations. Lab and older utility pages still use the legacy theme until migrated. Component-specific composition, responsive minimums, archive details, and small metadata sizes remain intentional CSS rules; the controls are not a universal override of every pixel.
