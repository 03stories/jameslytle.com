import MaterialIcon from '../components/MaterialIcon';

export default function ResumePage() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section className="portfolio-page resume-page">
      <header className="portfolio-page-opening">
      <h2>Resume</h2>
      <p className="portfolio-page-lede">Design engineer and product design leader making complex products useful.</p>
      <a className="portfolio-text-link" href={resumeHref}><MaterialIcon name="description" />View resume (PDF)</a>
      </header>
    </section>
  );
}
