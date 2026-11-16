---
title: "Forward Narrative Claude Skill"
date: "2026-09-05T12:00:00"
headline: "Turning one person’s narrative expertise into a team capability"
client: "Juice Analytics"
tags:
  - "AI"
  - "Product Systems"
  - "Design Engineering"
  - "MCP"
cover: ./workflow-before-after.svg
summary: "I designed, built, deployed, and maintain a Claude Skill that replaced a multi-day, single-author sales-demo bottleneck with rapid narrative creation across the team."
draft: false
---

Forward narratives combine data accuracy, story structure, visual pacing, and a growing interaction system. Initially, that expertise—and the ability to publish a narrative—was concentrated in my local workflow.

I designed, built, deployed, and continue to maintain a Claude Skill that makes the narrative system usable across our team. It guides the creative work, connects through MCP to Dispatch—the hosted platform behind [Forward](/projects/forward)—and turns a finished narrative into a shareable experience without a code deployment.

Our CTO leads Dispatch. I collaborated closely with him on its MCP interface and the boundary between the platform and my skill. Other teammates now use the skill weekly for sales demonstrations and design prototypes.

![Before the skill, one specialist moved every narrative through code review and deployment. Afterward, the team could create and share narratives through Claude and Dispatch.](./workflow-before-after.svg)

# The real bottleneck was not generating text

Before the skill, I manually created and edited every narrative locally. To make one accessible at a URL, I had to open a pull request, wait for review and merge, and then wait for deployment. That path could take multiple days.

This constrained sales conversations. Prospects reacted most strongly when they could see a narrative in their own world—shaped around their use case rather than a generic demonstration—but I was the only person who could produce one.

The goal was not simply to let everyone prompt an AI model. It was to make our accumulated narrative-design judgment available to the team while preserving the product’s technical rules, permissions, and quality standards.

<!-- TODO: replace with screen recording of a Claude session creating a narrative (30–45s) -->
![Placeholder: a Claude session creating, sharing, and revising a Forward narrative](./skill-claude-session-video-placeholder.svg)

# Decision 1: Separate creative judgment from platform authority

The skill and Dispatch have deliberately different responsibilities.

The skill owns discovery, story structure, writing and visual conventions, stable identifiers, and the choice of which persistence action to take. Dispatch owns authentication, permissions, storage, sharing, and authoritative schema validation.

That division matters. The AI can help create and refine the experience, but it cannot bypass the hosted system’s rules. The skill aims to make a narrative good; the MCP guarantees that what gets saved is valid and authorized.

# Decision 2: Ship the expertise like a product

The skill works wherever a teammate starts. Inside the Forward repository, it uses the full development and validation toolchain. As a standalone skill in Claude, it carries what it needs: the schema, 17 reference guides, worked examples, an icon allowlist, and six validation scripts. When the Dispatch MCP is connected, Claude saves the narrative and returns a shareable link rather than leaving a block of JSON in the conversation.

I release it like product software: dated versions, a changelog written for the people who use and deploy it, and CI that publishes each release. Changes that alter rendered output are marked as breaking, so teammates know to re-test before they upload.

# Decision 3: Make iteration narrow and lower-risk

Early narratives were treated as complete files. That made a small revision unnecessarily broad: changing one page could mean resending the whole experience.

I introduced stable identifiers for sections and groups and aligned the skill with targeted MCP actions. Claude can now update one group or section while leaving the rest untouched. The hosted platform revalidates the complete narrative before saving.

This makes the editing model match the way people actually work: discuss one moment, change that moment, and preserve everything already approved.

# Decision 4: Curate improvement instead of accumulating prompts

After deployment, we reviewed teammates’ Claude sessions and inventoried what people repeatedly corrected or asked the model to do differently. I turned those conversations into a managed improvement process.

Specific observations stay tied to the narrative that revealed them. Recurring lessons are synthesized, deduplicated, and tracked until incorporated. A single person’s preference does not automatically become a rule.

![The improvement loop moves from real team sessions to specific observations, synthesized patterns, the appropriate system layer, and a maintained release.](./continuous-improvement-loop.svg)

The key decision is where each improvement belongs. Some changes need clearer skill guidance. Some need validation. Others reveal that the product default itself is wrong.

For example, teammates repeatedly had to correct chart widths and colors. Instead of adding more instructions forever, we made charts responsive and improved their defaults, shipped as a breaking release so deployers knew to re-test. The skill could then become simpler while every future narrative improved.

Another recurring issue was that generated charts showed the data without communicating the insight. The product already supported richer styling, but AI-authored narratives did not consistently use it. I added a coordinated convention: a succinct headline names the finding, its emphasis color matches the referenced bar, and that bar gets a striped treatment. A bundled check flags striped bars that nothing in the text refers to.

![Synthetic narrative page: a short headline names the finding, and the bar it refers to is striped so the comparison stands out.](./bar-insight-pattern.svg)

Other recurring fixes became conventions for selecting appropriate photography and verifying that every icon actually exists in the Font Awesome kit installed in the product. These are small details individually; together, they move quality from repeated cleanup into the system.

# What changed

The skill replaced a multi-day, single-author pull-request and deployment path with rapid, team-wide narrative creation. More than 100 narratives have now been created through the Dispatch MCP by a handful of teammates, mostly sales demonstrations and design prototypes built directly in Claude.

<!-- TODO: replace with devnav recording browsing MCP-created narratives (20–30s) -->
![Placeholder: browsing narratives created through the MCP in the review tool](./skill-devnav-mcp-narratives-video-placeholder.svg)

Narrative creation and iteration are now the fastest part of the workflow. The constraint has shifted to the more valuable work: understanding the prospect relationship, deciding what matters to that audience, and shaping the right story.

# What I learned

Scaling creative judgment takes more than distributing a prompt. The real product is the improvement loop around it: observe use, preserve specific evidence, identify durable patterns, choose the system layer that should own each fix, and remove instructions when better defaults can carry the behavior.

The skill’s value is not that it eliminates thinking. It moves human attention away from deployment mechanics and toward the sales context, product judgment, and narrative choices where it matters most.
