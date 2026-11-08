import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const DIST_SERVER_DIR = path.join(DIST_DIR, 'server');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');
const SERVER_ENTRY_PATH = path.join(DIST_SERVER_DIR, 'entry-server.js');
const BASE_PATH = normalizeBasePath(process.env.VITE_BASE_PATH || '/');

function normalizeBasePath(value) {
  if (!value) return '/';
  let base = value.trim();
  if (!base.startsWith('/')) base = `/${base}`;
  if (!base.endsWith('/')) base = `${base}/`;
  return base;
}

function withBase(route) {
  if (BASE_PATH === '/') {
    return route;
  }

  if (route === '/') {
    return BASE_PATH;
  }

  return `${BASE_PATH.slice(0, -1)}${route}`;
}

async function loadJson(relativePath) {
  const filePath = path.join(ROOT, relativePath);
  const raw = await readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

function routeToOutputPath(route) {
  if (route === '/') {
    return TEMPLATE_PATH;
  }

  const cleanRoute = route.replace(/^\/+/, '');
  return path.join(DIST_DIR, cleanRoute, 'index.html');
}

async function buildRouteList() {
  const projects = await loadJson('src/content/projects.json');
  const albums = await loadJson('src/content/other-things.json');
  const labs = await loadJson('src/content/labs.json');

  const routes = new Set([
    '/',
    '/projects',
    '/about',
    '/resume',
    '/other-things',
    '/other-things/design-docs',
    '/login',
    '/sandbox',
    '/design-system'
  ]);

  for (const project of projects) {
    routes.add(`/projects/${project.slug}`);
  }

  for (const album of albums) {
    routes.add(`/other-things/${album.slug}`);
  }

  for (const entry of labs) routes.add(`/other-things/${entry.slug}`);
  return [...routes];
}

async function main() {
  const template = await readFile(TEMPLATE_PATH, 'utf8');
  const routes = await buildRouteList();
  const serverModule = await import(pathToFileURL(SERVER_ENTRY_PATH).href);

  for (const route of routes) {
    const appHtml = serverModule.render(withBase(route));
    const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    const outputPath = routeToOutputPath(route);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }

  const labs = await loadJson('src/content/labs.json');
  const origin = process.env.SITE_ORIGIN || 'https://03stories.github.io';
  const absolute = route => new URL(withBase(route), origin).href;
  const xml = value => String(value).replace(/[<>&"']/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[character]));
  const items = labs.map(entry => `<item><title>${xml(entry.title)}</title><link>${xml(absolute(`/other-things/${entry.slug}`))}</link><guid>${xml(absolute(`/other-things/${entry.slug}`))}</guid><description>${xml(entry.summary)}</description>${entry.date ? `<pubDate>${new Date(entry.date).toUTCString()}</pubDate>` : ''}</item>`).join('');
  await writeFile(path.join(DIST_DIR, 'lab.xml'), `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>James Lytle — Lab</title><link>${xml(absolute('/other-things'))}</link><description>Things I’m making, trying, and figuring out.</description>${items}</channel></rss>`);

  await rm(DIST_SERVER_DIR, { recursive: true, force: true });
  console.log(`Prerendered ${routes.length} routes.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
