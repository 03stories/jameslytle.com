import site from '../content/site.json';

export default function HomePage() {
  const home = site.home || {};

  return (
    <section>
      <h2>{home.title || 'Home'}</h2>
      {home.greeting ? <p>{home.greeting}</p> : null}
      <div className="prose" dangerouslySetInnerHTML={{ __html: home.html || '' }} />
      <p>
        <a href="/content/site/home/untitled-drawing.pdf">Untitled Drawing (PDF)</a>
      </p>
    </section>
  );
}
