# Portfolio content review — 2026-10-16

## Scope and source

Reviewed the proposed V1 in draft PR #4, `codex/portfolio-home-redesign` at `5760e26173ce2bc70f97dbab52403dd97f73aa49`, against its project fact ledgers, frozen decisions, and portfolio standards. This is a repository content review, not a live-link, browser, PDF, or launch validation. The redesign remains in [PR #4](https://github.com/03stories/jameslytle.com/pull/4); this report is a separate documentation change based on main.

## Current assessment

The hybrid positioning is consistent across Home, About, and the working resume: product judgment, design craft, and implementation. The three anchors have distinct stories and explicit ownership boundaries. V1 remains Draft-ready: two public case-study placeholders and an unfinished resume export prevent declaring it ready to send.

## Single recommended next action

Finish the Juicebox Editor evidence: supply a public-safe matched pair of old and new Editor screenshots showing the same or comparable report. Replace the forthcoming-comparison block in `content/projects/juicebox/index.md`, label the historical interface accurately, and explain how the tree and sliding panels change navigation. Existing historical screenshots do not demonstrate the latest redesign.

## Required before launch

| Finding | Evidence in reviewed branch | Completion condition |
|---|---|---|
| Juicebox's central Editor redesign lacks visible after evidence (G-016). | The case shows `jb-editor-2022.png` and a **Before-and-after visual forthcoming** block. Ownership and qualitative customer response are documented, but no hard efficiency metrics are available. | Add matched old/new captures with permission for public use and bounded captions. Keep outcomes qualitative. |
| Forward still exposes a process placeholder (G-010). | **Process visualization placeholder** remains in the public case. The ledger says production review used a CLI-generated CSV with one row per template and condition. | Add a manually verified, anonymized explanatory diagram or a public-safe review artifact. Label a Sankey as explanatory; do not depict it as the production review UI. |
| The working resume still needs factual sign-off and a final PDF export. | `portfolio/RESUME.md` asks for current-title/earlier-role and degree-wording confirmation; `ResumePage.jsx` still calls itself a working draft. | Confirm unresolved wording, inspect print pagination, export, replace `public/resume.pdf`, and verify the actual download. Do not assume the existing PDF matches the working page. |
| OpenIDEO participation is not established by the reviewed public artifact. | The resume says a one-day jam had 75 participants; the Lab article only establishes volunteer coordination. Portfolio status already flags participation for verification. | Locate supporting evidence or obtain James's confirmation before retaining the number in a final resume. Absence from the article is an evidence gap, not proof the claim is wrong. |

## Focused editorial corrections after evidence is supplied

- **Home/Projects:** `SelectedWork.jsx` calls Juicebox “A data platform for exploring and presenting data stories,” while the case uses the more specific customer-reporting framing. Align the short introduction with the case when making the content pass.
- **Forward:** The case and resume preserve the correct denominators: 864/1,448 completed (about 60%); 715/864 selected annual-repeat intent (about 83%). Retain those denominators and avoid turning completion or repeat intent into a retention claim. The 9,772 sent figure is supported by the ledger.
- **Narrative Skill:** The case names James's skill ownership and the CTO's hosted-platform responsibility, and distinguishes weekly team adoption from measured time savings. Keep those boundaries. Ensure the workflow, loop, and chart examples are visibly identified as synthetic or schematic in the rendered case; the ledger already records this provenance.
- **Finestra:** The opening establishes 2012–2015 and the historical framing. The body still uses absolute market claims (“entirely made up” and “No one was doing anything”), a stale “Silverpop (now IBM)” parenthetical, and a May 17, 2018 date beside a May 27 archive URL. Bound the market claims to the team's research, use period-specific vendor wording, and check the archive capture before changing its date. Preserve the personal story and candid buyer-research reflection.

## Assets awaiting James

- A current portrait for About. The 2020 image remains intentional until a replacement is supplied.
- A stronger authentic Juicebox introduction image (G-027). The shared component now owns this image in `src/components/SelectedWork.jsx`; the gap tracker still points to HomePage.

These assets should not displace the Editor evidence as the next action.

## Working-state handoff

Current focus: content and evidence review after the approved design stopping point. The visual system remains frozen. Forward and Juicebox remain Draft-ready while their visual gaps are open. Narrative Skill has a complete evidence-backed draft, but this review alone does not certify its rendered presentation. After resolving the evidence and resume items, review responsive pages, required links, the downloadable PDF, accessibility, and production build together before marking V1 ready.
