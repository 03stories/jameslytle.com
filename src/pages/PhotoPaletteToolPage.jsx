import { useEffect, useMemo, useRef, useState } from 'react';
import { applyTheme, createThemeFromPalette, resetTheme, saveTheme } from '../utils/themePalette';
import defaultPhoto from '../../content/other-things/photo-palette/default-photo.jpg';

const DEFAULT_IMAGE = defaultPhoto;
const DEFAULT_SWATCHES = 8;
const MIN_SWATCHES = 3;
const MAX_SWATCHES = 14;
const MARKER_SIZE = 26;

const THEME_VAR_USAGE = [
  { variable: '--color-bg', source: 'color-bg', affects: 'body background and page canvas' },
  { variable: '--color-text', source: 'color-text', affects: 'default text, headings, and paragraph content' },
  { variable: '--color-surface', source: 'color-surface', affects: 'inputs, selects, and button surfaces' },
  {
    variable: '--color-surface-strong',
    source: 'color-surface-strong',
    affects: 'cards, content blocks, and featured surfaces'
  },
  { variable: '--color-border', source: 'color-border', affects: 'card outlines, table borders, and control borders' },
  { variable: '--color-muted', source: 'color-muted', affects: 'meta labels, low-emphasis helper text' },
  { variable: '--color-link', source: 'color-link', affects: 'link color and linked text accents' },
  { variable: '--color-focus', source: 'color-focus', affects: 'focus rings for keyboard navigation' },
  { variable: '--color-skip-bg', source: 'color-skip-bg', affects: 'skip-link background' },
  { variable: '--color-skip-text', source: 'color-skip-text', affects: 'skip-link text color' },
  ...Array.from({ length: 8 }, (_, index) => ({
    variable: `--palette-${index + 1}`,
    source: `palette-${index + 1}`,
    affects: `palette slot ${index + 1} used to derive the live site theme`
  }))
];

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

function markerPositionForIndex(index, total) {
  const cols = Math.ceil(Math.sqrt(total));
  const rows = Math.ceil(total / cols);
  const col = index % cols;
  const row = Math.floor(index / cols);

  return {
    x: (col + 0.5) / cols,
    y: (row + 0.5) / rows
  };
}

function createMarkers(total) {
  return Array.from({ length: total }, (_, index) => {
    const position = markerPositionForIndex(index, total);
    return {
      id: index + 1,
      x: position.x,
      y: position.y
    };
  });
}

function expandMarkers(previous, targetCount) {
  if (previous.length >= targetCount) {
    return previous.slice(0, targetCount).map((marker, index) => ({ ...marker, id: index + 1 }));
  }

  const next = [...previous];
  for (let index = previous.length; index < targetCount; index += 1) {
    const position = markerPositionForIndex(index, targetCount);
    next.push({ id: index + 1, x: position.x, y: position.y });
  }

  return next;
}

function samplePaletteFromMarkers(image, markers) {
  if (!image || !markers.length) return [];

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) return [];

  const maxDimension = 900;
  const scale = Math.min(maxDimension / image.width, maxDimension / image.height, 1);
  canvas.width = Math.max(1, Math.floor(image.width * scale));
  canvas.height = Math.max(1, Math.floor(image.height * scale));

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;

  const getColorAt = (x, y) => {
    const px = clamp(Math.floor(x * (canvas.width - 1)), 0, canvas.width - 1);
    const py = clamp(Math.floor(y * (canvas.height - 1)), 0, canvas.height - 1);

    let rTotal = 0;
    let gTotal = 0;
    let bTotal = 0;
    let samples = 0;

    for (let yOffset = -1; yOffset <= 1; yOffset += 1) {
      for (let xOffset = -1; xOffset <= 1; xOffset += 1) {
        const sx = clamp(px + xOffset, 0, canvas.width - 1);
        const sy = clamp(py + yOffset, 0, canvas.height - 1);
        const offset = (sy * canvas.width + sx) * 4;

        rTotal += pixels[offset];
        gTotal += pixels[offset + 1];
        bTotal += pixels[offset + 2];
        samples += 1;
      }
    }

    return {
      r: Math.round(rTotal / samples),
      g: Math.round(gTotal / samples),
      b: Math.round(bTotal / samples),
      count: 1
    };
  };

  return markers.map((marker) => getColorAt(marker.x, marker.y));
}

