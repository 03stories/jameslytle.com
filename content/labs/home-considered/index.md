---
title: Considered
date: '2026-11-07'
summary: A writing prototype for connecting thoughts, keeping their context close, and exploring how changes affect the bigger picture.
kind: Interaction prototype
tags: [writing, interaction, code]
draft: false
featured: true
cover: ./overview.png
---
Considered is a prototype for thinking through connected writing. A phrase can lead to another thought, a source note, or an editable number. Open the connection beside what you're writing to keep its context in view.

The current starter notebook uses budgeting as an example. The design is about making those connections useful across whatever you're trying to understand.

[Try Considered](https://home-thoughts-james.fine-brush-9025.chatgpt.site/) — the prototype is public, and you can explore the notebook yourself.

[View the notebook screenshot](./overview.png).

## Follow a thought without losing your place

Clicking an inline link opens its note in a side panel automatically. In this example, I open spending, switch to priorities, and close the panel. The main paragraph stays in view throughout.

<figure class="lab-attachment">
  <video controls muted loop playsinline data-play-in-view preload="none" width="1280" height="800" poster="./linked-page.png" aria-label="Following inline links into the automatic side panel">
    <source src="./follow-a-link.mp4" type="video/mp4">
    <a href="./follow-a-link.mp4">Watch the linked-thought example</a>
  </video>
  <figcaption>A linked note opens beside the writing. <a href="./follow-a-link.mp4">Open the silent clip</a>.</figcaption>
</figure>

## Make a new connection while writing

Here I write a sentence, select “unexpected costs,” and create a linked page from that phrase. The new page opens beside the original, ready for a supporting note.

<figure class="lab-attachment">
  <video controls muted loop playsinline data-play-in-view preload="none" width="1280" height="800" poster="./create-linked-thought-poster.png" aria-label="Selecting a phrase and creating a linked page beside the writing">
    <source src="./create-a-linked-thought.mp4" type="video/mp4">
    <a href="./create-a-linked-thought.mp4">Watch the new-connection example</a>
  </video>
  <figcaption>Select a phrase, link it, and keep writing in the new note. <a href="./create-a-linked-thought.mp4">Open the silent clip</a>.</figcaption>
</figure>

## Work with a number in context

Numbers in the writing can be edited in place. This clip changes an illustrative monthly amount from $2,400 to $2,600 in a linked note.

<figure class="lab-attachment">
  <video controls muted loop playsinline data-play-in-view preload="none" width="1280" height="800" poster="./inline-number-poster.png" aria-label="Changing an illustrative inline amount from 2400 dollars to 2600 dollars">
    <source src="./edit-an-inline-number.mp4" type="video/mp4">
    <a href="./edit-an-inline-number.mp4">Watch the inline-number example</a>
  </video>
  <figcaption>Edit the amount without leaving the surrounding writing. <a href="./edit-an-inline-number.mp4">Open the silent clip</a>.</figcaption>
</figure>

## Learnings

- Inline linking with an automatic side panel feels seamless. It's nice to follow a thought while keeping the original writing in view.
- The UX of parent rewrites based on changes to sibling notes needs work.
- I need to try this more thoroughly on something real to put it through its paces.
