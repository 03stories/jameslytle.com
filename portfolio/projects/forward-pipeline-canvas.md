# Project: Forward Pipeline Canvas

Last updated: 2026-09-05

## Classification

- Proposed level: Forward supporting evidence or Lab artifact
- Priority: Should Improve
- Readiness: Evidence-ready
- Live URL: None observed
- Repository/prototype: `/Users/jameslytle/Documents/Repos/forward-pipeline-canvas`
- Confidentiality or redaction constraints: Internal Forward pipeline structures and client fixtures require anonymization before publication.

## 21-point rubric

| Criterion | Score /3 | Evidence | Confidence |
|---|---:|---|---|
| Importance of problem | 3 | Conditional narrative templates are complex graphs represented as difficult-to-review JSON; the tool makes branching, data dependencies, and pipeline stages legible | High |
| Personal ownership | 3 | James built the complete prototype in collaboration with Claude Code | High |
| Decision richness | 3 | Spatial-first versus chat-first interaction, advisory simulation versus production truth, byte-preserving round trips, constrained graph editing, and live folder synchronization are documented tradeoffs | High |
| Outcome | 1 | Working POC with extensive automated verification; real team adoption remains unknown | High |
| Visual/interaction quality | 1 | The product has a complete interaction model, but visual quality has not been directly reviewed | Low |
| Differentiation | 3 | Adds recent AI-collaborative authoring, developer-tool, observability, and human-review infrastructure evidence | High |
| Technical/Design Engineer signal | 3 | Single-file application, hand-rolled canvas, browser engine port, filesystem round trips, live synchronization, and production-engine parity tests | High |
| **Total** | **17/21** | Strong technical project, but limited real-world adoption makes it supporting evidence rather than an anchor | High |

## Fact ledger

| ID | Fact or claim | Source | Confidence | Public-safe? | Narrative destination |
|---|---|---|---|---|---|
| F-001 | Pipeline Canvas is a standalone, single-file, node-based designer for Forward pipeline projects. | Repository README and plan | High | Generalized description likely safe | Context |
| F-002 | James built the entire prototype in collaboration with Claude Code. | Firsthand answer | High | Confirm preferred AI-collaboration wording | Role and collaboration |
| F-003 | The product treats conditional templates as graphs, exposing sections, groups, conditions, threshold gates, data fields, and pipeline stages on one spatial surface. | Repository README and plan | High | Requires anonymized examples | Problem and decision |
| F-004 | The canvas imports and exports real pipeline project folders while preserving unedited files byte-for-byte. | Repository README and QA guide | High | Generalized claim likely safe | Technical decision |
| F-005 | Its browser simulation is advisory; the production repository engine remains the source of truth. | Repository README and plan | High | Yes | Technical boundary |
| F-006 | The prototype supports live folder synchronization so external AI- or editor-driven file changes reload into the visual canvas. | Repository README | High | Yes | AI collaboration and workflow |
| F-007 | Automated verification includes 37 headless checks and 100/100-row parity with the production engine for the documented fixture. | Repository README and QA guide | High | Anonymize fixture identity | Outcome |
| F-008 | The initial interaction strategy was spatial-first and complementary to a separate chat-first agentic studio concept. | Repository plan | High | Yes if the comparison is public-safe | Decision |
| F-009 | James has used Pipeline Canvas locally on a few projects to improve observability of pipeline-project configuration. | Firsthand answer | High | Generalized wording likely safe | Outcome |
| F-010 | The tool remains a POC in terms of real use; no teammate, reviewer, or client adoption was reported. | Firsthand answer | High | Yes | Outcome boundary |

## Story skeleton

### Context and problem

Forward's deterministic pipeline enables thousands of individualized narratives, but the conditional templates are graphs expressed as JSON. As templates grow, reviewing their branches, data dependencies, gaps, overlaps, and generated outcomes becomes increasingly difficult—matching James's broader reflection that observability limits AI-generated content systems.

### Role and boundaries

James built the complete Pipeline Canvas prototype in collaboration with Claude Code. The exact split between James's product direction, interaction design, implementation decisions, and AI-generated code should be described from firsthand recall rather than inferred from commit history.

### Important decisions

1. Represent the pipeline spatially rather than make chat the primary interface.
2. Port engine behavior into the browser for fast simulation while keeping production tests as the source of truth.
3. Preserve repository fidelity and unedited files rather than introduce a separate proprietary format.
4. Connect human visual design and AI file manipulation through live folder synchronization.

### What shipped

A working local POC that can import, inspect, simulate, edit, and export Forward pipeline projects. James has used it across a few projects to understand pipeline configuration. The repository documents a 37-check regression suite and full parity across 100 fixture rows.

### Outcome and reflection

Technical verification is strong, and James has used the tool to support his own configuration-observability work across a few projects. Its use remains local and POC-level, with no broader adoption evidence. It therefore works best as unusually strong supporting evidence inside Forward or the Lab, not as a third anchor.

## Remaining gaps

1. James's product/design/implementation decisions versus Claude Code's contribution.
2. Public-safe screenshots or an anonymized sample project.
3. Whether a broader adoption path is planned.

## Single next action

Use Pipeline Canvas as supporting Forward evidence or a Lab artifact during curation.
