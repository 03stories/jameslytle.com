import { Link } from 'react-router-dom';
import MaterialIcon from './MaterialIcon';

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
    <figcaption className="portfolio-figure-label">
      {children}
    </figcaption>
  );
}

export default function SelectedWork() {
  return (
      <div className="portfolio-work" aria-labelledby="selected-work-heading">
        <h2 className="portfolio-work-heading" id="selected-work-heading">Selected work</h2>
        <article className="portfolio-project portfolio-project-forward">
          <div className="portfolio-project-copy">
            <h3>Forward</h3>
            <p className="portfolio-role">Role: Product originator, design and implementation lead</p>
            <p className="portfolio-project-lede">Turns customer data into personalized, mobile-first narratives at scale.</p>
            <p>
              I originated and bootstrapped Forward inside Juice Analytics, shaping its strategy, experience, AI behavior,
              and initial production implementation. I now lead product direction with the broader team as we expand its market.
            </p>
            <div className="portfolio-project-links">
              <Link className="portfolio-text-link" to="/projects/forward">Read the case study <MaterialIcon name="chevron_right" /></Link>
              <a className="portfolio-live-link" href="https://www.insightsrecap.com/">Live product <MaterialIcon name="open_in_new" /></a>
            </div>
          </div>
          <figure className="portfolio-forward-pair">
            <img className="portfolio-forward-wide" loading="lazy" src={projects.forward} alt="Forward’s customer narrative experience alongside its product introduction" />
          </figure>
        </article>

        <article className="portfolio-project portfolio-project-juicebox">
          <div className="portfolio-project-copy">
            <h3>Juicebox</h3>
            <p className="portfolio-role">Role: Product design lead</p>
            <p className="portfolio-project-lede">A data platform for exploring and presenting data stories.</p>
            <p>
              I led interaction and interface design across the platform's evolution, turning recurring client needs
              into a configurable component system and, later, a self-service authoring experience.
            </p>
            <Link className="portfolio-text-link" to="/projects/juicebox">
              View project <MaterialIcon name="chevron_right" />
            </Link>
          </div>
          {/* TODO: Replace this historical Juicebox capture with a stronger representative product image. See portfolio/CONTENT_GAPS.md G-027. */}
          <figure className="portfolio-juicebox-pair">
            <img className="portfolio-juicebox-wide" loading="lazy" src={projects.juicebox} alt="Juicebox story designer and data story" />
            <FigureLabel>Story canvas · Designer controls</FigureLabel>
          </figure>
        </article>

        <article className="portfolio-project portfolio-project-skill">
          <div className="portfolio-project-copy">
            <h3>Forward Narrative Skill</h3>
            <p className="portfolio-role">Role: AI product system, design and implementation lead</p>
            <p className="portfolio-project-lede">Turn one person’s narrative expertise into a team capability.</p>
            <p>
              I built and maintain a Claude Skill that helps the team create and share sales narratives rapidly,
              replacing a process that could take days and depend on me alone.
            </p>
            <Link className="portfolio-text-link" to="/projects/forward-narrative-skill">
              View project <MaterialIcon name="chevron_right" />
            </Link>
          </div>
          <figure className="portfolio-skill-visuals">
            <img className="portfolio-skill-workflow" src={projects.narrativeWorkflow} alt="Narrative creation moves from a single-person code and deployment process to team-wide creation and sharing" />
            <FigureLabel>A schematic of the workflow change</FigureLabel>
          </figure>
        </article>

        <section className="portfolio-history" aria-labelledby="history-heading">
          <div className="portfolio-history-copy">
            <p className="portfolio-history-label"><MaterialIcon name="archive" /> From the archive · 2011–2017</p>
            <h2 id="history-heading">Finestra Art App</h2>
            <p>
              My brother and I built a marketplace for local artists and buyers. I led product design and the marketing
              site; he led iOS engineering. An honest record of the attempt, what I learned, and what I’d do differently today.
            </p>
            <Link className="portfolio-text-link" to="/projects/finestra-art-app">
              Revisit the Finestra story <MaterialIcon name="chevron_right" />
            </Link>
          </div>
          <figure className="portfolio-history-images">
            <img src={projects.finestraApp} alt="An early Finestra screen for discovering local artwork" />
            <img src={projects.finestraArtist} alt="An early Finestra screen for artists to add artwork" />
            <FigureLabel>Product work, 2011–2017</FigureLabel>
          </figure>
        </section>
      </div>

  );
}
