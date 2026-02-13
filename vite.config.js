import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBasePath(value) {
  if (!value) return '/';
  let base = value.trim();
  if (!base.startsWith('/')) base = `/${base}`;
  if (!base.endsWith('/')) base = `${base}/`;
  return base;
}

export default defineConfig(() => ({
  base: normalizeBasePath(process.env.VITE_BASE_PATH || '/'),
  plugins: [react()]
}));
