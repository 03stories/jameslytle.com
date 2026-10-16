# Project: Juicebox

Last updated: 2026-10-16

## Classification

- Proposed level: Full case study
- Priority: Must Ship
- Readiness: Draft-ready
- Live URL: Current product-specific overview: https://www.juiceanalytics.com/juicebox-for-databricks; product sign-in: https://juiceboxdata.com/. The legacy `/juicebox` marketing URL redirects to the Juice Analytics homepage.
- Repository/prototype: Not recorded
- Confidentiality or redaction constraints: Most client apps are private; use public examples and confirm any internal outcomes before publication.

## 21-point rubric

| Criterion | Score /3 | Evidence | Confidence |
|---|---:|---|---|
| Importance of problem | 3 | A multi-year platform had to turn repeated custom data-storytelling work into a coherent, configurable, scalable product for non-analytical audiences | High |
| Personal ownership | 3 | James specifically drove Slices 2.0 within Juicebox and led the platform's most recent major Editor UX redesign, alongside earlier interaction, system, and authoring work | High |
| Decision richness | 3 | Slices 2.0 resolves duplicated filtering architecture, while the latest Editor redesign trades all-at-once scanability for scalable hierarchy and progressive disclosure | High |
| Outcome | 2 | The platform shipped diverse client apps within weeks, supported public examples, and expanded into a self-service SaaS authoring experience | Medium |
| Visual/interaction quality | 2 | Strong editor screens, interactions, component configuration, and varied published app examples are available | High |
| Differentiation | 2 | Adds the portfolio's strongest long-horizon platform, data, configuration-system, and enterprise workflow evidence | High |
| Technical/Design Engineer signal | 2 | James implemented design-definition prototypes and later frontend UI/UX refinements; frontend engineers owned the production React system | High |
| **Total** | **17/21** | Strong full-case-study evidence with clear product, design, and implementation boundaries; Editor artifacts and reflection remain | High |

## Fact ledger

