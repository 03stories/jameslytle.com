import { mkdir, readdir, readFile, rm, stat, writeFile, cp } from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, 'content');
const PUBLIC_CONTENT_ROOT = path.join(ROOT, 'public', 'content');
const OUTPUT_PROJECTS = path.join(ROOT, 'src', 'content', 'projects.json');
const OUTPUT_OTHER_THINGS = path.join(ROOT, 'src', 'content', 'other-things.json');

async function markdownToHtml(markdown) {
  const rendered = await remark().use(html).process(markdown);
  return String(rendered);
}

function rewriteAssetUrls(htmlText, publicBasePath) {
  return htmlText
    .replace(/src="\.\//g, `src="${publicBasePath}/`)
    .replace(/href="\.\//g, `href="${publicBasePath}/`);
}

function sortByDateDesc(items) {
  return [...items].sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}

async function copyFolderAssets(sourceDir, destinationDir) {
  await mkdir(destinationDir, { recursive: true });
  const names = await readdir(sourceDir);

  for (const name of names) {
    if (name === 'index.md') {
      continue;
    }

    const srcPath = path.join(sourceDir, name);
    const dstPath = path.join(destinationDir, name);
    const sourceStats = await stat(srcPath);

    if (sourceStats.isDirectory()) {
      await cp(srcPath, dstPath, { recursive: true });
      continue;
    }

    await cp(srcPath, dstPath);
  }
}

async function readCollection(collectionName) {
  const matches = await fg(`content/${collectionName}/*/index.md`, { cwd: ROOT });
  const entries = [];

  for (const match of matches) {
    const slug = path.basename(path.dirname(match));
    const filePath = path.join(ROOT, match);
    const sourceDir = path.dirname(filePath);
    const raw = await readFile(filePath, 'utf8');
    const parsed = matter(raw);
    const renderedHtml = await markdownToHtml(parsed.content || '');
    const publicBasePath = `/content/${collectionName}/${slug}`;
    const htmlWithAssetPaths = rewriteAssetUrls(renderedHtml, publicBasePath);

    entries.push({
      slug,
      ...parsed.data,
      html: htmlWithAssetPaths
    });

    const publicTarget = path.join(PUBLIC_CONTENT_ROOT, collectionName, slug);
    await copyFolderAssets(sourceDir, publicTarget);
  }

  return sortByDateDesc(entries);
}

async function main() {
  await mkdir(path.join(ROOT, 'src', 'content'), { recursive: true });
  await mkdir(PUBLIC_CONTENT_ROOT, { recursive: true });
  await rm(PUBLIC_CONTENT_ROOT, { recursive: true, force: true });
  await mkdir(PUBLIC_CONTENT_ROOT, { recursive: true });

  let projects = [];
  let otherThings = [];

  try {
    projects = await readCollection('projects');
  } catch {
    projects = [];
  }

  try {
    otherThings = await readCollection('other-things');
  } catch {
    otherThings = [];
  }

  await writeFile(OUTPUT_PROJECTS, JSON.stringify(projects, null, 2));
  await writeFile(OUTPUT_OTHER_THINGS, JSON.stringify(otherThings, null, 2));

  console.log(`Generated ${projects.length} projects and ${otherThings.length} albums.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
