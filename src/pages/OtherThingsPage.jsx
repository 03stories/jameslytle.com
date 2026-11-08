import { Link, useSearchParams } from 'react-router-dom';
import entries from '../content/labs.json';
import { formatMonthLabel } from '../utils/formatDate';
import MaterialIcon from '../components/MaterialIcon';
import LabTags from '../components/LabTags';
import LabRssButton from '../components/LabRssButton';

function LabEntryLink({ entry, featured = false }) {
  return <Link className="lab-entry-link" to={`/other-things/${entry.slug}`}>
    {entry.cover && <span className="lab-entry-thumbnail"><img src={entry.cover} alt="" loading="lazy" /></span>}
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
  const [searchParams, setSearchParams] = useSearchParams();
  const tags = [...new Set(entries.flatMap(entry => entry.tags || []))].sort();
  const selected = new Set(searchParams.getAll('tag').filter(tag => tags.includes(tag)));
  const visible = entries.filter(entry => selected.size === 0 || entry.tags?.some(tag => selected.has(tag)));
  const featured = visible.filter(entry => entry.featured);

  function updateTags(nextTags) {
    const params = new URLSearchParams(searchParams);
    params.delete('tag');
    for (const tag of nextTags) params.append('tag', tag);
    setSearchParams(params);
  }

  function toggleTag(tag) {
    const nextTags = new Set(selected);
    if (nextTags.has(tag)) nextTags.delete(tag);
    else nextTags.add(tag);
    updateTags(nextTags);
  }

  return <section className="portfolio-page lab-page" aria-labelledby="lab-heading">
    <header className="portfolio-opening">
      <h2 id="lab-heading">Lab</h2>
      <p>Things I’m making, trying, and figuring out. Small tools, creative experiments, and notes from the process.</p>
      <div className="lab-filters" role="group" aria-label="Filter Lab posts by topic">
        <button type="button" aria-pressed={selected.size === 0} onClick={() => updateTags([])}><span className="lab-badge">All</span></button>
        {tags.map(tag => <button type="button" key={tag} aria-pressed={selected.has(tag)} onClick={() => toggleTag(tag)}><span className="lab-badge">{tag}</span></button>)}
      </div>
      <div className="lab-opening-links">
        <Link className="portfolio-text-link" to="/design-system">Design system<MaterialIcon name="chevron_right" /></Link>
        <LabRssButton />
      </div>
    </header>
    {featured.length > 0 && <section className="lab-featured" aria-labelledby="pinned-heading">
      <h3 id="pinned-heading">Pinned</h3>
      <ul>{featured.map(entry => <li key={entry.slug}>
        <LabEntryLink entry={entry} featured />
      </li>)}</ul>
    </section>}
    <section className="lab-archive" aria-labelledby="archive-heading">
      <div className="lab-section-heading"><h3 id="archive-heading">The archive</h3><p>Newest first. Older work keeps its place.</p></div>
      <p className="lab-result-count" role="status">{visible.length} {visible.length === 1 ? 'entry' : 'entries'}</p>
      <ul className="lab-archive-list">{visible.map(entry => <li key={entry.slug}>
        <LabEntryLink entry={entry} />
      </li>)}</ul>
    </section>
  </section>;
}
