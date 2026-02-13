import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const LEGACY_ALBUMS_ROOT =
  '/Users/jameslytle/Library/Mobile Documents/com~apple~CloudDocs/Documents/repos/jl-portfolio-site/content/other-things';
const NEW_ALBUMS_ROOT = path.join(process.cwd(), 'content', 'other-things');

function parseLegacySections(input) {
  const sections = {};
  const normalized = input.replace(/\r\n/g, '\n');
  const blocks = normalized.split('\n\n----\n\n');

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    const firstColon = trimmed.indexOf(':');
    if (firstColon === -1) continue;
    const key = trimmed.slice(0, firstColon).trim();
    const value = trimmed.slice(firstColon + 1).trim();
    sections[key] = value;
  }

  return sections;
}

function stripListMarker(value = '') {
  return value.replace(/^\-\s*/, '').trim();
}

function findImageFiles(names) {
  return names.filter((name) => /\.(png|jpe?g|gif|webp|svg)$/i.test(name));
}

function parseInlineOptions(payload) {
  const optionPattern = /([a-zA-Z-]+):\s*([\s\S]*?)(?=\s+[a-zA-Z-]+:\s*|$)/g;
  const options = {};
  let match = optionPattern.exec(payload);

  while (match) {
    options[match[1]] = match[2].trim();
    match = optionPattern.exec(payload);
  }

  return options;
}

function convertKirbyLinks(text = '') {
  return text.replace(/\(link:\s*([^)]+)\)/g, (_, payload) => {
    const options = parseInlineOptions(`link:${payload}`);
    const url = options.link || '';
    const label = options.text || url;
    return url ? `[${label}](${url})` : label;
  });
}

function toSlug(legacyFolderName) {
  return legacyFolderName.replace(/^\d+_/, '');
}

async function importAlbum(legacyFolderName) {
  const legacyDir = path.join(LEGACY_ALBUMS_ROOT, legacyFolderName);
  const albumPath = path.join(legacyDir, 'album.txt');
  const slug = toSlug(legacyFolderName);
  const newDir = path.join(NEW_ALBUMS_ROOT, slug);

  const rawAlbum = await readFile(albumPath, 'utf8');
  const sections = parseLegacySections(rawAlbum);
  const names = await readdir(legacyDir);
  const imageFiles = findImageFiles(names);
  const coverFromText = stripListMarker(sections.Cover || '');
  const cover = coverFromText || imageFiles[0] || '';
  const title = sections.Title || slug;
  const description = convertKirbyLinks(sections.Description || '');

  await mkdir(newDir, { recursive: true });

  for (const name of names) {
    if (name === 'album.txt' || name.endsWith('.txt')) continue;
    await cp(path.join(legacyDir, name), path.join(newDir, name), { recursive: true });
  }

  const lines = ['---', `title: ${JSON.stringify(title)}`];
  if (cover) lines.push(`cover: ./${cover}`);
  if (imageFiles.length) {
    lines.push('images:');
    for (const image of imageFiles) lines.push(`  - ./${image}`);
  }
  lines.push('---', '');
  if (description) lines.push(description, '');

  await writeFile(path.join(newDir, 'index.md'), `${lines.join('\n')}\n`);
  return slug;
}

async function main() {
  const albums = process.argv.slice(2);
  if (!albums.length) {
    console.error('Usage: npm run import:albums -- <legacy-folder> [legacy-folder...]');
    process.exit(1);
  }

  const imported = [];
  for (const album of albums) {
    const slug = await importAlbum(album);
    imported.push(slug);
  }

  console.log(`Imported ${imported.length} albums: ${imported.join(', ')}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