| ID | Fact or claim | Source | Confidence | Public-safe? | Narrative destination |
|---|---|---|---|---|---|
| F-001 | Juicebox was the second major product attempt at Juice Analytics to create a digital data-storytelling platform. | Existing case study | High | Already public | Context |
| F-002 | Earlier consulting work exposed repeated interaction and visualization patterns across roughly 30–40 custom projects. | Existing case study | High | Already public | Context and problem |
| F-003 | James led interaction and interface design on many earlier consulting applications and developed a reusable data-visualization design language. | Existing case study | Medium; boundaries missing | Already public | Role and foundation |
| F-004 | James co-authored and presented the IEEE VIS 2013 work “Shareable Data Presentations for a Non-Analytical Audience.” | Existing case study and paper/poster assets | High | Already public | Foundation and evidence |
| F-005 | Juicebox carried forward three principles: visual building blocks, purposeful messaging, and narrative flow. | Existing case study | High | Already public | Product principles |
| F-006 | The platform combined data-storytelling UX, low-code customization, and scalable/containerized technical goals. | Existing case study | High | Already public | Context and stakes |
| F-007 | Unlike the earlier Slice product, Juicebox prioritized feature maturity before building a self-service editor; developers initially configured client apps. | Existing case study | High | Already public | Decision 1 |
| F-008 | James designed UI components with both end-user interaction and developer configuration usability in mind. | Existing case study | Medium; scope missing | Already public | Role and decision 2 |
| F-009 | The system used Stories composed of configurable Slice building blocks, with roughly 15 Slice types sharing common and type-specific configuration. | Existing case study | High | Already public | System architecture |
| F-010 | James was often responsible for design mockups on client projects. | Existing case study | Medium; frequency and boundaries unknown | Already public | Role |
| F-011 | Most client apps were private, while several public examples demonstrate healthcare, entrepreneurship, survey, political, and personal-data stories. | Existing case study and assets | High | Public examples only | What shipped |
| F-012 | Product maturity allowed the team to design and fully develop diverse client projects within a couple of weeks. | Existing case study | Medium; baseline unknown | Already public | Outcome |
| F-013 | Over two to three years, James analyzed repeated design/configuration patterns and designed a self-service authoring experience. | Existing case study | Medium; boundaries missing | Already public | Decision 3 and role |
| F-014 | Slice configuration required three in-depth concept iterations to decide what should be possible, easy, or omitted. | Existing case study | High | Already public | Decision 3 |
| F-015 | The authoring product included app creation, settings, data-source management, story design, publishing/sharing, templates, trials, and workspace access. | Existing case study and assets | High | Already public | What shipped |
| F-016 | James led or managed design for the documented 2022 editor improvements. | Existing case study | Medium; exact ownership varies | Already public | Role and outcome |
| F-017 | James specifically drove the Slices 2.0 project within the broader Juicebox platform. | Firsthand answer | High | Yes | Role and decision 2 |
| F-018 | Slices 2.0 replaced investment in two overlapping filtering systems with a unified Slice model while retaining backward compatibility for existing clients. | Existing Slices 2.0 case study | High | Already public | Decision 2 |
| F-019 | The unified model introduced persistent Slice pills, a searchable side-panel list, Slice groups, lazy loading, crossfiltering, and a common `display_slice_as` configuration. | Existing Slices 2.0 case study and assets | High | Already public | Decision 2 and what shipped |
| F-020 | James led the most recent major Editor UX redesign; that work is not represented in the current portfolio. | Firsthand answer | High | Needs artifact review | Role and content gap |
| F-021 | The existing Juicebox material is dated but remains generally accurate in framing the platform around customer reporting. | Firsthand answer | High | Yes | Context and editorial framing |
| F-022 | The old Editor made a smaller number of Slices and sections easy to scan, but increasing platform complexity made it cluttered, obscured the story's high-level organization, and required excessive scrolling to navigate. | Firsthand answer | High | Yes | Editor decision |
| F-023 | James redesigned the Editor around a folder-tree UX optimized for speed and gradual disclosure of detailed configuration through a novel sliding-panel interaction. | Firsthand answer | High | Needs artifact review | Editor decision and what shipped |
| F-024 | The redesigned Editor rolled out smoothly and received customer praise; no hard usage or efficiency metrics are available. | Firsthand answer | High for qualitative claim | Needs anonymized wording | Editor outcome |
| F-025 | A matched old/new Editor comparison will demonstrate the change from a flat, scroll-heavy configuration view to hierarchical navigation and progressive detail; it is intentionally reserved as a placeholder until James supplies the images. | Firsthand answer | High for planned evidence; assets pending | Needs artifact review | Editor outcome evidence |
| F-026 | James designed the complete Editor UX, including the list experience, panel system, configuration components, and related interaction details. | Firsthand answer | High | Yes | Role and craft |
| F-027 | James implemented design-definition prototypes for handoff; frontend engineers implemented the production React system. | Firsthand answer | High | Yes | Role boundaries and technical signal |
| F-028 | After the React implementation, James implemented a series of frontend UI and UX refinements. | Firsthand answer | High | Yes | Role boundaries and technical signal |
| F-029 | If redesigning the Editor again, James would add a floating mode so the main app remains full width while editing, better supporting complex app layouts. | Firsthand answer | High | Yes | Reflection |
| F-030 | Juice Analytics still identifies Juicebox as its technology platform. | Current official About page, verified 2026-09-05 | High | Already public | Current status |
| F-031 | Current official documentation describes active Juicebox workspaces, reports, user roles, and editor access; the product sign-in remains live. | Official Juicebox documentation and sign-in, verified 2026-09-05 | High | Already public | Current status and link |
| F-032 | A current product-specific page describes Juicebox as enabling business users to create interactive data-visualization applications through an authoring interface. | Official Juicebox for Databricks page, verified 2026-09-05 | High | Already public | Current status and what shipped |
| F-033 | The former `juiceanalytics.com/juicebox` URL now redirects to the Juice Analytics homepage and should not be presented as a dedicated product page. | Live-link verification, 2026-09-05 | High | Already public | Link governance |

## Interview log

- 2026-08-15: “Slices 2.0 project was actually specifically driven by me within the Juicebox platform.”
- 2026-08-15: “The Editor UX was my most recent major redesign I led and isn't represented anywhere.”
- 2026-08-15: Existing content is dated but remains generally accurate about the platform's customer-reporting focus.
- 2026-08-15: The old Editor was scannable for simpler stories but could not scale with platform complexity; James introduced a folder tree and gradually revealed detailed configuration through sliding panels.
- 2026-08-15: The redesign received customer praise and rolled out smoothly, but no hard statistics are available; James may be able to supply a before/after comparison.
- 2026-08-15: James designed the entire Editor UX, built definition prototypes for frontend-engineer handoff, and implemented final UI/UX refinements; frontend engineers owned the React system implementation.
- 2026-08-15: James would next introduce a floating Editor mode that preserves a full-width app canvas while editing, particularly for complex layouts.

