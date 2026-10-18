# Project: Forward Narrative Claude Skill

Last updated: 2026-09-05

## Classification

- Proposed level: Full case study
- Priority: Must Ship
- Readiness: Draft-ready
- Live URL: Private team deployment
- Repository/prototype: Authored in `jb-forward/.claude/skills/forward-narrative/` and deployed through `juice-skills/skills/forward-narrative/`
- Public draft: `content/projects/forward-narrative-skill/index.md`
- Confidentiality or redaction constraints: Dispatch and MCP may be described at the responsibility-boundary level. Use synthetic skill-session and narrative-output examples; exclude internal URLs, client data, and hosted-database implementation details.

## 21-point rubric

| Criterion | Score /3 | Evidence | Confidence |
|---|---:|---|---|
| Importance of problem | 3 | A multi-day, single-author PR-and-deploy workflow prevented the team from quickly showing prospects narratives customized to their use cases and constrained sales conversations | High |
| Personal ownership | 3 | James developed and continues to maintain the skill entirely | High |
| Decision richness | 3 | The implementation separates story-design guidance from MCP responsibilities, supports repo and standalone modes, uses stable IDs for targeted edits, and layers schema and convention validation | High |
| Outcome | 2 | Multiple teammates use the deployed skill weekly for demo narratives and design prototypes | High |
| Visual/interaction quality | 2 | Three public-safe synthetic visuals now show the workflow change, continuous-improvement loop, and reusable bar-insight pattern | High |
| Differentiation | 3 | Adds current AI workflow design, organizational enablement, MCP integration, and maintainable knowledge-system evidence | High |
| Technical/Design Engineer signal | 3 | James authored a deployable skill with bundled schemas, validation utilities, structured discovery, MCP persistence, targeted patching, and release maintenance | High |
| **Total** | **19/21** | Anchor-level evidence across problem, ownership, decisions, weekly adoption, organizational impact, technical depth, and curated visual proof | High |

## Fact ledger

