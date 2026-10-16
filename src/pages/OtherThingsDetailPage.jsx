import { Link, useParams } from 'react-router-dom';
import albums from '../content/other-things.json';
import projects from '../content/projects.json';
import { labItems } from '../content/labItems';
import { formatMonthLabel } from '../utils/formatDate';
import MaterialIcon from '../components/MaterialIcon';
import PhotoPaletteToolPage from './PhotoPaletteToolPage';

export default function OtherThingsDetailPage() {
  const { slug } = useParams();
  const album = albums.find(entry => entry.slug === slug) || (slug === 'design-docs' ? projects.find(entry => entry.slug === slug) : null);
  const item = labItems.find(entry => entry.slug === slug);
  if (!album) return <section className="portfolio-page"><h2>Artifact not found</h2><Link className="portfolio-text-link" to="/other-things">Back to Lab</Link></section>;
  const position = labItems.findIndex(entry => entry.slug === slug);
  const previous = position > 0 ? labItems[position - 1] : null;
  const next = position >= 0 ? labItems[position + 1] : null;
  const date = formatMonthLabel(album.date);
  return (
    <article className="portfolio-page case-study lab-artifact">
      <header className="case-study-opening">
        <Link className="portfolio-text-link" to="/other-things"><MaterialIcon name="chevron_right" />All Lab work</Link>
        <h2>{item?.title || album.title}</h2>
        {item && <p className="case-study-headline">{item.summary}</p>}
        <div className="project-meta">{item && <p className="meta">Role: {item.role}</p>}{date !== 'No date' && <p className="meta">{date}</p>}</div>
      </header>
      {slug !== 'photo-palette' && album.images?.length > 0 && <div className="lab-gallery">{album.images.map((image, index) => <figure key={image}><img src={image} alt={slug === 'openideo-atlanta-chapter' ? (index === 0 ? 'OpenIDEO Atlanta community dinner' : 'OpenIDEO Atlanta collaborative design session') : `${item?.title || album.title}: ${index === 0 ? 'finished work' : `additional view ${index + 1}`}`} loading="lazy" /></figure>)}</div>}
      <div className="prose case-study-prose" dangerouslySetInnerHTML={{ __html: album.html }} />
      {slug === 'photo-palette' && <PhotoPaletteToolPage />}
      <footer className="case-study-footer">
        <nav className="case-study-pagination" aria-label="Lab navigation">
          {previous ? <Link className="portfolio-text-link case-study-previous" to={`/other-things/${previous.slug}`}><MaterialIcon name="chevron_right" />Previous: {previous.title}</Link> : <span />}
          {next && <Link className="portfolio-text-link case-study-next" to={`/other-things/${next.slug}`}>Next: {next.title}<MaterialIcon name="chevron_right" /></Link>}
        </nav>
        <Link className="portfolio-text-link" to="/other-things">All Lab work<MaterialIcon name="chevron_right" /></Link>
      </footer>
    </article>
  );
}
