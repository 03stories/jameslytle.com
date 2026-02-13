import site from '../content/site.json';

export default function AboutPage() {
  const about = site.about || {};

  return (
    <section>
      <h2>{about.title || 'About'}</h2>
      {about.heroStatement ? <p className="meta">{about.heroStatement}</p> : null}
      {about.headshot ? (
        <p>
          <img src={about.headshot} alt="James Lytle" style={{ maxWidth: '300px', width: '100%' }} />
        </p>
      ) : null}
      {about.email ? <p>Email: {about.email}</p> : null}
      <div className="prose" dangerouslySetInnerHTML={{ __html: about.html || '' }} />
    </section>
  );
}