| ID | Fact or claim | Source | Confidence | Public-safe? | Narrative destination |
|---|---|---|---|---|---|
| F-001 | James developed the Forward Narrative Claude Skill entirely and continues to maintain it. | Firsthand answer | High | Yes, pending preferred wording | Role and ownership |
| F-002 | The skill is deployed for team use. | Firsthand answer and `juice-skills` repository | High | Confirm deployment details | What shipped |
| F-003 | Other team members use it weekly to generate narratives for demos and design prototypes. | Firsthand answer | High | Generalized wording likely safe | Outcome |
| F-004 | The skill connects through MCP to narratives stored in the team's hosted Dispatch system. | Firsthand answer and skill reference | High | Architecture wording needs review | Context and system |
| F-005 | CTO Chris leads Dispatch; James collaborated closely with him on Dispatch, the MCP, and how the MCP works with the skill. | Firsthand answer | High | Confirm name attribution before publication | Collaboration boundaries |
| F-006 | The skill owns content and story design, aesthetic conventions, ID naming, and tool selection; Dispatch MCP owns authoritative schema validation, persistence, sharing, and permissions. | Skill and Dispatch MCP documentation | High | Generalized system boundary likely safe | Decision 1 |
| F-007 | The skill supports both in-repository and standalone Claude workflows, bundling its schema, icon allowlist, examples, and references for use without source-repository access. | Skill documentation | High | Yes | Decision 2 |
| F-008 | Stable section and group IDs allow targeted MCP edits instead of resending an entire narrative. | Skill and Dispatch MCP reference | High | Yes | Decision 3 |
| F-009 | The skill requires structured discovery and intent confirmation before generating a narrative, then applies content conventions and validation around the MCP's authoritative schema check. | Skill documentation | High | Yes | Decision 4 |
| F-010 | The skill is versioned, released, and maintained with changelog entries that distinguish output-breaking changes from improvements and fixes. | Skill changelog and repository README | High | Yes | Operational maturity |
| F-011 | Before the skill, James manually created and edited narratives locally and was effectively the only team member able to do so. | Firsthand answer | High | Yes | Problem and role |
| F-012 | Making a narrative accessible by URL required James to create it, open a pull request, have it merged, and wait for deployment; the workflow could take multiple days. | Firsthand answer | High | Generalized wording likely safe | Problem and stakes |
| F-013 | This single-author, multi-day workflow became a bottleneck in sales conversations, leaving prospects with generic demos instead of narratives customized to their use cases. | Firsthand answer | High | Yes | Business consequence |
| F-014 | After the skill and Dispatch integration, the full team can create and edit narratives directly through Claude Code very quickly. | Firsthand answer | High | Confirm whether “full team” is the preferred public wording | Outcome |
| F-015 | Narrative creation and iteration became the fastest part of the workflow; the slower, more valuable constraint shifted to thinking through the sales relationship and what should be communicated. | Firsthand answer | High | Yes | Outcome and reflection |
| F-016 | After deployment, the team inventoried members' Claude sessions and the corrections or improvement requests users repeatedly made. | Firsthand answer | High | Generalized wording likely safe | Feedback loop |
| F-017 | James gathered those conversations, distinguished individual preferences from recurring needs, and curated generalizable improvements into a managed process rather than automatically adding every request. | Firsthand answer | High | Yes | Decision 4 |
| F-018 | The repository's Narrative Review Journal preserves specific review findings, synthesizes and deduplicates broader lessons, and tracks whether each lesson is open, in progress, or incorporated. | Repository evidence | High | Public-safe excerpt needed | Process evidence |
| F-019 | One incorporated visual convention connects a concise headline to the specific insight bar through matching color and a striped treatment, making the intended comparison visually explicit. | Firsthand answer, skill rules, examples, and review journal | High | Synthetic example likely safe | Iteration example |
| F-020 | Other generalized improvements include conventions for sourcing appropriate photography and verifying icons against the Font Awesome kit actually installed in the product. | Firsthand answer and repository evidence | High | Generalized wording likely safe | Iteration examples |
| F-021 | The review process prefers fixing underlying product defaults when possible rather than repeatedly adding corrective skill instructions; this can improve every future narrative while simplifying the skill. | Narrative Review Journal | High | Yes | Decision 4 and reflection |
| F-022 | James approved public description of Dispatch and MCP at the system-boundary level and approved synthetic skill-session and narrative-output examples. | Firsthand answer | High | Yes | Public evidence boundary |

## Story skeleton

### Context and problem

Forward narratives combine data accuracy, narrative structure, visual pacing, schema rules, and a growing set of interaction conventions. Initially, that expertise and production workflow were concentrated in James's local environment. He manually created and edited each narrative, opened a pull request, waited for review and merge, and then waited for deployment before anyone could share a URL. The process could take multiple days.

That made James a production bottleneck in sales conversations. Prospects responded best when they could see a narrative in their own world, customized to their use case, but the slow workflow often limited the team to generic demonstrations.

### Role and boundaries

James developed the skill entirely and continues to maintain it. Chris, the team's CTO, primarily leads Dispatch. James collaborated closely with Chris on Dispatch, the MCP interface, and the integration boundary between the MCP and the skill. Other team members now use the deployed skill weekly.

### Decision 1: Separate narrative judgment from platform authority

The skill and MCP have explicit responsibilities. The skill guides discovery, narrative structure, copy, interaction conventions, visual rules, stable IDs, and which persistence tool to call. Dispatch owns permissions, storage, sharing, and authoritative server-side schema validation. This keeps the AI workflow helpful without duplicating or weakening platform safeguards.

### Decision 2: Make the expertise portable

The skill works inside the Forward repository with the full validation toolchain and as a standalone deployed skill with bundled schema, examples, references, and icon rules. When Dispatch MCP is connected, it persists the narrative and returns a shareable result instead of leaving JSON in chat.

### Decision 3: Enable narrow, lower-risk iteration

