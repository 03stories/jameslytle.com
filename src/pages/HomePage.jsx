import { Link } from 'react-router-dom';
import MaterialIcon from '../components/MaterialIcon';
import SelectedWork from '../components/SelectedWork';

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

      <SelectedWork />

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
