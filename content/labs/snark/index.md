---
title: Snark
date: '2026-11-13T18:00:00Z'
summary: Arc was going away, but the best parts didn’t have to.
kind: Chrome extension
tags: [AI, design, code]
draft: false
featured: true
cover: ./overview.png
---

<figure class="lab-attachment">
  <video controls muted loop playsinline data-play-in-view preload="none" width="1920" height="1080" poster="./video-poster.jpg" aria-label="Snark product demo: switching spaces and finding saved tabs with search">
    <source src="./snark-demo.mp4" type="video/mp4">
    <a href="./snark-demo.mp4">Watch the Snark product demo</a>
  </video>
  <figcaption>Codex generated this demo video. Pretty good for a first pass, and it works for now. Note to self: record my own when I have a little more time.</figcaption>
</figure>

I wanted to keep the parts of Arc I used every day: spaces, pinned bookmark tabs, and the little niceties that made the sidebar feel right. So I worked with Claude to build them into a Chrome extension in a week of evenings.

[Get Snark on the Chrome Web Store](https://chromewebstore.google.com/detail/snark/bffjpilpobpmcgfnbneibbomaecbmjoi) · [Fork it on GitHub](https://github.com/03stories/snark)

## The sidebar we all loved

If you used Arc, this should feel familiar. Spaces, folders, pinned bookmark tabs, and a right-click menu for duplicating tabs and other little conveniences. I focused on the parts I liked best and wanted to keep using.

![Snark store image showing a saved launch-plan pin, navigating away from it, and returning to its original page](./pinned-tabs.png)

I left most of the design theming behind, but kept colors for spaces. When I'm swiping between them, that color is a useful reminder of where I am.

One Arc shortcut I used all the time was copying the current URL. I made sure that worked here too, with a shortcut you can customize in settings.

Search brings pins, folders, and spaces together. Snark works locally, without an account or backend. The [privacy policy](https://github.com/03stories/snark/blob/main/PRIVACY.md) explains storage and the optional connections.

## A week of evenings with Claude

I worked with Claude in Cowork: describe a change, sometimes mark up a screenshot, reload in Chrome, and try it. I decided what I wanted and how it should feel; Claude handled the code, tests, and release materials. Most of the decisions came from using it in my own browser.

## Letting an agent help organize

This started with getting my bookmarks out of Arc and into Snark. Claude translated and cleaned up the exported bookmarks along the way.

That became a useful little interface of its own: an optional agent folder on my computer's local filesystem. Snark writes its state there, and an agent can leave commands to update the bookmarks. I can tell Claude what to change and see those changes in the sidebar.

![Snark store image explaining the agent folder: connect a local folder, ask an AI to organize tabs, then review the changes in the sidebar](./agent-folder.png)

What started as a way to move bookmarks between browsers became a simple way to bring any model I want to organizing and editing them. Just connect a local folder and let an agent work there.

## Shipping was part of the experiment

The store images use the extension's actual UI with made-up demo data. Claude rendered that UI, composed the screenshots, and captured them in Chrome. It also prepared the package, listing copy, privacy policy, and permission explanations. I handled the developer account and final submission.

I shipped it to the Chrome Web Store with 55 automated tests and now run it in two real profiles. Daily use surfaced things a polished screenshot couldn't, including a folder-move data-loss bug and reconnect prompts. Staying close to the working product made those issues visible.

The thing that stays with me is how quickly this happened. A product I loved was going away. With a little thought about the parts I wanted to keep and a week of evenings with Claude, I had a useful tool I'll use every day. I didn't need a whole software company to keep those things available to me. That's the magic of how AI is changing things.
