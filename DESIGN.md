# Portfolio visual direction

Updated 2026-10-03. This is a provisional Home iteration for James's review, not a frozen design system. Extend it to the scoped MVP pages once the direction is settled.

## Voice

Practical, precise, approachable. Real product artifacts carry the visual evidence. The Cimen Fluid reference informs varying image scales and generous spacing; it does not define the site's identity.

## Foundations

- Keep the existing Geologica family. Use 400 for prose, 500 for display and links, and 600 for the name. Weight contrast should help long headlines breathe.
- Home's neutral background is `#f8f9f9`, ink `#202322`, secondary text `#555d59`, rules `#d9dfdc`, and vermilion action color `#bd3023`.
- CSS foundations live under `--portfolio-*` in `src/styles.css`. They are currently scoped to `.home-shell`; migrate them deliberately when building the remaining page patterns.
- Fluid outer gutter: 20–64px. Section spacing: 56–112px. Display scale: 38–70px on desktop, 36–52px on mobile, with line height 1.12 and tracking no tighter than -0.035em.
- Primary actions use a solid accent, white text, 4px corners, and a minimum 44px target. Secondary actions are underlined text. Arrow movements and hover lifts have reduced-motion alternatives.

## Page patterns to carry forward

1. **Introduction:** lead with a clear heading, supporting first-person copy, contact action, and a short current-role line. Avoid a separate rail that repeats the same positioning.
2. **Project preview:** readable text beside one dominant, uncropped artifact; alternate composition when it helps the reading rhythm. On mobile, put copy before the artifact. Give case studies a direct link, with live-product links secondary.
3. **Artifact caption:** small sentence-case text beneath the real image, describing what it shows. Preserve the source image's proportions.
4. **Historical reflection:** a quieter inset surface with period information and current reflection. Historical images remain authentic to their period.
5. **Working principles:** three open columns with comfortable reading widths; stack them on mobile.
6. **Closing contact:** a concise heading beside the opportunity statement and contact links.

## Scope and review

Home is the visual proving ground. Case-study, Lab, About, Resume, and index patterns follow after James's feedback. Lab now has a clearer navigation label while retaining `/other-things` URLs.

Remaining direction questions: the desired amount of visual character, the treatment of the long positioning headline, and whether the neutral surface and existing type family feel right. No new assets, speculative metrics, or decorative imagery were introduced.