## Story skeleton

### Context: what was happening?

Juice Analytics repeatedly built custom data applications for clients and saw the same data-storytelling patterns recur. An earlier product, Slice, showed the potential of reusable building blocks but did not survive the end of Flash. Juicebox became the next multi-year platform attempt.

### Real problem: what tension or consequence mattered?

The team needed to turn flexible custom work into a coherent product without creating an unconstrained development language. The platform had to serve non-analytical audiences, app designers, developers configuring client work, and eventually self-service authors—while scaling across data, usage, and varied client requirements.

### Role and boundaries

- Scope: Interaction/interface design, product-system design, client mockups, pattern analysis, self-service authoring, Slices 2.0, and the latest major Editor UX redesign.
- Team: Cross-functional Juice Analytics product, design, and engineering team; exact size and collaborators are unknown.
- Responsibilities: Existing copy attributes component design, repeated-pattern analysis, authoring UX, and multiple editor improvements to James.
- Personally owned: Specifically drove Slices 2.0; designed the complete latest Editor UX, including list, panel, and configuration-component systems; implemented definition prototypes and final frontend UI/UX refinements.
- Collaborator ownership: Frontend engineers implemented the production React system from James's definitions and prototypes. Broader platform-engineering boundaries remain outside the current Editor chapter.

### Decision 1: Mature the platform before opening self-service

- Situation: The earlier Slice product included editing from the beginning, while Juicebox needed a stronger feature foundation.
- Options: Build a self-service editor immediately or let internal developers configure client apps while platform capabilities matured.
- Constraint: Client diversity and technical maturity made premature authoring abstractions risky.
- Decision: Prioritize feature maturity and developer-configured client work first.
- Result: The team learned from repeated real projects before designing self-service authoring.
- Evidence: Existing case-study account; client-app and editor artifacts.

### Decision 2: Unify filtering through Slices 2.0

- Situation: Global Filters were easy to add but delayed story loading, duplicated Slice behavior, and created two filtering systems that would drift in capability.
- Options: Optimize Global Filters, add a special filters-only Slice, or unify filtering within the common Slice system.
- Constraint: Existing client behavior had to remain backward compatible, queries had to get cheaper, and app developers needed a consistent YAML configuration model.
- Decision: James drove Slices 2.0 around a unified Slice model: persistent pills could open data in a searchable list, `display_slice_as` could render a Slice as a pill, and Slice groups supplied layout and shared behavior.
- Result: New apps could replace Global Filters with inline or grouped Slices; the same architecture also enabled lazy loading, crossfiltering, hierarchy, side-by-side layouts, and consistent search and selection.
- Evidence: Dedicated Slices 2.0 narrative, configuration example, style guide, screenshots, and interaction GIFs.

### Decision 3: Convert repeated client patterns into self-service authoring

- Situation: Mature client work could be designed and developed in weeks, revealing stable recurring patterns.
- Options: Keep authoring internal or expose a curated subset of product capabilities to customers.
- Constraint: The editor had to make powerful Slice configuration understandable without exposing every internal option.
- Decision: Analyze two to three years of recurring patterns and iterate three times on the Slice configuration experience before shipping the editor.
- Result: Juicebox expanded into a SaaS authoring experience with data connection, templates, story design, publishing, trials, and workspaces.
- Evidence: Create/settings/data-source/story-designer screens, editor GIF, and 2022 editor image.

### Decision 4: Replace a flat, scannable Editor with scalable progressive disclosure

- Situation: The original Editor exposed configuration for all Slices and sections together. This worked when stories were smaller, but platform evolution made the interface increasingly cluttered.
- Options: Preserve the all-at-once view and its scanability, or introduce hierarchy and reveal detailed configuration only when needed.
- Constraint: Authors still needed a quick high-level picture of story organization and fast movement between Slices without long scrolling journeys.
- Decision: James designed the complete experience around a folder-tree model for structural navigation, paired with a novel sliding-panel UX that progressively reveals detailed configuration. He defined the list UX, panel system, configuration components, and interaction behavior in working prototypes.
- Result: The information architecture separated story-level orientation from detailed editing and was designed to scale with more complex reports. The rollout was smooth and customers praised the redesign.
- Evidence: Firsthand account; a matched before/after comparison would provide the strongest public-safe proof. No hard metrics are available.

