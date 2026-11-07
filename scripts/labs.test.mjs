import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, access, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const build = path.resolve('scripts/build-content.mjs');
const create = path.resolve('scripts/new-lab.mjs');

test('Lab builds publish artifacts at preview paths and exclude drafts and their files', async () => {
  const cwd = await mkdtemp(path.join(tmpdir(), 'labs-test-'));
  try {
    for (const slug of ['published', 'private-draft']) await mkdir(path.join(cwd, 'content/labs', slug), { recursive: true });
    await writeFile(path.join(cwd, 'content/labs/published/index.md'), '---\ntitle: Test\nsummary: Test summary\ndate: 2026-11-07\nartifacts:\n  - type: html\n    title: Demo\n    url: ./demo.html\n---\n[Open demo](./demo.html)\n![Root image](/content/example.png)');
    await writeFile(path.join(cwd, 'content/labs/published/demo.html'), '<h1>Demo</h1>');
    await writeFile(path.join(cwd, 'content/labs/private-draft/index.md'), '---\ndraft: true\n---\nPRIVATE DRAFT');
    await writeFile(path.join(cwd, 'content/labs/private-draft/recording.mp3'), 'PRIVATE RECORDING');
    const result = spawnSync(process.execPath, [build], { cwd, env: { ...process.env, VITE_BASE_PATH: '/jameslytle.com/pr-preview/pr-123/' }, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const posts = JSON.parse(await readFile(path.join(cwd, 'src/content/labs.json')));
    assert.equal(posts.length, 1);
    assert.equal(posts[0].artifacts[0].url, '/jameslytle.com/pr-preview/pr-123/content/labs/published/demo.html');
    assert.match(posts[0].html, /href="\/jameslytle.com\/pr-preview\/pr-123\/content\/labs\/published\/demo.html"/);
    assert.match(posts[0].html, /src="\/jameslytle.com\/pr-preview\/pr-123\/content\/example.png"/);
    await access(path.join(cwd, 'public/content/labs/published/demo.html'));
    await assert.rejects(access(path.join(cwd, 'public/content/labs/private-draft')));
    await writeFile(path.join(cwd, 'content/labs/published/index.md'), '---\ntitle: Broken\n---');
    assert.notEqual(spawnSync(process.execPath, [build], { cwd }).status, 0, 'invalid published content should fail the build');
  } finally { await rm(cwd, { recursive: true, force: true }); }
});

test('draft command imports notes verbatim, defaults to draft, and never overwrites', async () => {
  const cwd = await mkdtemp(path.join(tmpdir(), 'labs-draft-'));
  try {
    await writeFile(path.join(cwd, 'notes.txt'), 'An unfinished thought.');
    const args = [create, 'test-notes', 'My thoughts', 'notes.txt'];
    assert.equal(spawnSync(process.execPath, args, { cwd }).status, 0);
    const post = await readFile(path.join(cwd, 'content/labs/test-notes/index.md'), 'utf8');
    assert.match(post, /draft: true/);
    assert.match(post, /An unfinished thought\./);
    assert.notEqual(spawnSync(process.execPath, args, { cwd }).status, 0);
    assert.equal(await readFile(path.join(cwd, 'content/labs/test-notes/index.md'), 'utf8'), post);
  } finally { await rm(cwd, { recursive: true, force: true }); }
});
