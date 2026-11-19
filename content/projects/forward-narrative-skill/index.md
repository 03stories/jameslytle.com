---
title: "Forward Narrative Claude Skill"
date: "2026-09-05T12:00:00"
headline: "Helping the team make and share Forward narratives"
client: "Juice Analytics"
tags:
  - "AI"
  - "Product Systems"
  - "Design Engineering"
  - "MCP"
cover: ./workflow-before-after.svg
summary: "I built and maintain a Claude Skill that lets teammates create and share Forward narratives without waiting for me to make them locally and move them through a code deployment."
draft: false
---

At first, every Forward narrative had to go through me. I’d make it locally, open a pull request, and wait for review, merge, and deployment before anyone could share a link. That could take days.

When I needed to take PTO and multiple requests were coming in at once, I knew the workflow had to change.

This was especially limiting in sales conversations. Prospects responded best when they could see a narrative built around their own use case, but I was the only person who could make one.

I designed, built, deployed, and continue to maintain a Claude Skill that lets teammates create and share narratives themselves. It guides the writing and design, then connects through MCP to our hosted platform, Dispatch, to save and share the result without a code deployment.

Our CTO leads Dispatch. We worked closely on its MCP interface and where the skill’s responsibilities should end. Other teammates now use the skill weekly for sales demonstrations and design prototypes.

![Before the skill, one specialist moved every narrative through code review and deployment. Afterward, the team could create and share narratives through Claude and Dispatch.](./workflow-before-after.svg)

# Making what I knew useful to the team

A Forward narrative brings together accurate data, story structure, visual pacing, and an interaction system that keeps growing. Before the skill, I was putting all of that together in my local workflow.

I wanted teammates to use what we’d learned about building narratives without having to learn the whole codebase. That meant giving the skill enough context to help with creative decisions while keeping the platform’s technical rules and permissions in place.

The skill guides discovery, story structure, writing, and visual conventions. It also handles stable identifiers and chooses the appropriate action for saving or updating a narrative. Dispatch owns authentication, permissions, storage, sharing, and schema validation.

The distinction matters when Claude makes a change. The skill guides the work, but Dispatch checks that the narrative follows the required structure and that the user has permission to save it.

<figure class="slice-film">
  <video controls muted playsinline data-play-in-view preload="none" width="1920" height="1380" poster="./skill-create-narrative-poster.jpg" aria-label="Creating a Forward narrative with Claude" aria-describedby="skill-create-narrative-caption">
    <source src="./skill-create-narrative.mp4" type="video/mp4">
    <a href="./skill-create-narrative.mp4">Download the narrative creation recording</a>.
  </video>
  <figcaption id="skill-create-narrative-caption" class="portfolio-figure-label">From brief to live narrative · 45 sec · Silent, edited recording. Fictional demo; accelerated passages are labeled.</figcaption>
  <details class="slice-film-description">
    <summary>Read the video description</summary>
    <p>A brief asks Claude for a celebratory quarterly narrative for a fictional lighting company. Claude reads the Forward Narrative Skill, asks about the audience, quarter, and call to action, then works through the product schema, photography, validation, and creation. The finished story opens in a browser, showing the four-collection lineup. Long thinking and tool waits are shortened or removed; this is not a real-time speed benchmark.</p>
  </details>
</figure>

# Working outside my local setup

Inside the Forward repository, the skill can use the full development and validation tools. The deployed standalone version works without repository access, carrying the schema, examples, design references, and icon rules with it.

I release dated versions with a changelog, and CI publishes each release. Changes to rendered output are marked as breaking so teammates know to re-test.

With the Dispatch MCP available, Claude can save the narrative and return a shareable experience. A teammate can go from working through a story to sharing it without moving the result into a code deployment.

Editing needed some attention too. Early narratives were treated as complete files, so changing one page could mean resending the whole experience.

I introduced stable identifiers for sections and groups and connected the skill to targeted MCP actions. Claude can now update one group or section, and Dispatch checks the complete narrative again before saving. A small revision can stay small, with the rest of the work left intact.

