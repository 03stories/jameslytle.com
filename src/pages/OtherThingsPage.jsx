import { Link } from 'react-router-dom';
import albums from '../content/other-things.json';
import projects from '../content/projects.json';
import { labItems } from '../content/labItems';
import MaterialIcon from '../components/MaterialIcon';

export default function OtherThingsPage() {
  return (
    <section className="portfolio-page lab-page" aria-labelledby="lab-heading">
      <header className="portfolio-opening">
        <h2 id="lab-heading">Lab</h2>
        <p>Small tools, working methods, and experiments beyond the main product work.</p>
        <Link className="portfolio-text-link" to="/design-system">Design system<MaterialIcon name="chevron_right" /></Link>
      </header>
      <ul className="project-index lab-index">
        {labItems.map(item => {
          const artifact = [...albums, ...projects].find(entry => entry.slug === item.slug);
          return <li key={item.slug}>
            <Link className="project-index-row" to={`/other-things/${item.slug}`}>
              {artifact?.cover && <img src={item.slug === 'photo-palette' ? `${import.meta.env.BASE_URL}content/site/home/photo-palette-tool.png` : artifact.cover} alt="" loading="lazy" />}
              <div className="project-index-copy">
                <p className="project-index-meta">{item.kind}</p>
                <h3>{item.title}<MaterialIcon name="chevron_right" /></h3>
                <p>{item.summary}</p>
                <p className="lab-role">Role: {item.role}</p>
              </div>
            </Link>
          </li>;
        })}
      </ul>
    </section>
  );
}
