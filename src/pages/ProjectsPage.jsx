import { Link } from 'react-router-dom';
import projects from '../content/projects.json';
import { formatDateLabel } from '../utils/formatDate';

export default function ProjectsPage() {
  return (
    <section>
      <h2>Projects</h2>
      <ul className="card-list">
        {projects.map((project) => (
          <li key={project.slug} className="card">
            <h3>{project.title}</h3>
            <p className="meta">{formatDateLabel(project.date)}</p>
            <p>{project.headline || project.summary || ''}</p>
            <Link to={`/projects/${project.slug}`}>View project</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
