import { Link, useParams } from 'react-router-dom';
import projects from '../content/projects.json';
import MaterialIcon from '../components/MaterialIcon';
import visibility from '../content/projectVisibility.json';
import { formatMonthLabel } from '../utils/formatDate';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return (
      <section>
        <h2>Project not found</h2>
        <Link to="/projects">Back to projects</Link>
      </section>
    );
  }

  const ordered = visibility.filter((entry) => entry.projects).map((entry) => projects.find((item) => item.slug === entry.slug)).filter(Boolean);
  const position = ordered.findIndex((entry) => entry.slug === slug);
  const previous = position > 0 ? ordered[position - 1] : null;
  const next = position >= 0 ? ordered[position + 1] : null;
  const name = (entry) => entry.slug === 'forward' ? 'Forward' : entry.slug === 'forward-narrative-skill' ? 'Forward Narrative Skill' : entry.title;

  return (
    <article className="portfolio-page case-study">
      <header className="case-study-opening">
        <Link className="portfolio-text-link" to="/projects"><MaterialIcon name="chevron_right" /> All projects</Link>
        {slug === 'finestra-art-app' && <p className="case-study-archive"><MaterialIcon name="inventory_2" /> From the archive · 2011–2017</p>}
        <h2>{project.title}</h2>
        {project.headline && <p className="case-study-headline">{project.headline}</p>}
      <div className="project-meta">
        <p className="meta">{formatMonthLabel(project.date)}</p>
        {project.tags?.length ? (
          <ul className="project-tags" aria-label="Project tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </div>
      </header>
      <div className="prose case-study-prose" dangerouslySetInnerHTML={{ __html: project.html }} />
      <footer className="case-study-footer">
        <nav className="case-study-pagination" aria-label="Project navigation">
          {previous ? <Link className="portfolio-text-link case-study-previous" to={`/projects/${previous.slug}`}><MaterialIcon name="chevron_right" /> Previous: {name(previous)}</Link> : <span />}
          {next && <Link className="portfolio-text-link case-study-next" to={`/projects/${next.slug}`}>Next: {name(next)} <MaterialIcon name="chevron_right" /></Link>}
        </nav>
        <Link className="portfolio-text-link" to="/projects">All projects <MaterialIcon name="chevron_right" /></Link>
      </footer>
    </article>
  );
}
