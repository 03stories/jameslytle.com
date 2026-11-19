import { Link } from 'react-router-dom';
import projects from '../content/projects.json';
import visibility from '../content/projectVisibility.json';
import MaterialIcon from '../components/MaterialIcon';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
const overrides = {
  forward: { title: 'Forward', image: asset('content/projects/forward/forward-preview.png'), alt: 'Forward product website beside a mobile customer narrative', role: 'Product originator, design and implementation lead' },
  juicebox: { image: asset('content/projects/juicebox/juicebox-sample-poster.jpg'), alt: 'Juicebox customer survey report with interactive result cards', role: 'Product design lead' },
  'forward-narrative-skill': { title: 'Forward Narrative Skill', image: asset('content/projects/forward-narrative-skill/project-thumbnail.jpg'), alt: 'Claude narrative authoring beside the rendered Forward product story', role: 'AI product system, design and implementation lead' }
};

export default function ProjectsPage() {
  const listed = visibility.filter((item) => item.projects).map((item) => projects.find((project) => project.slug === item.slug)).filter(Boolean);
  return (
    <section className="portfolio-page projects-page" aria-labelledby="projects-heading">
      <header className="portfolio-opening">
        <h2 id="projects-heading">Projects</h2>
        <p>Selected work in product design, engineering, and AI, with an earlier chapter from the archive.</p>
      </header>
      <ul className="project-index">
        {listed.map((project) => {
          const presentation = overrides[project.slug] || {};
          const historical = project.slug === 'finestra-art-app';
          return (
            <li key={project.slug}>
              <Link className={`project-index-row${historical ? ' project-index-archive' : ''}`} to={`/projects/${project.slug}`} aria-label={`View ${presentation.title || project.title}`}>
              <img loading="lazy" src={presentation.image || project.cover} alt={presentation.alt || `${presentation.title || project.title} project preview`} />
              <div className="project-index-copy">
                {historical && <p className="project-index-meta project-index-archive-label"><MaterialIcon name="inventory_2" /> From the archive · 2012–2015</p>}
                <h3>{presentation.title || project.title}<MaterialIcon name="chevron_right" /></h3>
                {presentation.role && <p className="project-index-meta">Role: {presentation.role}</p>}
                <p>{project.headline}</p>
              </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
