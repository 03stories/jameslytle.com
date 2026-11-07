import { useState } from 'react';
import { Link } from 'react-router-dom';
import entries from '../content/labs.json';
import { formatMonthLabel } from '../utils/formatDate';
import MaterialIcon from '../components/MaterialIcon';
import LabTags from '../components/LabTags';

function LabEntryLink({ entry, featured = false }) {
  return <Link className="lab-entry-link" to={`/other-things/${entry.slug}`}>
    {featured && entry.cover && <img src={entry.cover} alt="" loading="lazy" />}
    <div className="lab-entry-copy">
      <p className="lab-entry-meta">
        {entry.kind || 'Exploration'}
        {!featured && <> · {entry.date ? <time dateTime={entry.date}>{formatMonthLabel(entry.date)}</time> : 'From the archives'}</>}
      </p>
      <h4>{entry.title}<MaterialIcon name="chevron_right" /></h4>
      <p>{entry.summary}</p>
      <LabTags tags={entry.tags} />
    </div>
  </Link>;
}

export default function OtherThingsPage() {
  const [tag, setTag] = useState('All');
  const tags = [...new Set(entries.flatMap(entry => entry.tags || []))].sort();
  const visible = entries.filter(entry => tag === 'All' || entry.tags?.includes(tag));
  const featured = entries.filter(entry => entry.featured);
  return <section className="portfolio-page lab-page" aria-labelledby="lab-heading">
    <header className="portfolio-opening">
      <p className="lab-eyebrow">An open notebook</p>
      <h2 id="lab-heading">Lab</h2>
      <p>Things I’m making, trying, and figuring out. Small tools, creative experiments, and notes from the process.</p>
      <div className="lab-opening-links"><Link className="portfolio-text-link" to="/design-system">Design system<MaterialIcon name="chevron_right" /></Link><a className="portfolio-text-link" href={`${import.meta.env.BASE_URL}lab.xml`}>RSS feed</a></div>
    </header>
    {featured.length > 0 && <section className="lab-featured" aria-labelledby="featured-heading">
      <h3 id="featured-heading">Selected explorations</h3>
      <ul>{featured.map(entry => <li key={entry.slug}>
        <LabEntryLink entry={entry} featured />
      </li>)}</ul>
    </section>}
    <section className="lab-archive" aria-labelledby="archive-heading">
      <div className="lab-section-heading"><h3 id="archive-heading">The archive</h3><p>Newest first. Older work keeps its place.</p></div>
      <div className="lab-filters" role="group" aria-label="Filter archive by topic">
        {['All', ...tags].map(value => <button type="button" key={value} aria-pressed={tag === value} onClick={() => setTag(value)}><span className="lab-badge">{value}</span></button>)}
      </div>
      <p className="lab-result-count" role="status">{visible.length} {visible.length === 1 ? 'entry' : 'entries'}</p>
      <ul className="lab-archive-list">{visible.map(entry => <li key={entry.slug}>
        <LabEntryLink entry={entry} />
      </li>)}</ul>
    </section>
  </section>;
}
