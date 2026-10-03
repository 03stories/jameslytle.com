import { Link } from 'react-router-dom';
import MaterialIcon from '../components/MaterialIcon';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = {
  forward: asset('content/site/home/forward-insights-recap-home.png'),
  juicebox: asset('content/projects/juicebox/jb-header.png'),
  narrativeWorkflow: asset('content/projects/forward-narrative-skill/workflow-wireframe.svg'),
  finestraApp: asset('content/projects/finestra-art-app/localart-artwork-2.png'),
  finestraArtist: asset('content/projects/finestra-art-app/localart-artwork-createnew1.png')
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
        <div className="home-intro">
          <h2 id="home-heading">
            Design engineer &amp; product design leader
            <span>making complex products useful.</span>
          </h2>
          <div className="home-intro-copy">
            <p>
              I connect product strategy, interface design, production code, and AI behavior—from the first question to a working product.
            </p>
            <div className="home-actions">
              <a className="home-primary-action" href="mailto:jameslytle@hey.com">
                <MaterialIcon name="mail" /> Start a conversation
              </a>
              <Link className="home-secondary-action" to="/resume">Resume <MaterialIcon name="description" /></Link>
            </div>
            <p className="home-current-role">Current: Design Engineer &amp; Product Lead at Juice Analytics.</p>
          </div>
        </div>
      </div>

      <div className="home-work" aria-labelledby="selected-work-heading">
        <h2 className="home-work-heading" id="selected-work-heading">Selected work</h2>
        <article className="home-project home-project-forward">
          <div className="home-project-copy">
            <h3>Forward</h3>
            <p className="home-role">Role: Product originator, design and implementation lead</p>
            <p className="home-project-lede">Turns customer data into personalized, mobile-first narratives at scale.</p>
            <p>
              I originated and bootstrapped Forward inside Juice Analytics, shaping its strategy, experience, AI behavior,
              and initial production implementation. I now lead product direction with the broader team as we expand its market.
            </p>
            <div className="home-project-links">
              <Link className="home-text-link" to="/projects/forward">Read the case study <MaterialIcon name="chevron_right" /></Link>
              <a className="home-live-link" href="https://www.insightsrecap.com/">Live product <MaterialIcon name="open_in_new" /></a>
            </div>
          </div>
          <figure className="home-forward-pair">
            <img className="home-forward-wide" loading="lazy" src={projects.forward} alt="Forward’s customer narrative experience alongside its product introduction" />
          </figure>
        </article>

        <article className="home-project home-project-juicebox">
          <div className="home-project-copy">
            <h3>Juicebox</h3>
            <p className="home-role">Role: Product design lead</p>
            <p className="home-project-lede">A data platform for exploring and presenting data stories.</p>
            <p>
              I led interaction and interface design across the platform's evolution, turning recurring client needs
              into a configurable component system and, later, a self-service authoring experience.
            </p>
            <Link className="home-text-link" to="/projects/juicebox">
              View project <MaterialIcon name="chevron_right" />
            </Link>
          </div>
          {/* TODO: Replace this historical Juicebox capture with a stronger representative product image. See portfolio/CONTENT_GAPS.md G-027. */}
          <figure className="home-juicebox-pair">
            <img className="home-juicebox-wide" loading="lazy" src={projects.juicebox} alt="Juicebox story designer and data story" />
            <FigureLabel>Story canvas · Designer controls</FigureLabel>
          </figure>
        </article>

        <article className="home-project home-project-skill">
          <div className="home-project-copy">
            <h3>Forward Narrative Skill</h3>
            <p className="home-role">Role: AI product system, design and implementation lead</p>
            <p className="home-project-lede">Turn one person’s narrative expertise into a team capability.</p>
            <p>
              I built and maintain a Claude Skill that helps the team create and share sales narratives rapidly,
              replacing a process that could take days and depend on me alone.
            </p>
            <Link className="home-text-link" to="/projects/forward-narrative-skill">
              View project <MaterialIcon name="chevron_right" />
            </Link>
          </div>
          <figure className="home-skill-visuals">
            <img className="home-skill-workflow" src={projects.narrativeWorkflow} alt="Narrative creation moves from a single-person code and deployment process to team-wide creation and sharing" />
            <FigureLabel>A schematic of the workflow change</FigureLabel>
          </figure>
        </article>

        <section className="home-history" aria-labelledby="history-heading">
          <div className="home-history-copy">
            <p className="home-history-label"><MaterialIcon name="archive" /> From the archive · 2011–2017</p>
            <h2 id="history-heading">Finestra Art App</h2>
            <p>
              My brother and I built a marketplace for local artists and buyers. I led product design and the marketing
              site; he led iOS engineering. An honest record of the attempt, what I learned, and what I’d do differently today.
            </p>
            <Link className="home-text-link" to="/projects/finestra-art-app">
              Revisit the Finestra story <MaterialIcon name="chevron_right" />
            </Link>
          </div>
          <figure className="home-history-images">
            <img src={projects.finestraApp} alt="An early Finestra screen for discovering local artwork" />
            <img src={projects.finestraArtist} alt="An early Finestra screen for artists to add artwork" />
            <FigureLabel>Product work, 2011–2017</FigureLabel>
          </figure>
        </section>
      </div>

      <section className="home-contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Let’s chat</h2>
        <div>
          <p>
            I'm open to senior design-engineering and product leadership opportunities, and select collaborations on
            complex data or AI products.
          </p>
          <div className="home-actions">
            <a className="home-primary-action" href="mailto:jameslytle@hey.com">
              <MaterialIcon name="mail" /> Start a conversation
            </a>
            <Link className="home-secondary-action" to="/resume">
              Resume <MaterialIcon name="description" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
