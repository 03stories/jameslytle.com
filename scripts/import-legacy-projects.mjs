import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const LEGACY_PROJECTS_ROOT =
  '/Users/jameslytle/Library/Mobile Documents/com~apple~CloudDocs/Documents/repos/jl-portfolio-site/content/1_projects';
const NEW_PROJECTS_ROOT = path.join(process.cwd(), 'content', 'projects');

function parseLegacySections(input) {
  const sections = {};
  const normalized = input.replace(/\r\n/g, '\n');
  const blocks = normalized.split('\n\n----\n\n');

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) {
      continue;
    }

    const firstColon = trimmed.indexOf(':');
    if (firstColon === -1) {
      continue;
    }

    const key = trimmed.slice(0, firstColon).trim();
    const value = trimmed.slice(firstColon + 1).trim();
    sections[key] = value;
  }

  return sections;
}

function stripListMarker(value = '') {
  return value.replace(/^\-\s*/, '').trim();
}

function isLegacyReference(value = '') {
  return /^(file|page|user):\/\//i.test(value);
}

function normalizeDate(dateText = '') {
  const matched = dateText.match(/^(\d{4}-\d{2}-\d{2})/);
  return matched ? matched[1] : '';
}

function normalizeTags(tagText = '') {
  return tagText
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
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

function convertKirbyTextToMarkdown(text = '') {
  let output = text;

  output = output.replace(/\(link:\s*([^)]+)\)/g, (_, payload) => {
    const options = parseInlineOptions(`link:${payload}`);
    const url = options.link || '';
    const label = options.text || url;

    if (!url) {
      return label;
    }

    return `[${label}](${url})`;
  });

  output = output.replace(/\(image:\s*([^)]+)\)/g, (_, payload) => {
    const options = parseInlineOptions(`image:${payload}`);
    const imagePath = options.image || '';
    const caption = options.caption || '';
    const alt = caption || path.basename(imagePath, path.extname(imagePath));

    if (!imagePath) {
      return '';
    }

    return `![${alt}](./${imagePath})`;
  });

  output = output.replace(/{{\s*gallery\s*}}/gi, '_Gallery placeholder from legacy content._');
  output = output.replace(/<\/br>/gi, '');
  output = output.replace(/\n{3,}/g, '\n\n');

  return output.trim();
}

function toSlug(legacyFolderName) {
  return legacyFolderName.replace(/^\d{8}_/, '');
}

function toFrontmatter(sections, slug) {
  const title = sections.Title || slug;
  const date = normalizeDate(sections.Date || '');
  const headline = sections.Headline || '';
  const client = sections.Client || '';
  const tags = normalizeTags(sections.Tags || '');
  const coverRaw = stripListMarker(sections.Cover || '');
  const clientLogoRaw = stripListMarker(sections['Client-logo'] || '');
  const cover = coverRaw && !isLegacyReference(coverRaw) ? coverRaw : '';
  const clientLogo = clientLogoRaw && !isLegacyReference(clientLogoRaw) ? clientLogoRaw : '';
  const summaryMatch = (sections.Text || '').match(/# Summary\s*([\s\S]*?)(?=\n# |\n\*Defining|\n\*Ideas|$)/i);
  const summary = summaryMatch
    ? convertKirbyTextToMarkdown(summaryMatch[1].replace(/\n+/g, ' ').trim())
    : '';

  const lines = ['---'];
  lines.push(`title: ${JSON.stringify(title)}`);
  if (date) lines.push(`date: ${date}`);
  if (headline) lines.push(`headline: ${JSON.stringify(headline)}`);
  if (client) lines.push(`client: ${JSON.stringify(client)}`);
  if (tags.length) {
    lines.push('tags:');
    for (const tag of tags) lines.push(`  - ${JSON.stringify(tag)}`);
  }
  if (cover) lines.push(`cover: ./${cover}`);
  if (clientLogo) lines.push(`clientLogo: ./${clientLogo}`);
  if (summary) lines.push(`summary: ${JSON.stringify(summary)}`);
  lines.push('draft: false');
  lines.push('---');

  return lines.join('\n');
}

async function copyProjectAssets(legacyDir, newDir) {
  await mkdir(newDir, { recursive: true });
  const names = await readdir(legacyDir);

  for (const name of names) {
    if (name === 'note.txt' || name.endsWith('.txt')) {
      continue;
    }
    await cp(path.join(legacyDir, name), path.join(newDir, name), { recursive: true });
  }
}

async function importProject(legacyFolderName) {
  const legacyDir = path.join(LEGACY_PROJECTS_ROOT, legacyFolderName);
  const notePath = path.join(legacyDir, 'note.txt');
  const slug = toSlug(legacyFolderName);
  const newDir = path.join(NEW_PROJECTS_ROOT, slug);

  const noteText = await readFile(notePath, 'utf8');
  const sections = parseLegacySections(noteText);
  const markdownBody = convertKirbyTextToMarkdown(sections.Text || '');
  const frontmatter = toFrontmatter(sections, slug);
  const finalMarkdown = `${frontmatter}\n\n${markdownBody}\n`;

  await copyProjectAssets(legacyDir, newDir);
  await writeFile(path.join(newDir, 'index.md'), finalMarkdown);

  return slug;
}

async function main() {
  const projects = process.argv.slice(2);
  if (!projects.length) {
    console.error('Usage: npm run import:projects -- <legacy-folder> [legacy-folder...]');
    process.exit(1);
  }

  const imported = [];
  for (const project of projects) {
    const slug = await importProject(project);
    imported.push(slug);
  }

  console.log(`Imported ${imported.length} projects: ${imported.join(', ')}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
