export default function ResumePage() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download: <a href={resumeHref}>resume.pdf</a>
      </p>
    </section>
  );
}
