import SelectedWork from '../components/SelectedWork';

export default function ProjectsPage() {
  return (
    <section className="portfolio-page projects-page" aria-labelledby="projects-heading">
      <header className="portfolio-opening">
        <h2 id="projects-heading">Projects</h2>
        <p>Selected work in product design, engineering, and AI, with an earlier chapter from the archive.</p>
      </header>
      <SelectedWork surface="projects" />
    </section>
  );
}
