import defaults from './tokens.json';
export { defaults };
export const storageKey = 'jl-portfolio-design-v1';
export const fonts = {
  geologica: { label: 'Geologica · current', stack: "'Geologica', 'Helvetica Neue', Arial, sans-serif" },
  inter: { label: 'Inter · neutral sans', stack: "'Inter', 'Helvetica Neue', Arial, sans-serif" },
  'source-sans': { label: 'Source Sans 3 · humanist sans', stack: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif" },
  system: { label: 'System sans · native', stack: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
  georgia: { label: 'Georgia · serif', stack: "Georgia, 'Times New Roman', serif" }
};
export const ranges = {
  'gutter-max': [20, 96], 'section-max': [56, 160], 'display-max': [52, 96],
  'body-size': [14, 20], 'image-radius': [0, 24], 'action-radius': [0, 16],
  'icon-gap': [0, 12], 'shadow-opacity': [0, 20]
};
export function validateTokens(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Use a JSON object of design tokens.');
  const result = { ...defaults };
  for (const [key, value] of Object.entries(input)) {
    if (!Object.hasOwn(defaults, key)) throw new Error(`Unknown token: ${key}`);
    if (key === 'font') {
      if (typeof value !== 'string' || !Object.hasOwn(fonts, value)) throw new Error('Choose a supported font option.');
    } else if (ranges[key]) {
      const [min, max] = ranges[key];
      if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) throw new Error(`${key} must be between ${min} and ${max}.`);
    } else if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) throw new Error(`${key} needs a six-digit hex color.`);
    result[key] = value;
  }
  return result;
}
export function tokenStyles(tokens) {
  return Object.fromEntries(Object.entries(tokens).map(([key, value]) => [`--portfolio-${key}`, key === 'font' ? fonts[value].stack : typeof value === 'number' ? `${value}${key === 'shadow-opacity' ? '%' : 'px'}` : value]));
}
export function readTokens() {
  try { return validateTokens(JSON.parse(localStorage.getItem(storageKey)) || defaults); } catch { return { ...defaults }; }
}
export function previewTokens(tokens) {
  try { localStorage.setItem(storageKey, JSON.stringify(tokens)); } catch { /* Preview still works without storage. */ }
  window.dispatchEvent(new CustomEvent('portfolio-design-change', { detail: tokens }));
}
export function contrast(a, b) {
  const lum = hex => {
    const channels = hex.slice(1).match(/../g).map(v => parseInt(v, 16) / 255).map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };
  const values = [lum(a), lum(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
