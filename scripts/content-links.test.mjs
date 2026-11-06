import test from 'node:test';
import assert from 'node:assert/strict';
import { externalContentLinks } from './content-links.mjs';

test('external links open separately and preserve existing rel tokens', () => {
  const output = externalContentLinks('<a href="https://example.com" rel="nofollow">Example</a><a href=\'//example.org\'>Other</a>');
  assert.match(output, /rel="nofollow noopener noreferrer" target="_blank"/);
  assert.match(output, /href="\/\/example.org" target="_blank" rel="noopener noreferrer"/);
});

test('internal links, contact links, and explicit targets retain their behavior', () => {
  for (const href of ['/projects', './film.mp4', '#aside', 'mailto:hello@example.com', 'https://jameslytle.com/about', 'https://www.jameslytle.com/about', 'https://03stories.github.io/jameslytle.com/']) {
    assert.doesNotMatch(externalContentLinks(`<a href="${href}">Link</a>`), /target=/);
  }
  assert.match(externalContentLinks('<a href="https://example.com" target="_self">Example</a>'), /target="_self"/);
});

test('raw media markup survives and processing is idempotent', () => {
  const input = '<figure><video controls muted playsinline data-play-in-view><source src="./film.mp4" type="video/mp4"><track kind="captions" src="./film.vtt"></video><figcaption><a href="https://example.com">Source</a></figcaption></figure>';
  const output = externalContentLinks(input);
  assert.match(output, /data-play-in-view/);
  assert.match(output, /<track kind="captions" src="\.\/film.vtt">/);
  assert.equal(externalContentLinks(output), output);
});
