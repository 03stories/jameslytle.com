import { useEffect, useState } from 'react';
import MaterialIcon from '../components/MaterialIcon';
import './ResumePage.css';

const unlockStorageKey = 'portfolio-resume-unlock';

export default function ResumePage() {
  const [paper, setPaper] = useState('letter');
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  useEffect(() => {
    try {
      setUnlocked(Boolean(__RESUME_PASSWORD_HASH__) && localStorage.getItem(unlockStorageKey) === __RESUME_PASSWORD_HASH__);
    } catch {}
  }, []);
  function lock() {
    try { localStorage.removeItem(unlockStorageKey); } catch {}
    setUnlocked(false);
    setError('');
  }
  async function unlock(event) {
    event.preventDefault();
    setChecking(true);
    setError('');
    try {
      const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
      const hash = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
      if (__RESUME_PASSWORD_HASH__ && hash === __RESUME_PASSWORD_HASH__) {
        try { localStorage.setItem(unlockStorageKey, hash); } catch {}
        setUnlocked(true);
        setPassword('');
      } else {
        setError('That password didn’t match. Try again.');
      }
    } catch {
      setError('Unable to unlock the resume. Please try again on HTTPS or localhost.');
    } finally {
      setChecking(false);
    }
  }
  if (!unlocked) return (
    <section className="resume-gate" aria-labelledby="resume-gate-heading">
      <h2 id="resume-gate-heading">Resume studio</h2>
      <p>Enter the password to view and print the working resume.</p>
      <form onSubmit={unlock}>
        <label htmlFor="resume-password">Password</label>
        <input id="resume-password" type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} required aria-describedby={error ? 'resume-password-error' : undefined} aria-invalid={Boolean(error)} />
        <button className="home-primary-action" disabled={checking || !password}>{checking ? 'Checking…' : 'Unlock resume'}</button>
        <p id="resume-password-error" role="status">{error}</p>
      </form>
    </section>
  );
  return (
    <section className={`resume-workspace resume-paper-${paper}`} aria-label="Resume">
      <div className="resume-toolbar">
        <div><strong>Resume studio</strong><p>Print at 100% scale, with browser headers and footers off. Choose Save as PDF.</p></div>
        <div className="resume-toolbar-actions">
          <label>Paper<select value={paper} onChange={event => setPaper(event.target.value)}><option value="letter">US Letter</option><option value="a4">A4</option></select></label>
          <button className="home-primary-action" onClick={() => window.print()}><MaterialIcon name="description" />Print / Save PDF</button>
          <a className="portfolio-text-link" href={`${import.meta.env.BASE_URL}resume.pdf`}>Current PDF</a>
          <button className="portfolio-text-link resume-lock" onClick={lock}>Lock</button>
        </div>
        <p className="resume-review-note">Working draft · Review role history and dates before replacing the downloadable PDF.</p>
      </div>
      <article className="resume-document" aria-labelledby="resume-name">
        <header className="resume-document-header">
          <h2 id="resume-name">James Lytle</h2>
          <p className="resume-positioning">Design Engineer &amp; Product Design Leader</p>
          <div className="resume-contact"><a href="https://jameslytle.com">jameslytle.com</a><a href="mailto:jameslytle@hey.com">jameslytle@hey.com</a><a href="https://www.linkedin.com/in/jameslytle/">LinkedIn</a><a href="https://github.com/03stories">GitHub</a></div>
          <p className="resume-summary">I connect product strategy, interaction design, production code, and AI behavior to make complex data products useful. I lead work from problem framing through shipped experiences, pairing design leadership with hands-on prototyping and frontend implementation.</p>
        </header>
        <section className="resume-section" aria-labelledby="resume-experience">
          <h3 id="resume-experience">Experience</h3>
          <div className="resume-job">
            <div className="resume-job-heading"><h4>Juice Analytics</h4><span>2011–Present</span></div>
            <p className="resume-role">Design Engineer &amp; Product Lead · Current role</p>
            <ul>
              <li>Originated Forward, a customer-impact storytelling product; led product direction, recipient experience, and implementation from concept through MVP and the first paid production release.</li>
              <li>Built Forward’s frontend, narrative AI skill, and generation pipeline, partnering with engineers on backend services and production testing.</li>
              <li>Delivered 9,772 personalized narratives in the first production release. Among 1,448 opened narratives, 60% reached the end; 83% of finishers asked to receive the experience again.</li>
              <li>Designed a governed narrative workflow: AI supports exploration, while human-approved templates and deterministic conditions control production output.</li>
              <li>Led Juicebox’s evolution from a low-code platform toward visual authoring; designed reusable interaction and configuration systems, built working prototypes, and shipped targeted frontend improvements.</li>
            </ul>
            <p className="resume-role">Earlier roles · Senior Product Designer / Product Designer / UI Design Lead</p>
            <ul>
              <li>Led UX research from discovery through feature definition; hired, mentored, and managed design staff.</li>
              <li>Led design for Slice and client data applications, combining visualization design, product strategy, client collaboration, and prototyping.</li>
              <li>Designed and facilitated data storytelling workshops for audiences of 10–150 participants.</li>
            </ul>
          </div>
          <div className="resume-job">
            <div className="resume-job-heading"><h4>Finestra Art App</h4><span>2012–2015</span></div>
            <p className="resume-role">Co-founder &amp; Product Designer</p>
            <p>Co-founded a local art marketplace. Led UX and UI design, built the marketing website, and implemented web frontend work for the Preview experience, partnering with my co-founder on native iOS engineering.</p>
          </div>
          <div className="resume-job">
            <div className="resume-job-heading"><h4>Freelance</h4><span>2005–2010</span></div>
            <p>Brand and print design, web design and development, video production, and motion graphics.</p>
          </div>
        </section>
        <section className="resume-section" aria-labelledby="resume-capabilities"><h3 id="resume-capabilities">Capabilities</h3><p>Product strategy · Design leadership &amp; mentoring · Interaction design · UX research · Data visualization &amp; storytelling · Frontend development · AI workflow design</p><p className="resume-tools">React · JavaScript · HTML &amp; CSS · Tailwind CSS · Figma · GitHub · Prototyping in code</p></section>
        <section className="resume-section" aria-labelledby="resume-community"><h3 id="resume-community">Community &amp; education</h3><p><strong>OpenIDEO Atlanta Chapter · 2015–2020</strong> — Organized community design workshops and facilitated a one-day design jam with 75 participants.</p><p><strong>Georgia Institute of Technology · 2005</strong> — B.S. in Industrial and Product Design.</p></section>
      </article>
      <style>{`@page { size: ${paper === 'a4' ? 'A4' : 'letter'}; margin: 12mm; }`}</style>
    </section>
  );
}
