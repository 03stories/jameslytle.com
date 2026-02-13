import { useEffect, useMemo, useRef, useState } from 'react';
import { applyTheme, createThemeFromPalette, resetTheme, saveTheme } from '../utils/themePalette';

const DEFAULT_IMAGE = '/content/other-things/photo-palette/default-photo.jpg';
const DEFAULT_SWATCHES = 8;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toHex(value) {
  return value.toString(16).padStart(2, '0').toUpperCase();
}

function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const lightness = (max + min) / 2;

  if (max === min) {
    return [0, 0, Math.round(lightness * 100)];
  }

  const delta = max - min;
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue;
  switch (max) {
    case rn:
      hue = (gn - bn) / delta + (gn < bn ? 6 : 0);
      break;
    case gn:
      hue = (bn - rn) / delta + 2;
      break;
    default:
      hue = (rn - gn) / delta + 4;
      break;
  }

  hue = Math.round(hue * 60);
  return [hue, Math.round(saturation * 100), Math.round(lightness * 100)];
}

function colorFormats(color, index) {
  const { r, g, b } = color;
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  const [h, s, l] = rgbToHsl(r, g, b);

  return {
    hex,
    rgb: `rgb(${r}, ${g}, ${b})`,
    hsl: `hsl(${h} ${s}% ${l}%)`,
    cssVar: `--palette-${index + 1}: ${hex};`
  };
}

function buildCopyOutput(colors, mode) {
  if (!colors.length) return '';

  if (mode === 'cssVars') {
    return colors
      .map((color, index) => {
        return colorFormats(color, index).cssVar;
      })
      .join('\n');
  }

  return colors
    .map((color, index) => {
      const formatted = colorFormats(color, index);
      return formatted[mode] ?? formatted.hex;
    })
    .join('\n');
}

function extractPalette(image, desiredColors) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { willReadFrequently: true });

  if (!context) return [];

  const maxDimension = 240;
  const scale = Math.min(maxDimension / image.width, maxDimension / image.height, 1);
  canvas.width = Math.max(1, Math.floor(image.width * scale));
  canvas.height = Math.max(1, Math.floor(image.height * scale));

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const bins = new Map();

  for (let i = 0; i < pixels.length; i += 4) {
    const alpha = pixels[i + 3];
    if (alpha < 120) continue;

    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    const qr = Math.round(r / 24) * 24;
    const qg = Math.round(g / 24) * 24;
    const qb = Math.round(b / 24) * 24;
    const key = `${qr},${qg},${qb}`;

    const bucket = bins.get(key) ?? { count: 0, rTotal: 0, gTotal: 0, bTotal: 0 };
    bucket.count += 1;
    bucket.rTotal += r;
    bucket.gTotal += g;
    bucket.bTotal += b;
    bins.set(key, bucket);
  }

  return [...bins.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, clamp(desiredColors, 3, 14))
    .map((bucket) => ({
      r: Math.round(bucket.rTotal / bucket.count),
      g: Math.round(bucket.gTotal / bucket.count),
      b: Math.round(bucket.bTotal / bucket.count),
      count: bucket.count
    }));
}

