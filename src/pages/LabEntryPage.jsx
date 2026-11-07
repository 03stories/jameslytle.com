import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import entries from '../content/labs.json';
import MaterialIcon from '../components/MaterialIcon';
import { formatMonthLabel } from '../utils/formatDate';
import { observeViewportVideo } from '../utils/viewportVideo';
import PhotoPaletteToolPage from './PhotoPaletteToolPage';

export default function LabEntryPage({ entry }) {
  const contentRef = useRef(null);
  useEffect(() => {
    const cleanups = Array.from(contentRef.current?.querySelectorAll('video[data-play-in-view]') || [], observeViewportVideo);
    return () => cleanups.forEach(cleanup => cleanup());
  }, [entry]);
  const position = entries.findIndex(item => item.slug === entry.slug);
  const next = entries[position + 1];
  return <article ref={contentRef} className="portfolio-page case-study lab-artifact">
    <header className="case-study-opening">
      <Link className="portfolio-text-link" to="/other-things"><MaterialIcon name="chevron_right" />All Lab work</Link>
      <p className="lab-eyebrow">{entry.kind || 'Exploration'} · {entry.date ? <time dateTime={entry.date}>{formatMonthLabel(entry.date)}</time> : 'From the archives'}</p>
      <h2>{entry.title}</h2><p className="case-study-headline">{entry.summary}</p>
      {entry.tags?.length > 0 && <p className="lab-topics">{entry.tags.join(' · ')}</p>}
    </header>
    <div className="prose case-study-prose" dangerouslySetInnerHTML={{ __html: entry.html }} />
    {entry.slug === 'photo-palette' && <PhotoPaletteToolPage />}
    <footer className="case-study-footer"><nav className="case-study-pagination" aria-label="Lab navigation"><Link className="portfolio-text-link" to="/other-things">All Lab work</Link>{next && <Link className="portfolio-text-link" to={`/other-things/${next.slug}`}>Next: {next.title}<MaterialIcon name="chevron_right" /></Link>}</nav></footer>
  </article>;
}