export default function PhotoPaletteToolPage() {
  const [imageSrc, setImageSrc] = useState(DEFAULT_IMAGE);
  const [swatchCount, setSwatchCount] = useState(DEFAULT_SWATCHES);
  const [markers, setMarkers] = useState(() => createMarkers(DEFAULT_SWATCHES));
  const [palette, setPalette] = useState([]);
  const [copyMode, setCopyMode] = useState('cssVars');
  const [copyStatus, setCopyStatus] = useState('');
  const [imageLabel, setImageLabel] = useState('Default image');
  const [loadedImage, setLoadedImage] = useState(null);
  const [dragMarkerId, setDragMarkerId] = useState(null);

  const imageRef = useRef(null);
  const annotationFrameRef = useRef(null);

  useEffect(() => {
    const nextImage = new Image();
    nextImage.crossOrigin = 'anonymous';
    nextImage.onload = () => {
      setLoadedImage(nextImage);
      setPalette(samplePaletteFromMarkers(nextImage, markers));
    };
    nextImage.onerror = () => {
      setLoadedImage(null);
      setPalette([]);
      setCopyStatus('Could not load source image.');
    };
    nextImage.src = imageSrc;
  }, [imageSrc]);

  useEffect(() => {
    if (!loadedImage) return;
    setPalette(samplePaletteFromMarkers(loadedImage, markers));
  }, [loadedImage, markers]);

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
  const themePreview = useMemo(() => createThemeFromPalette(palette), [palette]);

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

  function updateMarkerPosition(markerId, clientX, clientY) {
    const frame = annotationFrameRef.current;
    if (!frame) return;

    const bounds = frame.getBoundingClientRect();
    const nextX = clamp((clientX - bounds.left) / bounds.width, 0, 1);
    const nextY = clamp((clientY - bounds.top) / bounds.height, 0, 1);

    setMarkers((previous) =>
      previous.map((marker) =>
        marker.id === markerId
          ? {
              ...marker,
              x: nextX,
              y: nextY
            }
          : marker
      )
    );
  }

  function onMarkerPointerDown(event, markerId) {
    setDragMarkerId(markerId);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateMarkerPosition(markerId, event.clientX, event.clientY);
  }

  function onMarkerPointerMove(event, markerId) {
    if (dragMarkerId !== markerId) return;
    updateMarkerPosition(markerId, event.clientX, event.clientY);
  }

  function onMarkerPointerUp(event, markerId) {
    if (dragMarkerId === markerId) {
      setDragMarkerId(null);
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function onMarkerKeyDown(event, markerId) {
    const step = event.shiftKey ? 0.03 : 0.015;
    const movement = {
      ArrowUp: { x: 0, y: -step },
      ArrowDown: { x: 0, y: step },
      ArrowLeft: { x: -step, y: 0 },
      ArrowRight: { x: step, y: 0 }
    };

    const delta = movement[event.key];
    if (!delta) return;

    event.preventDefault();

    setMarkers((previous) =>
      previous.map((marker) =>
        marker.id === markerId
          ? {
              ...marker,
              x: clamp(marker.x + delta.x, 0, 1),
              y: clamp(marker.y + delta.y, 0, 1)
            }
          : marker
      )
    );
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
    setCopyStatus('');
  }

  function onResetTheme() {
    resetTheme();
    setImageSrc(DEFAULT_IMAGE);
    setImageLabel('Default image');
    setSwatchCount(DEFAULT_SWATCHES);
    setMarkers(createMarkers(DEFAULT_SWATCHES));
    setCopyStatus('Theme reset to site default.');
  }

  function onSwatchCountChange(value) {
    const nextCount = clamp(Number(value), MIN_SWATCHES, MAX_SWATCHES);
    setSwatchCount(nextCount);
    setMarkers((previous) => expandMarkers(previous, nextCount));
  }

  function onAddMarker() {
    if (markers.length >= MAX_SWATCHES) return;
    const nextCount = markers.length + 1;
    setSwatchCount(nextCount);
    setMarkers((previous) => expandMarkers(previous, nextCount));
  }

  function onRemoveMarker() {
    if (markers.length <= MIN_SWATCHES) return;
    const nextCount = markers.length - 1;
    setSwatchCount(nextCount);
    setMarkers((previous) => previous.slice(0, nextCount).map((marker, index) => ({ ...marker, id: index + 1 })));
  }

  return (
    <section className="palette-tool" aria-label="Photo palette tool">
      <h3>Photo Palette Utility</h3>
      <p>
        Upload a photo, drag markers to sample exact points, and copy palette values in CSS-ready formats.
        Generated palettes are applied to the site and persisted between pages.
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
            min={MIN_SWATCHES}
            max={MAX_SWATCHES}
            value={swatchCount}
            onChange={(event) => onSwatchCountChange(event.target.value)}
          />

          <div className="palette-marker-controls">
            <button type="button" onClick={onAddMarker} disabled={markers.length >= MAX_SWATCHES}>
              Add marker
            </button>
            <button type="button" onClick={onRemoveMarker} disabled={markers.length <= MIN_SWATCHES}>
              Remove marker
            </button>
          </div>

          <button type="button" onClick={onResetTheme}>
            Reset site theme
          </button>

          <div className="palette-preview-frame" ref={annotationFrameRef}>
            <img src={imageSrc} alt="Selected source for palette extraction" className="palette-preview-image" />
            <div className="palette-marker-layer" aria-hidden="true">
              {markers.map((marker, index) => {
                const color = palette[index] ? colorFormats(palette[index], index).hex : '#000000';
                return (
                  <button
                    key={marker.id}
                    type="button"
                    className={`palette-marker ${dragMarkerId === marker.id ? 'is-active' : ''}`}
                    style={{
                      left: `calc(${(marker.x * 100).toFixed(3)}% - ${MARKER_SIZE / 2}px)`,
                      top: `calc(${(marker.y * 100).toFixed(3)}% - ${MARKER_SIZE / 2}px)`,
                      backgroundColor: color
                    }}
                    aria-label={`Marker ${index + 1}`}
                    onPointerDown={(event) => onMarkerPointerDown(event, marker.id)}
                    onPointerMove={(event) => onMarkerPointerMove(event, marker.id)}
                    onPointerUp={(event) => onMarkerPointerUp(event, marker.id)}
                    onPointerCancel={(event) => onMarkerPointerUp(event, marker.id)}
                    onKeyDown={(event) => onMarkerKeyDown(event, marker.id)}
                  >
                    <span>{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
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
                  <div className="palette-swatch-header">
                    <span className="palette-index">#{index + 1}</span>
                    <button type="button" onClick={() => onCopySingle(color, index)}>
                      Copy
                    </button>
                  </div>
                  <div
                    className="palette-chip"
                    style={{ backgroundColor: formatted.hex }}
                    aria-label={`Color ${index + 1}: ${formatted.hex}`}
                  />
                  <p>{formatted.hex}</p>
                  <p className="meta">{formatted.rgb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="card palette-theme-map">
        <h4>Theme Variable Mapping</h4>
        <p className="meta">
          This shows the live CSS variables generated from your current marker positions and where they are used.
        </p>
        <div className="palette-theme-grid" role="list" aria-label="Theme variable mapping">
          {THEME_VAR_USAGE.map((entry) => (
            <div key={entry.variable} className="palette-theme-row" role="listitem">
              <p>
                <code>{entry.variable}</code>
              </p>
              <p>
                <code>{themePreview[entry.source]}</code>
              </p>
              <p className="meta">{entry.affects}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
