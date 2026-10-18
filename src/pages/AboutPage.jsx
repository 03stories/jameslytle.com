import site from '../content/site.json';
import MaterialIcon from '../components/MaterialIcon';

export default function AboutPage() {
  const about = site.about || {};

  return (
    <section className="portfolio-page about-page">
      <header className="portfolio-page-opening">
      <h2>{about.title || 'About'}</h2>
      {about.heroStatement ? <p className="portfolio-page-lede">{about.heroStatement}</p> : null}
      </header>
      <div className="about-layout">
      <aside className="about-profile" aria-label="Portrait and contact">
      {about.headshot ? (
        <img className="about-portrait" src={about.headshot} alt="James Lytle" />
      ) : null}
      {about.email ? <a className="portfolio-text-link" href={`mailto:${about.email}`}><MaterialIcon name="mail" />Let’s chat</a> : null}
      <a className="portfolio-text-link" href={`${import.meta.env.BASE_URL}resume.pdf`}><MaterialIcon name="description" />Resume</a>
      </aside>
      <div className="prose portfolio-editorial-prose" dangerouslySetInnerHTML={{ __html: about.html || '' }} />
      </div>
    </section>
  );
}