Stable IDs allow the MCP to update a single group or section rather than resend an entire narrative. The skill chooses the narrowest applicable tool and interprets precise server validation failures. That architecture supports iterative design work while minimizing drift and unintended changes.

### Decision 4: Turn individual corrections into curated system improvements

After deployment, the team reviewed members' Claude sessions to identify where people repeatedly corrected output or asked the model to work differently. James converted those conversations into a managed review process. Specific findings stay attached to the narrative that exposed them; recurring lessons are synthesized, deduplicated, and tracked until incorporated.

The process deliberately separates personal taste from generalizable improvement. It also asks whether a recurring failure belongs in skill guidance, validation, or the product's underlying defaults. For example, repeated chart-width and color corrections led to responsive chart behavior and improved defaults, allowing corrective prompt text to be removed.

Visual-storytelling patterns also became reusable conventions. When a page calls out one bar, the skill now coordinates a succinct headline, matching headline color, and a striped treatment on the referenced bar. Photography sourcing and installed-icon validation similarly moved from repeated cleanup into the shared system.

### What shipped

A maintained, versioned Claude Skill deployed to the team and connected to the hosted Dispatch MCP. The full team can create and edit shareable narratives directly through Claude Code, and team members use the workflow weekly for demos and design prototypes.

### Outcome and reflection

The workflow replaced a multi-day, single-author PR-and-deployment path with rapid, team-wide narrative creation. Narrative production and iteration are now the fastest part of preparing a customized demonstration. The constraint has moved upstream to the higher-value work: understanding the sales relationship, deciding what matters to the prospect, and shaping the right story.

This is an organizational outcome rather than a precise time-savings metric, so the public case should preserve the bounded “multi-day before / fastest step now” comparison without inventing minutes or percentages.

The deeper product lesson is that scaling creative judgment requires more than distributing a prompt. The skill became a maintained system: observe real use, preserve specific evidence, curate repeatable patterns, decide which system layer should own each fix, and simplify guidance when better product defaults can carry the behavior.

## Asset inventory

| Asset | What it proves | Location | Ready? |
|---|---|---|---|
| Forward Narrative Skill | Full authored instruction system and design framework | `juice-skills/skills/forward-narrative/SKILL.md` | Private evidence; needs public-safe excerpts |
| Dispatch MCP contract | Explicit division of responsibilities and targeted tool flow | `references/dispatch-mcp.md` | Private evidence; needs public-safe diagram |
| Versioned changelog | Maintenance, integration refinement, and release maturity | `CHANGELOG.md` | Private evidence; needs public-safe excerpts |
| Narrative Review Journal | Evidence-driven improvement process, statuses, and better-defaults principle | `jb-forward/docs/narrative-review-journal.md` | Needs public-safe excerpt or reconstructed visual |
| Example narratives | Designed output and schema compliance | `examples/*.json` | Must anonymize or use synthetic examples |
| Bar-chart before/after | Coordinated headline color and striped hero-bar treatment | Synthetic examples and shipped component behavior | Needs curated paired visual |
| Weekly team use | Adoption outcome | Firsthand account | Needs bounded supporting evidence if available |
| Before/after workflow visual | Multi-day, single-author deployment path changed to rapid team-wide creation | `content/projects/forward-narrative-skill/workflow-before-after.svg` | Ready; synthetic and public-safe |
| Continuous-improvement loop | Observed sessions become curated, layered system improvements | `content/projects/forward-narrative-skill/continuous-improvement-loop.svg` | Ready; synthetic and public-safe |
| Bar-insight pattern | Visual judgment encoded as a reusable chart convention | `content/projects/forward-narrative-skill/bar-insight-pattern.svg` | Ready; synthetic and public-safe |

## Remaining gaps

1. The number or roles of weekly users, if safely shareable; useful but not required for V1.
2. A synthetic skill-session sequence could strengthen the case later; the current workflow and output visuals are sufficient for V1.

## Single next action

Align Home to Forward, Juicebox, and the Forward Narrative Claude Skill; frame Finestra as a historical reflection.