export default function PhotoPaletteToolPage() {
  const [imageSrc, setImageSrc] = useState(DEFAULT_IMAGE);
  const [swatchCount, setSwatchCount] = useState(DEFAULT_SWATCHES);
  const [palette, setPalette] = useState([]);
  const [copyMode, setCopyMode] = useState('cssVars');
  const [copyStatus, setCopyStatus] = useState('');
  const [imageLabel, setImageLabel] = useState('Default image');
  const imageRef = useRef(null);

  useEffect(() => {
    const nextImage = new Image();
    nextImage.crossOrigin = 'anonymous';
    nextImage.onload = () => {
      setPalette(extractPalette(nextImage, swatchCount));
    };
    nextImage.src = imageSrc;
  }, [imageSrc, swatchCount]);

  useEffect(() => {
    if (!palette.length) return;

    const theme = createThemeFromPalette(palette);
    applyTheme(theme);
    saveTheme(theme);
  }, [palette]);

  useEffect(() => {
    return () => {
      if (imageRef.current) {
        URL.revokeObjectURL(imageRef.current);
      }
    };
  }, []);

  const copyValue = useMemo(() => buildCopyOutput(palette, copyMode), [palette, copyMode]);

  async function handleCopy(value) {
    if (!value) return;

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const fallbackInput = document.createElement('textarea');
    fallbackInput.value = value;
    fallbackInput.setAttribute('readonly', '');
    fallbackInput.style.position = 'absolute';
    fallbackInput.style.left = '-9999px';
    document.body.appendChild(fallbackInput);
    fallbackInput.select();
    document.execCommand('copy');
    document.body.removeChild(fallbackInput);
  }

  async function onCopyAll() {
    try {
      await handleCopy(copyValue);
      setCopyStatus(`Copied ${copyMode} output.`);
    } catch {
      setCopyStatus('Could not copy automatically.');
    }
  }

  async function onCopySingle(color, index) {
    const value = colorFormats(color, index)[copyMode] ?? colorFormats(color, index).hex;

    try {
      await handleCopy(value);
      setCopyStatus(`Copied color ${index + 1}.`);
    } catch {
      setCopyStatus('Could not copy automatically.');
    }
  }

  function onFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    if (imageRef.current) {
      URL.revokeObjectURL(imageRef.current);
    }

    imageRef.current = objectUrl;
    setImageLabel(file.name);
    setImageSrc(objectUrl);
  }

  function onResetTheme() {
    resetTheme();
    setImageSrc(DEFAULT_IMAGE);
    setImageLabel('Default image');
    setCopyStatus('Theme reset to site default.');
  }

  return (
    <section className="palette-tool" aria-label="Photo palette tool">
      <h3>Photo Palette Utility</h3>
      <p>
        Upload a photo, extract dominant colors, and copy palette values in CSS-ready formats.
        Generated palettes are automatically applied to the site and persisted between pages.
      </p>

      <div className="palette-tool-grid">
        <div className="card">
          <label htmlFor="palette-image-input">Choose photo</label>
          <input id="palette-image-input" type="file" accept="image/*" onChange={onFileChange} />
          <p className="meta">Current image: {imageLabel}</p>

          <label htmlFor="swatch-count">Number of colors: {swatchCount}</label>
          <input
            id="swatch-count"
            type="range"
            min="3"
            max="14"
            value={swatchCount}
            onChange={(event) => setSwatchCount(Number(event.target.value))}
          />

          <button type="button" onClick={onResetTheme}>
            Reset site theme
          </button>

          <img src={imageSrc} alt="Selected source for palette extraction" className="palette-preview-image" />
        </div>

        <div className="card">
          <label htmlFor="copy-mode">Copy format</label>
          <select
            id="copy-mode"
            value={copyMode}
            onChange={(event) => setCopyMode(event.target.value)}
          >
            <option value="cssVars">CSS variables</option>
            <option value="hex">Hex values</option>
            <option value="rgb">RGB values</option>
            <option value="hsl">HSL values</option>
          </select>

          <button type="button" onClick={onCopyAll} disabled={!palette.length}>
            Copy full palette
          </button>

          {copyStatus ? <p className="meta">{copyStatus}</p> : null}

          <div className="palette-swatches" role="list" aria-label="Extracted palette colors">
            {palette.map((color, index) => {
              const formatted = colorFormats(color, index);

              return (
                <div key={`${formatted.hex}-${index}`} className="palette-swatch-card" role="listitem">
                  <div
                    className="palette-chip"
                    style={{ backgroundColor: formatted.hex }}
                    aria-label={`Color ${index + 1}: ${formatted.hex}`}
                  />
                  <p>{formatted.hex}</p>
                  <p className="meta">{formatted.rgb}</p>
                  <button type="button" onClick={() => onCopySingle(color, index)}>
                    Copy this color
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
