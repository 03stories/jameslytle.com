---
title: "Forward / Insights Recap"
date: "2026-08-15T12:00:00"
headline: "Personalized customer-impact stories at scale"
client: "Juice Analytics"
tags:
  - "Product"
  - "AI"
  - "UX"
  - "Frontend"
cover: ./forward-insights-recap-home.png
summary: "I originated Forward, a multi-tenant platform for personalized customer narratives, and led its product direction, recipient experience, narrative AI system, and generation pipeline from MVP through the first paid production release."
draft: false
---

[Forward](https://www.insightsrecap.com/) is a multi-tenant platform that helps customer-success teams turn product data into personalized, mobile-first narratives for every customer—not only the accounts with a dedicated CSM and a custom deck.

I originated the product inside Juice Analytics, took it from concept through MVP deployment, and pitched the first client proposal, which became a paid pilot and the first production campaign. I led product direction and built the frontend, a [Claude skill](/projects/forward-narrative-skill) for drafting and validating narratives, and the generation pipeline. Senior engineers built the backend services and owned frontend testing; I collaborated on the direction of each platform capability and often built its frontend counterpart. I also led go-to-market and business operations, including the full marketing website.

<figure class="slice-film">
  <video controls muted loop playsinline data-play-in-view preload="none" width="1920" height="1394" poster="./forward-marketing-site-poster.jpg" aria-label="The Forward marketing website" aria-describedby="forward-marketing-caption">
    <source src="./forward-marketing-site.mp4" type="video/mp4">
    <a href="./forward-marketing-site.mp4">Download the Forward marketing website recording</a>.
  </video>
  <figcaption id="forward-marketing-caption" class="portfolio-figure-label">The Forward marketing website · 25 sec · Silent video.</figcaption>
  <details class="slice-film-description">
    <summary>Read the video description</summary>
    <p>The homepage headline types out “Your customers deserve their own Campaign in Review,” beside a phone playing a live example narrative for a sample company. Scrolling reaches a before-and-after section contrasting a dense annual PDF report with the same results told as a narrative.</p>
  </details>
</figure>

# The customer-success gap

Before Forward, our clients struggled to communicate their product's positive impact at scale. CSMs could give top accounts individual attention, but medium and long-tail customers were often underserved. Even among accounts receiving a year-end touchpoint, the quality varied from a basic email or check-in call to a manually assembled deck.

That manual work could take hours. More importantly, customers were left to infer the value they received. The opportunity was not simply to automate a report; it was to make ROI feel personal, clear, and worth sharing without multiplying the workload of the customer-success team.

<figure class="slice-film">
  <video controls muted playsinline data-play-in-view preload="none" width="1920" height="1224" poster="./forward-narrative-walkthrough-poster.jpg" aria-label="A Forward narrative from a recipient's point of view" aria-describedby="forward-walkthrough-caption">
    <source src="./forward-narrative-walkthrough.mp4" type="video/mp4">
    <a href="./forward-narrative-walkthrough.mp4">Download the narrative walkthrough recording</a>.
  </video>
  <figcaption id="forward-walkthrough-caption" class="portfolio-figure-label">A recipient’s narrative on desktop · 1 min 16 sec · Silent video. Anonymized sample data.</figcaption>
  <details class="slice-film-description">
    <summary>Read the video description</summary>
    <p>A year-in-review narrative for a sample early-education organization opens with an animated “What. A. Year!” title card. The recipient moves through sections with full-bleed photography: a Documentation section that names standout teachers, then Outcomes, where Literacy and Mathematics appear as shareable, downloadable badges.</p>
  </details>
</figure>

# One campaign, built as a platform

The first client engagement proved the idea, but Forward was designed to run the same way for any customer-success team, audience, or reporting period.

- **A workspace for every client team.** Each team works in its own isolated workspace, with separate roles for campaign managers and narrative authors.
- **A repeatable campaign lifecycle.** Upload a generated run, issue a link for each recipient, send, and track.
- **Three ways to create narratives.** Batch generation from the pipeline, one-off standalone narratives, and MCP access so AI assistants such as Claude can author narratives directly inside a workspace.
- **Privacy matched to the audience.** Links can be open or bound to their recipient. I set the initial direction for the email-based bound model: the first open claims a link, and the recipient unlocks other devices by proving access to their inbox—no single sign-on required.
- **Engagement that flows back.** Sessions, completions, and in-narrative responses return to the team that sent them.

# Decision 1: Keep exploration out of the experience

An early client needed permission-aware targeting for different organizational units. One plausible solution was a query-backed picker inside the product, allowing users to filter and switch among versions of a narrative.

I decided against it.

Forward was intended to be lightweight, celebratory, and easy to finish—not another data-exploration interface. Adding filtering would shift the experience from receiving a coherent story to operating a reporting tool. It would also weaken a useful technical constraint: each narrative was pre-generated and self-contained, so viewing one never queried customer data—less to secure, and simpler to host.

We moved audience targeting upstream to the sent emails. Recipients opened the right narrative directly, while the product preserved a focused beginning-to-end experience. That became a platform rule: targeting happens before delivery, not inside the narrative. More interaction could come later, but it would have to strengthen the story rather than turn it into a dashboard.

# Decision 2: Use AI to explore; use an approved system to scale

Personalizing thousands of narratives introduced a more consequential choice: allow an AI model to generate copy freely at production scale, or build a system whose output could be understood and approved before generation.

I rejected unreviewed generative text at scale. Prompt guardrails alone did not provide the oversight we needed.

Instead, AI accelerated narrative exploration and helped define data-based conditions. Humans accepted the stylistic direction and overall experience, and the resulting template—every narrative path and the conditions that select it—was exported for review before anything was generated. Production generation made zero model calls.

This separated creative exploration from production behavior. Once the narrative system was approved, the pipeline could generate thousands of personalized stories without requiring a person to review every individual output.

![How Forward generates narratives: AI helps draft a template once, people review every path, and a deterministic engine applies it to every customer](./forward-generation-system.svg)

# A system built to generate at scale

The pipeline is built for campaign-scale runs; the first production campaign processed roughly 13,000 narratives. Quality gates written into each template excluded or flagged stories without enough meaningful material; 9,772 passed and were handed to the client to send.

Three choices made that volume trustworthy:

- **Deterministic generation.** The pipeline applies approved templates to each customer's data row. The same input always produces the same story, and test suites can assert on the output.
- **One schema, everywhere.** The narrative format is defined once in TypeScript and published as a contract, so the player, the pipeline, and the Python backend validate against the same definition.
- **Internals stay internal.** Template logic and authoring notes are stripped before release, so recipients see the story, not the rules that selected it.

<figure class="slice-film">
  <video controls muted playsinline data-play-in-view preload="none" width="1920" height="1224" poster="./forward-devnav-run-qa-poster.jpg" aria-label="Spot-checking a generated run in Forward's review tool" aria-describedby="forward-devnav-caption">
    <source src="./forward-devnav-run-qa.mp4" type="video/mp4">
    <a href="./forward-devnav-run-qa.mp4">Download the run review recording</a>.
  </video>
  <figcaption id="forward-devnav-caption" class="portfolio-figure-label">Spot-checking a generated run · 45 sec · Silent video. Any narrative in a run, including flagged ones, opens in desktop, tablet, or phone view. Anonymized sample data.</figcaption>
  <details class="slice-film-description">
    <summary>Read the video description</summary>
    <p>A review panel lists the 85 narratives in a sample run, with each customer’s status, section count, and page count. Filters narrow the list by quality flags such as “more teachers than students.” Selecting a flagged narrative shows which template groups it used, and switching to phone view previews the same story in a phone frame.</p>
  </details>
</figure>

# Evidence from the first production campaign

The client sent the links directly, so measurement starts when a recipient opens a narrative. Of the 1,448 narratives opened, 864 were finished—a 60% completion rate. Of those 864, 715 (83%) said yes when asked if they'd want one again next year.

The qualitative response matched the behavior. Users asked to receive narratives like this more often and reported that they had shared, or planned to share, them with colleagues.

Those results do not prove every downstream retention outcome. They do show that a scaled customer-success touchpoint could hold attention, create sharing intent, and leave most finishers wanting another one.

# What I would improve now

I would invest earlier in observability for AI-assisted content systems. Generation is no longer the hardest part. The limiting factor is understanding how content, conditions, and behavior change over time—and giving a team enough visibility to review those changes with confidence.

Forward reinforced a product principle I continue to use: AI writes the rules; code applies them. Trust at scale comes from a system people can read, review, and constrain.
