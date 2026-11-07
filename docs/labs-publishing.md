# Publishing to Lab

One exploration is one folder in `content/labs/`. Its short Markdown post gives the artifacts context; the artifacts can be files in that folder or links to work hosted elsewhere. The archive and Pinned section update automatically. Existing `/other-things` URLs stay stable.

## From phone or desktop

Send your repository-connected assistant the artifact, a screenshot if useful, and your rough notes. For recorded thoughts, use your phone's transcription or a tool that can read the recording, then supply the transcript. This site does not record or transcribe audio itself.

Use this instruction:

> Draft a Lab post from these notes/transcribed thoughts and artifacts. Keep my voice and write only what the material supports: what I tried, what happened, and what I want to remember. Don't invent outcomes or dates. Add useful links and descriptive image alternatives. Keep recordings and raw transcripts private unless I explicitly ask to publish them. Create content/labs/<slug>/index.md, attach the artifacts I selected, and open a pull request for a preview. Set draft: false only for the post I want to preview publicly. Do not merge.

Open the PR preview on your phone or desktop, try the artifacts, and merge when satisfied. Merging deploys the post. GitHub's web editor can also edit these files directly; no local checkout is required.

`draft: true` excludes the post **and its folder's attachments** from generated JSON, routes, and public assets. It is not a private preview: set `draft: false` in a PR to see it on that public PR preview. GitHub source visibility follows repository visibility; drafts committed to this public repository are public source. Keep private notes and recordings outside the repo or in ignored `.lab-inbox/` locally. Do not put draft attachments in `public/`.

## Start locally

```sh
npm run lab:new -- color-study "A color study"
npm run lab:new -- color-study "A color study" .lab-inbox/transcript.txt
```

The command creates a draft without overwriting an existing post. It imports notes verbatim; use the instruction above to edit them into a post. To see a new entry in local development, run `npm run build:content` after editing it, then refresh `npm run dev`.

## Post format

The example below has four artifacts. It embeds the screenshot and video where they are discussed, links to the demo and reference from the prose.

```markdown
---
title: A color study
date: '2026-11-07T18:30:00Z'
summary: Exploring how a photograph can become a small palette.
kind: Creative experiment
tags: [color, code]
draft: false
featured: false
cover: ./preview.webp
---

I wanted to see how a photograph could become a small palette.
[Try the interactive study](./study.html).

## The first pass

The first version kept the sampled colors beside the photograph:

![Five sampled colors beside the source photograph](./preview.webp)

[Open the screenshot at full size](./preview.webp).

## Trying the interaction

The second version adds draggable samples. This recording shows the interaction:

<figure class="lab-attachment">
  <video controls playsinline preload="metadata" poster="./preview.webp" aria-label="Dragging color samples in the study">
    <source src="./walkthrough.mp4" type="video/mp4">
    <track kind="captions" src="./walkthrough.en.vtt" srclang="en" label="English" default>
    <a href="./walkthrough.mp4">Open the interaction recording</a>
  </video>
  <figcaption>Moving a sample updates the palette. <a href="./walkthrough.mp4">Open the video</a>.</figcaption>
</figure>

## Where it started

[This reference](https://example.com/reference) gave me the starting point.
I kept the photograph visible so I could see where each color came from.
```

The body uses ordinary Markdown links (`[label](./file.html)`) and images (`![description](./image.webp)`), plus HTML for inline video, audio, or iframe embeds. These point directly to the files; there is no special artifact-reference syntax. Local `./` paths work in production and PR previews. You can refer to the same artifact more than once without copying its file.

`cover` chooses the archive preview image. To show it in the post too, add it to the body.

For an HTML tool placed inside the body, use a titled, sandboxed iframe and keep an open link nearby:

```html
<figure class="lab-attachment">
  <iframe title="Interactive color study" src="./study.html"
    sandbox="allow-scripts allow-downloads" referrerpolicy="no-referrer"></iframe>
  <figcaption><a href="./study.html">Open the interactive study</a></figcaption>
</figure>
```

For a hosted app that needs sign-in or browser storage, use a direct link instead of a sandboxed embed.

`title` and `summary` are required for published entries. Set `date` to the intended publication time as an ISO 8601 timestamp with a timezone. The draft command fills in the current UTC time. Existing date-only values still work. The archive, Pinned section, and RSS feed sort newest first, with ties sorted by slug. Entries with an unknown date appear last and display “From the archives” where dates are shown.

`featured: true` adds the entry to Pinned. Use a few stable tags. A post can contain no artifacts at all. Markdown also supports inline images and links, using `./filename` for adjacent files. Never include secrets in HTML tools or posted transcripts.

Use descriptive alt text for images, include a transcript for audio, and provide captions for spoken video. Large media is better hosted externally to avoid growing the Git repository.

For silent interaction clips, add `muted loop playsinline data-play-in-view preload="none"` to the body’s `<video controls>` element. Like project-page videos, these play when at least 35% visible, pause when scrolled away, and stay paused when reduced motion is enabled. Keep controls available for manual playback.

The sandbox in the example enables scripts and downloads while restricting storage, same-origin access, popups, and navigation of the parent page. Link directly to tools that need those capabilities or whose host blocks embedding. A local standalone HTML file should use relative asset paths and avoid build steps where practical.

Keep variants as additional artifacts in the same post with meaningful labels. A follow-up post is useful when there is a new lesson to share. Pin only the explorations you want someone to encounter first. No publishing schedule is required.

## Check before merging

Run `npm run build` and `npm run a11y:check`. Check the preview on a narrow screen; play media, open files, and use each demo. Confirm alt text, captions, and attribution. Draft content and attachments must not appear in `dist/`.

## Feed

`lab.xml` is generated from published entries. Feed links respect `VITE_BASE_PATH`, including PR previews. `SITE_ORIGIN` defaults to `https://03stories.github.io`; set it to the new origin if hosting moves to a custom domain.
