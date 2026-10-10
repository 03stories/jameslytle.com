import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

function normalizeBasePath(value) {
  if (!value) return '/';
  let base = value.trim();
  if (!base.startsWith('/')) base = `/${base}`;
  if (!base.endsWith('/')) base = `${base}/`;
  return base;
}

export default defineConfig(() => {
  const passwordFile = new URL('./.resume-password.local', import.meta.url);
  const password = process.env.RESUME_PASSWORD || (existsSync(passwordFile) ? readFileSync(passwordFile, 'utf8').trim() : '');
  return ({
  define: { __RESUME_PASSWORD_HASH__: JSON.stringify(password ? createHash('sha256').update(password).digest('hex') : '') },
  base: normalizeBasePath(process.env.VITE_BASE_PATH || '/'),
  plugins: [react()]
  });
});