### What shipped?

A customer-reporting platform for configurable data storytelling, used for varied client apps, multiple public data stories, and a later self-service authoring experience. The repository contains shipped app examples, editor flows, interaction footage, Slices 2.0 evidence, and research foundations. The most recent major Editor redesign is not yet represented.

### Outcome and reflection

- Quantitative: No Editor redesign metrics are available.
- Qualitative: The team could create varied client apps within weeks; public examples show broad use cases. The latest Editor redesign rolled out smoothly and received customer praise.
- Business/organizational: Juicebox moved from internal developer configuration toward a SaaS authoring offering.
- Learning: Product-system design requires balancing flexibility with an intentional framework for both end users and configurators.
- What I would change now: Add a floating Editor mode so editing controls no longer reduce the main app's width, preserving the design context needed for complex layouts.

## Asset inventory

| Asset | Type | What it proves | Location/link | Ready? |
|---|---|---|---|---|
| IEEE paper/poster | Research | Product principles grounded in published data-storytelling work | `vis-2013-slice-lytle-gemignani.*`, `vis-2013-poster-slice-lytle-gemignani.*` | Yes |
| Early Slice editor sample | Product image | Predecessor product and building-block foundation | `slice-map-slice.png` | Yes |
| Public app examples | Shipped screenshots | Breadth across healthcare, entrepreneurship, surveys, politics, and personal data | `nashvillehealth.png`, `jb-startme-2022-08-08.png`, `jb-survey-example.png`, `dems2020.png`, `jb-spotify.png` | Yes |
| App creation/settings/data source | Editor screens | Authoring workflow beyond the canvas | `jb-create-new.png`, `jb-settings.png`, `jb-data-source.png` | Yes |
| Story Designer | Editor screen | Slice configuration and live preview | `jb-story-designer.png` | Yes |
| Editor interaction | GIF | Shipped interaction behavior | `jb-editor.gif` | Yes |
| 2022 editor | Product screen | Later maturity and consolidated authoring UX | `jb-editor-2022.png` | Yes |
| Slices 2.0 narrative | Existing case study | James-led system decision and its tradeoffs | `content/projects/slices/index.md` | Yes |
| Slices 2.0 interactions | GIFs | Global Filters, prior Slice behavior, pills, side panel, and crossfiltering | `content/projects/slices/*.gif` | Yes |
| Slices 2.0 screens/style guide | Product/process images | Configuration, grouped filters, and side-by-side layouts | `content/projects/slices/*.png` | Yes |
| Latest Editor redesign before/after | Explicit placeholder | Flat, scroll-heavy configuration compared with folder-tree navigation and progressive sliding panels | James will supply matched or comparable screenshots | Placeholder |
| Current product overview | Official website | Current positioning and business-user authoring | https://www.juiceanalytics.com/juicebox-for-databricks | Yes |
| Product sign-in and documentation | Official product/docs | Active workspaces, reports, roles, and editor access | https://juiceboxdata.com/ and https://docs.myjuicebox.io/ | Yes |

## Narrative draft

### Juicebox: designing a customer-reporting platform that could grow

Juicebox is an active, configurable customer-reporting platform for turning data into guided, interactive stories. I led interaction and interface design across its evolution, from the building-block system used by internal app developers to the self-service Editor customers use to author reports.

My work sat between product architecture, interaction design, and implementation. I designed reusable product systems, translated recurring client patterns into configuration models, built working definition prototypes, and implemented targeted frontend refinements. Engineering partners owned the underlying platform and production React system.

#### From custom applications to a product system

Before Juicebox, our team had designed and developed roughly 30–40 custom data applications. Repeated patterns were becoming visible: non-analytical audiences needed purposeful messaging, a guided narrative flow, and consistent visual building blocks—not a blank dashboard canvas.

Juicebox turned those patterns into a platform. A report could contain multiple Stories, each assembled from configurable components called Slices. Shared interaction behavior made the experience coherent for end users, while common configuration gave app developers a reusable system for creating different customer reports.

The product tension was constant: every new option increased flexibility, but too much flexibility would turn the platform into a development language. The goal was a smaller family of richer building blocks that made good reporting decisions easier.

