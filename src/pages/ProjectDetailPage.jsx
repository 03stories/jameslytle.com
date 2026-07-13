import { Link, useParams } from 'react-router-dom';
import projects from '../content/projects.json';
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
    <article>
      <h2>{project.title}</h2>
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
      <div className="prose" dangerouslySetInnerHTML={{ __html: project.html }} />
      <p>
        <Link to="/projects">Back to projects</Link>
      </p>
    </article>
  );
}
