import { Link } from 'react-router-dom';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = {
  forward: asset('content/site/home/forward-insights-recap-home.png'),
  juicebox: asset('content/projects/juicebox/jb-header.png'),
  juiceboxDetail: asset('content/projects/juicebox/jb-story-designer.png'),
  narrativeWorkflow: asset('content/projects/forward-narrative-skill/workflow-before-after.svg'),
  narrativeLoop: asset('content/projects/forward-narrative-skill/continuous-improvement-loop.svg'),
  narrativeInsight: asset('content/projects/forward-narrative-skill/bar-insight-pattern.svg'),
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
        <div className="home-opening-main">
          <figure className="home-hero-figure">
            <img src={projects.forward} alt="Forward personalized story shown alongside a mobile experience" />
            <FigureLabel>Forward / Insights Recap · Originated and bootstrapped at Juice Analytics</FigureLabel>
          </figure>

          <div className="home-intro">
            <h2 id="home-heading">Design engineer & product design leader making complex products useful.</h2>
            <div className="home-intro-copy">
              <p>
                I connect product strategy, interface design, production code, and AI behavior to make complex products useful.
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
            <p>Design Engineer & Product Lead at Juice Analytics.</p>
          </section>
          <section>
            <h3>Working range</h3>
            <p>Product strategy<br />UI / UX<br />AI development<br />Prototyping</p>
          </section>
          <section>
            <h3>Working approach</h3>
            <p>Self-directed, pragmatic, continuous improvement.</p>
          </section>
        </aside>
      </div>

      <div className="home-work">
        <article className="home-project home-project-forward">
          <div className="home-project-copy">
            <h2>Forward</h2>
            <p className="home-role">Product originator · Design and implementation lead</p>
            <p className="home-project-lede">Turns customer data into personalized, mobile-first narratives at scale.</p>
            <p>
              I originated and bootstrapped Forward inside Juice Analytics, shaping its strategy, experience, AI behavior,
              and initial production implementation. I now lead product direction with the broader team as we expand its market.
            </p>
            <a className="home-text-link" href="https://www.insightsrecap.com/">
              View live product <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="home-forward-pair">
            <img className="home-forward-mobile" src={projects.forward} alt="Forward personalized story on a mobile screen" />
            <img className="home-forward-wide" src={projects.forward} alt="Forward personalized data narrative" />
            <FigureLabel>Personalized narratives at scale</FigureLabel>
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

        <article className="home-project home-project-skill">
          <div className="home-project-copy">
            <h2>Forward Narrative Skill</h2>
            <p className="home-role">AI product system · Design and implementation lead</p>
            <p className="home-project-lede">Turn one person’s narrative expertise into a team capability.</p>
            <p>
              I built and maintain a Claude Skill that helps the team create and share sales narratives rapidly,
              replacing a process that could take days and depend on me alone.
            </p>
            <Link className="home-text-link" to="/projects/forward-narrative-skill">
              View project <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-skill-visuals">
            <img className="home-skill-workflow" src={projects.narrativeWorkflow} alt="Narrative creation moves from a single-person code and deployment process to team-wide creation and sharing" />
            <div className="home-skill-details">
              <img src={projects.narrativeLoop} alt="A continuous improvement loop turns team use into reusable product and skill improvements" />
              <img src={projects.narrativeInsight} alt="A narrative chart uses a concise headline and visual emphasis to make its key insight clear" />
            </div>
            <FigureLabel>Workflow, improvement practice, and a reusable visual pattern</FigureLabel>
          </figure>
        </article>

        <section className="home-history" aria-labelledby="history-heading">
          <div className="home-history-copy">
            <p className="home-history-label">An earlier chapter · 2011–2017</p>
            <h2 id="history-heading">Finestra Art App</h2>
            <p className="home-project-lede">A startup chapter that still shapes how I think about making products.</p>
            <p>
              My brother and I built a marketplace to connect local artists with buyers. I led product design and built
              the marketing site; he led iOS engineering. I value the work and the people it brought together. I’d make
              many design decisions differently today, so I share it as an honest record of the attempt and what I learned.
            </p>
            <Link className="home-text-link" to="/projects/finestra-art-app">
              Revisit the Finestra story <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="home-history-images">
            <img src={projects.finestraApp} alt="An early Finestra screen for discovering local artwork" />
            <img src={projects.finestraArtist} alt="An early Finestra screen for artists to add artwork" />
            <FigureLabel>Product work from an earlier era</FigureLabel>
          </figure>
        </section>
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
