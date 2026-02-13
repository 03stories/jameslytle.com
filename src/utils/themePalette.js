const STORAGE_KEY = 'jl-site-theme-v1';

const ROOT_THEME_VARIABLES = [
  'color-bg',
  'color-text',
  'color-surface',
  'color-surface-strong',
  'color-border',
  'color-muted',
  'color-link',
  'color-focus',
  'color-skip-bg',
  'color-skip-text',
  'palette-1',
  'palette-2',
  'palette-3',
  'palette-4',
  'palette-5',
  'palette-6',
  'palette-7',
  'palette-8'
];

export const DEFAULT_THEME = {
  'color-bg': '#ffffff',
  'color-text': '#111111',
  'color-surface': '#ffffff',
  'color-surface-strong': '#f6f8fb',
  'color-border': '#dddddd',
  'color-muted': '#666666',
  'color-link': '#111111',
  'color-focus': '#0a66d6',
  'color-skip-bg': '#111111',
  'color-skip-text': '#ffffff',
  'palette-1': '#4B83C0',
  'palette-2': '#6CA6DF',
  'palette-3': '#A5C7EA',
  'palette-4': '#C9D7E5',
  'palette-5': '#778899',
  'palette-6': '#4F5E6C',
  'palette-7': '#2F3944',
  'palette-8': '#1B232D'
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toHex(value) {
  return value.toString(16).padStart(2, '0').toUpperCase();
}

function rgbToHex(r, g, b) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');
  const expanded = normalized.length === 3
    ? normalized.split('').map((item) => `${item}${item}`).join('')
    : normalized;

  const int = Number.parseInt(expanded, 16);

  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255
  };
}

function mixColors(hexA, hexB, ratio = 0.5) {
  const weight = clamp(ratio, 0, 1);
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);

  return rgbToHex(
    Math.round(a.r * (1 - weight) + b.r * weight),
    Math.round(a.g * (1 - weight) + b.g * weight),
    Math.round(a.b * (1 - weight) + b.b * weight)
  );
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const normalize = (channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b);
}

export function createThemeFromPalette(colors) {
  if (!Array.isArray(colors) || !colors.length) {
    return { ...DEFAULT_THEME };
  }

  const paletteHexes = colors
    .slice(0, 8)
    .map((color) => rgbToHex(color.r, color.g, color.b));

  while (paletteHexes.length < 8) {
    paletteHexes.push(DEFAULT_THEME[`palette-${paletteHexes.length + 1}`]);
  }

  const sortedByLum = [...paletteHexes].sort((a, b) => luminance(a) - luminance(b));
  const darkest = sortedByLum[0];
  const lightest = sortedByLum[sortedByLum.length - 1];
  const accent = paletteHexes[2] ?? paletteHexes[0];

  const colorBg = mixColors(lightest, '#FFFFFF', 0.82);
  const colorSurface = mixColors(lightest, '#FFFFFF', 0.74);
  const colorSurfaceStrong = mixColors(lightest, '#FFFFFF', 0.62);
  const colorText = mixColors(darkest, '#000000', 0.35);
  const colorBorder = mixColors(colorText, colorBg, 0.72);
  const colorMuted = mixColors(colorText, colorBg, 0.48);

  return {
    ...DEFAULT_THEME,
    'color-bg': colorBg,
    'color-text': colorText,
    'color-surface': colorSurface,
    'color-surface-strong': colorSurfaceStrong,
    'color-border': colorBorder,
    'color-muted': colorMuted,
    'color-link': accent,
    'color-focus': accent,
    'color-skip-bg': colorText,
    'color-skip-text': colorBg,
    'palette-1': paletteHexes[0],
    'palette-2': paletteHexes[1],
    'palette-3': paletteHexes[2],
    'palette-4': paletteHexes[3],
    'palette-5': paletteHexes[4],
    'palette-6': paletteHexes[5],
    'palette-7': paletteHexes[6],
    'palette-8': paletteHexes[7]
  };
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  for (const key of ROOT_THEME_VARIABLES) {
    const value = theme?.[key] ?? DEFAULT_THEME[key];
    root.style.setProperty(`--${key}`, value);
  }
}

export function saveTheme(theme) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
}

export function loadStoredTheme() {
  if (typeof window === 'undefined') return null;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;

    return ROOT_THEME_VARIABLES.reduce((acc, key) => {
      if (typeof parsed[key] === 'string' && parsed[key]) {
        acc[key] = parsed[key];
      }
      return acc;
    }, {});
  } catch {
    return null;
  }
}

export function hydrateThemeFromStorage() {
  const stored = loadStoredTheme();
  applyTheme(stored ? { ...DEFAULT_THEME, ...stored } : DEFAULT_THEME);
}

export function resetTheme() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(STORAGE_KEY);
  }

  applyTheme(DEFAULT_THEME);
}
