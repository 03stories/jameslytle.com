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

function FigureLabel({ children }) {
  return (
    <figcaption className="home-figure-label">
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
            <FigureLabel>Forward / Insights Recap · Originated and bootstrapped at Juice Analytics</FigureLabel>
          </figure>

          <div className="home-intro">
            <h2 id="home-heading">Design engineer and product design leader making complex products useful.</h2>
            <div className="home-intro-copy">
              <p>
                I connect product strategy, interface design, production code, and AI behavior. I take ambiguous
                problems from first principles to shipped products.
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

        <aside className="home-rail" aria-label="Current role and working approach">
          <section>
            <h3>Current role</h3>
            <p>Senior product design lead at Juice Analytics.</p>
          </section>
          <section>
            <h3>Working range</h3>
            <p>Product strategy<br />Interface design<br />Production code<br />AI behavior</p>
          </section>
          <section>
            <h3>Working approach</h3>
            <p>Self-directed, pragmatic, and thorough.</p>
          </section>
        </aside>
      </div>

      <div className="home-work">
        <article className="home-project home-project-forward">
          <div className="home-project-copy">
            <h2>Forward / Insights Recap</h2>
            <p className="home-role">Product originator · Design and implementation lead</p>
            <p className="home-project-lede">Turns customer data into personalized, interactive stories at scale.</p>
            <p>
              I originated and independently bootstrapped Forward as a new product inside Juice Analytics—defining
              the strategy, experience, AI behavior, and much of the initial production implementation. I now develop
              it with the broader team.
            </p>
            <a className="home-text-link" href="https://www.insightsrecap.com/">
              View live product <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="home-forward-pair">
            <img className="home-forward-mobile" src={projects.forward} alt="Forward mobile personalized story detail" />
            <img className="home-forward-wide" src={projects.forward} alt="Forward product landing experience" />
            <FigureLabel>Personalized story experience · Product in the wild</FigureLabel>
          </figure>
        </article>

        <article className="home-project home-project-juicebox">
          <div className="home-project-copy">
            <h2>Juicebox</h2>
            <p className="home-role">Product design lead</p>
            <p className="home-project-lede">A data platform for exploring and presenting data stories.</p>
            <p>
              I led interaction and interface design across the platform's evolution, turning recurring client needs
              into a configurable component system and, later, a self-service authoring experience.
            </p>
            <Link className="home-text-link" to="/projects/juicebox">
              View project <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-juicebox-pair">
            <img className="home-juicebox-wide" src={projects.juicebox} alt="Juicebox story designer and data story" />
            <img className="home-juicebox-detail" src={projects.juiceboxDetail} alt="Juicebox story designer detail" />
            <FigureLabel>Story canvas · Designer controls</FigureLabel>
          </figure>
        </article>

        <article className="home-project home-project-docs">
          <div className="home-project-copy">
            <h2>Design Docs</h2>
            <p className="home-role">Process design · Cross-functional practice</p>
            <p className="home-project-lede">Clear briefs and living notes that keep teams aligned.</p>
            <p>
              I created and evolved this working-document practice to preserve design context, improve developer
              handoff, and make decisions easier for teams to revisit.
            </p>
            <Link className="home-text-link" to="/projects/design-docs">
              View project <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-docs-figure">
            <img src={projects.designDocs} alt="Design document template with summary and progress notes" />
            <FigureLabel>A working document, not a handoff artifact</FigureLabel>
          </figure>
        </article>

        <article className="home-project home-project-palette">
          <div className="home-project-copy">
            <h2>Photo Palette</h2>
            <p className="home-role">Designer and developer</p>
            <p className="home-project-lede">Extracts color palettes from any photo and outputs copy-ready CSS values.</p>
            <p>
              I designed and built the in-browser utility, including draggable sampling points, multiple color formats,
              and a live theme preview.
            </p>
            <Link className="home-text-link" to="/other-things/photo-palette">
              Try the tool <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-palette-pair">
            <img className="home-palette-wide" src={projects.palette} alt="Photo Palette utility interface" />
            <img className="home-palette-detail" src={projects.palettePhoto} alt="Sample photo used to generate a color palette" />
            <FigureLabel>Palette utility · Sample picker</FigureLabel>
          </figure>
        </article>
      </div>

      <section className="home-principles" aria-labelledby="principles-heading">
        <h2 id="principles-heading">How the work happens</h2>
        <ul>
          <li>Clarify the problem before polishing the interface.</li>
          <li>Prototype in the material of the final product.</li>
          <li>Document decisions so teams can carry them forward.</li>
        </ul>
      </section>

      <section className="home-contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Have a complex product worth making useful?</h2>
        <div>
          <p>
            I'm open to senior design-engineering and product leadership opportunities, and select collaborations on
            complex data or AI products.
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
      </section>
    </section>
  );
}
