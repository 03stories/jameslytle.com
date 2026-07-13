import { Link } from 'react-router-dom';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = {
  forward: asset('content/site/home/forward-insights-recap-home.png'),
  juicebox: asset('content/projects/juicebox/jb-header.png'),
  juiceboxDetail: asset('content/projects/juicebox/jb-story-designer.png'),
  designDocs: asset('content/projects/design-docs/design-doc-template.png'),
  palette: asset('content/site/home/photo-palette-tool.png'),
  palettePhoto: asset('content/other-things/photo-palette/default-photo.jpg')
};

function FigureLabel({ number, children }) {
  return (
    <figcaption className="home-figure-label">
      <span>Fig. {number}</span>
      {children}
    </figcaption>
  );
}

export default function HomePage() {
  return (
    <section className="home-page" aria-labelledby="home-heading">
      <div className="home-opening">
        <div className="home-opening-main">
          <figure className="home-hero-figure">
            <img src={projects.forward} alt="Forward personalized story shown alongside a mobile experience" />
            <FigureLabel number="01">Forward / Insights Recap · Founder-builder</FigureLabel>
          </figure>

          <div className="home-intro">
            <h2 id="home-heading">
              Founder-builder designing <em>useful</em> products across interface, code, and AI.
            </h2>
            <div className="home-intro-copy">
              <p>
                I build products that help people understand and act on complex data. I connect product strategy,
                interface design, production code, and AI behavior to ship what matters.
              </p>
              <div className="home-actions">
                <a className="home-primary-action" href="mailto:jameslytle@hey.com">
                  Start a conversation <span aria-hidden="true">→</span>
                </a>
                <Link className="home-secondary-action" to="/resume">
                  View résumé
                </Link>
              </div>
            </div>
          </div>
        </div>

        <aside className="home-rail" aria-label="Current practice and working principles">
          <section>
            <h3>Current practice</h3>
            <p>I design and build products that make complex data clear, useful, and actionable.</p>
          </section>
          <section>
            <h3>Role</h3>
            <p>Product designer<br />Builder<br />AI integrator</p>
          </section>
          <section>
            <h3>Working principles</h3>
            <ol>
              <li>Make the complex understandable.</li>
              <li>Prototype the real thing.</li>
              <li>Use the tool that works.</li>
            </ol>
          </section>
        </aside>
      </div>

      <div className="home-work">
        <article className="home-project home-project-forward">
          <div className="home-project-copy">
            <p className="home-kicker">01 — Flagship product</p>
            <h2>Forward / Insights Recap</h2>
            <p className="home-role">Founder-builder</p>
            <p className="home-project-lede">Turns customer data into personalized, interactive stories at scale.</p>
            <p>
              I originated the product, led strategy and end-to-end design, shaped AI behavior, and implemented
              substantial production work.
            </p>
            <a className="home-text-link" href="https://www.insightsrecap.com/">
              View live product <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="home-forward-pair">
            <img className="home-forward-mobile" src={projects.forward} alt="Forward mobile personalized story detail" />
            <img className="home-forward-wide" src={projects.forward} alt="Forward product landing experience" />
            <FigureLabel number="02">Mobile experience · Product in the wild</FigureLabel>
          </figure>
        </article>

        <article className="home-project home-project-juicebox">
          <div className="home-project-copy">
            <p className="home-kicker">02 — Product platform</p>
            <h2>Juicebox</h2>
            <p className="home-role">Product design lead</p>
            <p className="home-project-lede">A data platform for exploring and presenting data stories.</p>
            <Link className="home-text-link" to="/projects/juicebox">
              View project <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-juicebox-pair">
            <img className="home-juicebox-wide" src={projects.juicebox} alt="Juicebox story designer and data story" />
            <img className="home-juicebox-detail" src={projects.juiceboxDetail} alt="Juicebox story designer detail" />
            <FigureLabel number="03">Story canvas · Designer controls</FigureLabel>
          </figure>
        </article>

        <article className="home-project home-project-docs">
          <div className="home-project-copy">
            <p className="home-kicker">03 — Process and thinking</p>
            <h2>Design Docs</h2>
            <p className="home-role">Product thinking</p>
            <p className="home-project-lede">Clear briefs and living notes that keep teams aligned.</p>
            <Link className="home-text-link" to="/projects/design-docs">
              View project <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-docs-figure">
            <img src={projects.designDocs} alt="Design document template with summary and progress notes" />
            <FigureLabel number="04">A working document, not a handoff artifact</FigureLabel>
          </figure>
        </article>

        <article className="home-project home-project-palette">
          <div className="home-project-copy">
            <p className="home-kicker">04 — Code and tools</p>
            <h2>Photo Palette</h2>
            <p className="home-role">Front-end tool</p>
            <p className="home-project-lede">Extracts color palettes from any photo and outputs copy-ready CSS values.</p>
            <Link className="home-text-link" to="/other-things/photo-palette">
              Try the tool <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-palette-pair">
            <img className="home-palette-wide" src={projects.palette} alt="Photo Palette utility interface" />
            <img className="home-palette-detail" src={projects.palettePhoto} alt="Sample photo used to generate a color palette" />
            <FigureLabel number="05">Palette utility · Sample picker</FigureLabel>
          </figure>
        </article>
      </div>

      <section className="home-principles" aria-labelledby="principles-heading">
        <p id="principles-heading">Working principles</p>
        <ol>
          <li><span>01</span>Make the complex understandable.</li>
          <li><span>02</span>Prototype the real thing.</li>
          <li><span>03</span>Use the tool that works.</li>
        </ol>
      </section>

      <section className="home-contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Have a complex product worth making useful?</h2>
        <div>
          <p>I partner with teams to turn messy problems and ambitious ideas into products people can use.</p>
          <div className="home-actions">
            <a className="home-primary-action" href="mailto:jameslytle@hey.com">
              Start a conversation <span aria-hidden="true">→</span>
            </a>
            <Link className="home-secondary-action" to="/resume">
              View résumé
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