#### Decision 1: learn through real client work before opening self-service

Our earlier product exposed editing from the beginning. For Juicebox, we chose to mature the platform first while internal developers configured client applications.

Building a self-service Editor too early would have forced us to formalize abstractions before we understood which patterns were genuinely reusable. Working through varied client reports let us learn where customization was valuable, where consistency mattered, and which options created unnecessary complexity.

Once the team could design and develop diverse reports within weeks, the repeated patterns were stable enough to expose through a customer-facing authoring experience. I analyzed two to three years of configuration and design behavior, then iterated on the Slice configuration model before it became part of the Editor.

#### Decision 2: unify filtering through Slices 2.0

As the platform grew, two filtering systems had begun to overlap. Global Filters were easy to add, but every filter's data had to load before the story itself appeared. They also duplicated capabilities that increasingly belonged in Slices, creating two systems that would drift in behavior and cost more to maintain.

We could optimize Global Filters, create a special filters-only Slice, or unify filtering within the common Slice model. I specifically drove the third direction.

The difficult part was preserving existing client behavior while improving performance, end-user coherence, and YAML configuration for app developers. The design centered on persistent Slice pills: a compact selection state that could also open the Slice's data in a searchable, sortable side panel. A shared `display_slice_as` option let any compatible Slice appear as a visualization, a pill, or both.

This unlocked more than a replacement for Global Filters. Slice groups could place related filters together, add context, share layout behavior, and support crossfiltering. Lazy loading returned useful counts before full data values. Hierarchical Slices gained a consistent selection experience, and reports could place filters inline rather than isolate them in a header.

The result was one primary filtering architecture the team could continue improving. Existing apps retained backward compatibility, while new apps could move to the richer Slice model.

#### Decision 3: redesign the Editor for platform-scale complexity

The original Editor made a smaller report easy to scan because configuration for its Slices and sections was visible together. As the platform evolved, that strength became a liability. Complex reports produced a cluttered interface, obscured the high-level structure, and forced authors to scroll repeatedly between distant parts of a story.

The choice was to preserve all-at-once visibility or introduce hierarchy and reveal detail only when needed.

I designed the complete new experience: a folder-tree model for understanding and navigating report structure, a list experience optimized for speed, a sliding-panel system for progressively revealing detailed configuration, and the configuration components themselves.

I implemented working definition prototypes for handoff to frontend engineers, who built the production React system. After that implementation, I returned to the code to ship a series of UI and UX refinements.

The redesign rolled out smoothly and received customer praise. We do not have hard efficiency metrics, so the strongest evidence will be a matched before-and-after comparison of the old scroll-heavy experience and the new hierarchical model.

> **Visual placeholder:** Show the same or a comparable report in the old and new Editors, highlighting structural navigation, full-story orientation, and progressively disclosed configuration.

#### What shipped

Across its evolution, Juicebox supported a wide variety of private customer reports and public examples in healthcare, entrepreneurship, survey analysis, politics, and personal data. The platform expanded from internal developer configuration into a self-service authoring experience spanning data sources, report design, templates, publishing, sharing, trials, and workspaces. Juice Analytics continues to identify Juicebox as its technology platform, with active product sign-in and workspace documentation.

Slices 2.0 supplied a more coherent filtering and layout foundation. The latest Editor redesign supplied an information architecture that could keep pace as reports became more complex.

#### What I would improve now

I would add a floating Editor mode that lets the report remain full width while editing. The folder tree and sliding panels improved navigation and progressive disclosure, but some complex layouts are best judged at their real canvas width. A floating mode would preserve editing access without compromising the design context an author needs.

The larger lesson is that authoring tools have two products inside them: the experience being created and the system used to create it. A scalable Editor has to keep both understandable as the platform grows.

## Remaining gaps

The public article now includes a Pie Slice interaction-craft section and an 81-second silent film. Evidence combines James's supplied hover/selection, expanded authoring, and filtered-state transition recordings with captured prototype states for layout, theme, and formatting. The final flow demonstrates a filter change while preserving Nashville's selection context. It is labeled as Figma design work. Raw recordings and the review archive remain outside Git.

1. Matched before/after Editor screenshots when available.
2. Broader quantitative, customer, business, or organizational outcome evidence.

## Single next action

Replace the latest Editor before/after placeholder when the matched screenshots are supplied.
