import { Link, useParams } from 'react-router-dom';
import projects from '../content/projects.json';
import MaterialIcon from '../components/MaterialIcon';
import { formatDateLabel } from '../utils/formatDate';

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

  return (
    <article className="portfolio-page case-study">
      <header className="case-study-opening">
        <Link className="portfolio-text-link" to="/projects"><MaterialIcon name="chevron_right" /> All projects</Link>
        {slug === 'finestra-art-app' && <p className="case-study-archive"><MaterialIcon name="inventory_2" /> From the archive · 2011–2017</p>}
        <h2>{project.title}</h2>
        {project.headline && <p className="case-study-headline">{project.headline}</p>}
      <div className="project-meta">
        <p className="meta">{formatDateLabel(project.date)}</p>
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
        <Link className="portfolio-text-link" to="/projects">All projects <MaterialIcon name="chevron_right" /></Link>
      </footer>
    </article>
  );
}
