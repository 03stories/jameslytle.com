import fg from 'fast-glob';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DIST_GLOB = 'dist/**/*.html';

function findMissingAltImages(html) {
  return html.match(/<img(?![^>]*\salt=)[^>]*>/gi) || [];
}

async function auditHtmlFile(filePath) {
  const html = await readFile(filePath, 'utf8');
  const errors = [];

  if (!/<html[^>]*lang=/i.test(html)) {
    errors.push('Missing `lang` attribute on <html>.');
  }

  if (!/href="#main-content"/i.test(html)) {
    errors.push('Missing skip link to #main-content.');
  }

  if (!/<main[^>]*id="main-content"/i.test(html)) {
    errors.push('Missing <main id="main-content"> landmark.');
  }

  const missingAltImages = findMissingAltImages(html);
  if (missingAltImages.length) {
    errors.push(`Found ${missingAltImages.length} image(s) without alt text.`);
  }

  return errors;
}

async function main() {
  const htmlFiles = await fg(DIST_GLOB, { cwd: ROOT, absolute: true });
  const failures = [];

  for (const filePath of htmlFiles) {
    const errors = await auditHtmlFile(filePath);
    if (errors.length) {
      failures.push({
        filePath: path.relative(ROOT, filePath),
        errors
      });
    }
  }

  if (!htmlFiles.length) {
    console.error('No HTML files found in dist/. Run `npm run build` first.');
    process.exit(1);
  }

  if (failures.length) {
    for (const failure of failures) {
      console.error(`\n${failure.filePath}`);
      for (const error of failure.errors) {
        console.error(`- ${error}`);
      }
    }
    process.exit(1);
  }

  console.log(`Accessibility audit passed for ${htmlFiles.length} HTML files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