<figure class="slice-film">
  <video controls muted playsinline data-play-in-view preload="none" width="1920" height="1380" poster="./skill-revise-narrative-poster.jpg" aria-label="Revising a Forward narrative through Claude" aria-describedby="skill-revise-narrative-caption">
    <source src="./skill-revise-narrative.mp4" type="video/mp4">
    <a href="./skill-revise-narrative.mp4">Download the narrative revision recording</a>.
  </video>
  <figcaption id="skill-revise-narrative-caption" class="portfolio-figure-label">Revise the story through conversation · 33 sec · Expanding four collections to nine while keeping the shareable link. Silent, edited fictional demo; accelerated passages are labeled.</figcaption>
  <details class="slice-film-description">
    <summary>Read the video description</summary>
    <p>The original narrative has four product collections. James asks Claude to make it nine. After shortened excerpts of building and validation, Claude confirms that the same shareable link now contains nine collections and lists the changes. The browser shows new product sections including Nimbus Drop, Verdant, and Cascade Cluster. The recording demonstrates a conversational revision and the rendered result; it does not expose the underlying edit payload. Long waits and unrelated browsing are removed.</p>
  </details>
</figure>


# Learning from what people kept correcting

Once teammates were using the skill, we reviewed their Claude sessions to see what they repeatedly corrected or asked it to do differently. I started keeping those observations linked to the narratives they came from, grouping recurring issues, and tracking them until we’d addressed them.

One person’s preference doesn’t automatically become a rule. I need to work out whether a correction belongs in the skill’s guidance, in validation, or in the platform itself.

![The improvement loop moves from real team sessions to specific observations, synthesized patterns, the appropriate system layer, and a maintained release.](./continuous-improvement-loop.svg)

Chart widths and colors were a useful example. Teammates kept having to correct them. We made charts responsive and improved their defaults, which let the skill become simpler too. There was less to explain because the charts behaved better to begin with.

## Helping the chart say something

Another recurring issue was that a chart could show the right data without making the important comparison clear. The product already supported richer styling, but AI-authored narratives weren’t consistently using it.

I added a pattern that connects the headline to the chart: write the headline around the insight, use the same emphasis color on the relevant words and bar, and give that bar a striped treatment. Those details help the reader see which comparison matters.

![Synthetic narrative page demonstrating a concise colored headline connected to a striped highlight bar in the chart.](./bar-insight-pattern.svg)

Other recurring fixes became guidance for choosing appropriate photography and checking that an icon actually exists in the product’s Font Awesome kit. Each correction is small, but keeping it in the skill or fixing the default means we don’t have to keep making it in individual narratives.

# What changed

Teammates now create and revise sales demonstrations and design prototypes directly through Claude. A process that depended on me and could take multiple days is something the team can do themselves.

<figure class="slice-film">
  <video controls muted playsinline data-play-in-view preload="none" width="1920" height="1500" poster="./skill-team-narratives-poster.jpg" aria-label="Browsing narratives across team workspaces" aria-describedby="skill-team-narratives-caption">
    <source src="./skill-team-narratives.mp4" type="video/mp4">
    <a href="./skill-team-narratives.mp4">Download the team narrative gallery recording</a>.
  </video>
  <figcaption id="skill-team-narratives-caption" class="portfolio-figure-label">What the team made · 23 sec · Silent recording at normal speed. Workspace names and list details obscured.</figcaption>
  <details class="slice-film-description">
    <summary>Read the video description</summary>
    <p>In Forward’s review tool, switching between team workspaces changes the list of available narratives. Selecting entries opens phone previews with distinct visual treatments: a lighting-company product story, an economic outlook with a section menu, healthcare and banking examples with highlighted figures and a quiz, and a hospitality benchmark narrative. Workspace names and narrative-list details are obscured. The sequence shows a range of created examples; it is not a count of all narratives or a measure of customer outcomes.</p>
  </details>
</figure>

I don’t have a precise time-savings figure. Narrative creation and iteration are now the fastest part of the workflow, though. More of the work is in understanding the prospect, deciding what matters to their audience, and shaping the story.

# What I’m learning

Sharing the skill was the start of an ongoing process. I still need to watch how people use it, keep examples of what goes wrong, and decide where to make a change. Sometimes that means better guidance. Sometimes it means fixing a default so the instruction is no longer needed.

The useful part is giving teammates more time for the prospect and the story, with less time spent getting a narrative published.
