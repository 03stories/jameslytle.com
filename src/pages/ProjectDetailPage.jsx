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
      <p className="meta">{formatDateLabel(project.date)}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: project.html }} />
      <p>
        <Link to="/projects">Back to projects</Link>
      </p>
    </article>
  );
}
