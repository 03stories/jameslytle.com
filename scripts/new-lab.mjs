import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const [slug, title, notesFile] = process.argv.slice(2);
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !title) {
  console.error('Usage: npm run lab:new -- my-exploration "My exploration" [transcript-or-notes.txt]');
  process.exit(1);
}
const notes = notesFile ? await readFile(notesFile, 'utf8') : 'What I tried, what happened, and what I want to remember.';
const directory = path.join('content/labs', slug);
await mkdir(directory, { recursive: true });
const post = matter.stringify(`\n${notes.trim()}\n`, {
  title, date: new Date().toISOString().slice(0, 10), summary: 'Add a one-sentence description.',
  kind: 'Exploration', tags: [], draft: true, featured: false
});
await writeFile(path.join(directory, 'index.md'), post, { flag: 'wx' });
console.log(`Draft created: ${directory}/index.md\nAdd artifacts, edit the notes, then set draft: false when ready for the PR preview.`);
