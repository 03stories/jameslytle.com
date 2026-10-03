# Homepage Design QA

## Current iteration — 2026-10-03

The prior comparison below records an earlier visual direction. The current Home is a new iteration for James's feedback: introduction first, neutral background, a lighter Geologica hierarchy, uncropped dominant project images, quieter historical treatment, and reusable `--portfolio-*` foundations. See `DESIGN.md` for the provisional pattern guide. The previous “passed” conclusion does not indicate approval of this new aesthetic.

- Production build and basic accessibility audit passed for 21 HTML files.
- Browser review covered the default wide panel and a narrow viewport; no broken images or horizontal overflow were observed.
- Measured CSS viewports included 325px and 1200px widths. Primary text contrast is 15.03:1; secondary text 6.43:1; the white action text on vermilion is 5.82:1. Browser console showed no errors during review.
- Opening evidence: `/private/tmp/james-home-iteration-desktop.png` and `/private/tmp/james-home-iteration-mobile.png`.
- Final aesthetic approval and propagation to other MVP pages remain open.

- Source visual truth: `/Users/jameslytle/.codex/generated_images/019f4d86-9ac7-7031-9975-b60041a02ef3/exec-8a844f54-ffd4-4a7c-a069-bc33a78e7344.png`
- Implementation: `http://localhost:5173/`
- Desktop evidence: `/tmp/james-home-stitched-desktop.png`
- Mobile evidence: `/tmp/james-home-mobile-top.png`
- Full-view comparison: `/tmp/design-qa-full-comparison.png`
- Focused hero comparison: `/tmp/design-qa-focused-top.png`
- Viewports: 1440 × 1024 desktop; 390 × 844 mobile
- State: homepage, light theme, initial route

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: Newsreader and IBM Plex Sans reproduce the selected editorial contrast, optical hierarchy, and restrained metadata treatment. Display copy wraps naturally at both tested widths.
- Spacing and layout rhythm: the wide hero, persistent desktop rail, staggered project pairs, isolated document crop, dark principles band, and generous section spacing match the selected composition. Mobile collapses to a single reading order without horizontal overflow.
- Colors and visual tokens: warm paper, near-black, vermilion actions, indigo metadata, and fine gray rules closely match the source palette with accessible contrast.
- Image quality and asset fidelity: the implementation uses authentic Forward, Juicebox, Design Docs, and Photo Palette assets rather than recreating the generated mock's invented composites. Crops remain sharp and preserve aspect ratio.
- Copy and content: positioning, founder-builder attribution, project summaries, working principles, navigation, contact action, and résumé links match the approved brief.

## Comparison History

### Pass 1

- [P2] Project sections produced substantially more vertical length than the source.
  - Evidence: the initial implementation measured 5007px high at 1440px wide, with oversized project gaps and image heights.
  - Fix: reduced project section padding and artifact heights; reduced the isolated Design Docs section minimum height.

### Pass 2

- Post-fix desktop evidence preserves the requested whitespace while bringing supporting project rhythm closer to the source.
- The remaining length difference is intentional: authentic project descriptions and figure captions are retained instead of the mock's compressed or invented text.
- Normal viewport captures confirmed that apparent duplication in stitched full-page browser captures was a capture artifact, not duplicate DOM; `.home-page` count is one.
- Mobile DOM measurements confirmed a 390px page and 390px scroll width with no horizontal overflow.

## Interactions and Runtime

- Header résumé navigation tested successfully.
- Primary and secondary CTA links are present and keyboard focus styling is retained.
- Browser console checked: no errors.
- `npm run build`: passed.
- `npm run a11y:check`: passed for 19 prerendered HTML files.

## Follow-up Polish

- [P3] A future Forward case study can replace the landing-page capture with purpose-made product screenshots once that project page is authored.
- [P3] Additional project-specific crops could further vary the gallery rhythm without changing the established layout system.

final result: passed
