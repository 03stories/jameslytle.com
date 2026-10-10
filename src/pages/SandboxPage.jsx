import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from '../components/MaterialIcon';
import { defaults, ranges, readTokens, previewTokens, validateTokens, contrast } from '../design/tokens';

const labels = {
  bg: 'Background', ink: 'Primary text', muted: 'Secondary text', accent: 'Primary action',
  'accent-hover': 'Action hover', 'action-tint': 'Action tint', line: 'Dividers', 'image-border': 'Image edge',
  'gutter-max': 'Outer gutter ceiling', 'section-max': 'Section spacing ceiling', 'display-max': 'Display size ceiling',
  'body-size': 'Long-form text size', 'image-radius': 'Image corners', 'action-radius': 'Action corners',
  'icon-gap': 'Header icon spacing', 'shadow-opacity': 'Image shadow strength'
};

export default function SandboxPage() {
  const [tokens, setTokens] = useState(defaults);
  const [status, setStatus] = useState('');
  const [importText, setImportText] = useState('');
  useEffect(() => setTokens(readTokens()), []);
  const output = JSON.stringify(tokens, null, 2);
  const update = next => { setTokens(next); previewTokens(next); setStatus('Preview saved in this browser.'); };
  const checks = [['Primary text', tokens.ink, tokens.bg], ['Secondary text', tokens.muted, tokens.bg], ['Action label', '#ffffff', tokens.accent], ['Hover action', tokens['accent-hover'], tokens['action-tint']]];
  async function copy() {
    try { await navigator.clipboard.writeText(output); setStatus('Configuration copied. Paste it into the chat to apply it to the source.'); }
    catch { setStatus('Copy unavailable. Select the configuration below and copy it manually.'); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([output + '\n'], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'portfolio-design-tokens.json'; link.click(); URL.revokeObjectURL(url);
    setStatus('Configuration downloaded.');
  }
  function importConfig() {
    try { update(validateTokens(JSON.parse(importText))); } catch (error) { setStatus(error.message); }
  }
  return (
    <section className="portfolio-page design-system">
      <header className="portfolio-page-opening">
        <h2>Design system</h2>
        <p className="portfolio-page-lede">A working reference for the portfolio. Adjust the foundations and see the real components respond.</p>
        <p>Changes preview across Home, Projects, case studies, About, and Resume in this browser. Export the configuration and share it in chat to make it the site’s default.</p>
        <div className="design-actions"><Link className="portfolio-text-link" to="/">Preview Home <MaterialIcon name="chevron_right" /></Link><button onClick={() => update({ ...defaults })}>Reset to site defaults</button></div>
      </header>
      <div className="design-workspace">
        <aside className="design-controls" aria-label="Design controls">
          <h3>Foundations</h3>
          {Object.entries(tokens).map(([key, value]) => (
            <label className="design-control" key={key} htmlFor={`token-${key}`}>
              <span>{labels[key]} <output>{value}{ranges[key] ? key === 'shadow-opacity' ? '%' : 'px' : ''}</output></span>
              {ranges[key] ? <input id={`token-${key}`} type="range" min={ranges[key][0]} max={ranges[key][1]} step={key === 'display-max' ? 0.1 : 1} value={value} onChange={e => update({ ...tokens, [key]: Number(e.target.value) })} /> : <input id={`token-${key}`} type="color" value={value} onChange={e => update({ ...tokens, [key]: e.target.value })} />}
            </label>
          ))}
        </aside>
        <div className="design-specimens">
          <section className="design-specimen"><h3>Type & voice</h3><div className="home-intro"><h2>Make complex<br /><span>products useful.</span></h2></div><div className="portfolio-editorial-prose"><p>Geologica carries the site from display headings to readable prose. Clear ownership, practical language, and real artifacts do the work.</p><h2>A clear section heading</h2><p>Long-form copy stays within a comfortable reading measure. Supporting text uses the secondary color without losing contrast.</p></div><p className="design-muted">Secondary text · Metadata · Artifact captions</p></section>
          <section className="design-specimen"><h3>Actions & navigation</h3><div className="home-actions"><a className="home-primary-action" href="mailto:jameslytle@hey.com"><MaterialIcon name="mail" />Start a conversation</a><Link className="portfolio-text-link" to="/projects">View projects <MaterialIcon name="chevron_right" /></Link></div><p className="design-muted">Hover or focus Resume in the header to preview its download treatment.</p></section>
          <section className="design-specimen portfolio-project"><div className="portfolio-project-copy"><h3>Real artifacts</h3><p className="portfolio-role">Role: Design and implementation</p><p>Original proportions, a fine image edge, soft corners, and a restrained shadow.</p></div><figure><img src={`${import.meta.env.BASE_URL}content/other-things/photo-palette/default-photo.jpg`} alt="Color study photograph used for the portfolio’s Photo Palette experiment" /><figcaption className="portfolio-figure-label">Image treatment responds to the controls.</figcaption></figure></section>
          <section className="design-specimen"><h3>Contrast checks</h3><ul className="design-contrast">{checks.map(([label, foreground, background]) => { const ratio = contrast(foreground, background); return <li key={label}><span>{label}</span><strong>{ratio.toFixed(2)}:1 · {ratio >= 4.5 ? 'AA body pass' : 'Below AA body target'}</strong></li>; })}</ul></section>
        </div>
      </div>
      <section className="design-export"><h3>Take the changes with you</h3><p>This JSON maps directly to <code>src/design/tokens.json</code>. Browser previews do not change the committed site. Copy or download it, then ask me to apply it.</p><div className="design-actions"><button onClick={copy}>Copy configuration</button><button onClick={download}>Download JSON</button></div><label htmlFor="design-output">Current configuration</label><textarea id="design-output" readOnly value={output} rows={18} /><details><summary>Import a configuration</summary><label htmlFor="design-import">Paste token JSON</label><textarea id="design-import" value={importText} onChange={e => setImportText(e.target.value)} rows={8} /><button onClick={importConfig}>Preview imported configuration</button></details><p role="status">{status}</p></section>
    </section>
  );
}
