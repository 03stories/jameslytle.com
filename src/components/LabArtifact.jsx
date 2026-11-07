export default function LabArtifact({ artifact }) {
  const { type, title, url, alt, caption, poster, captions, embed = true } = artifact;
  return <figure className={`lab-attachment lab-attachment-${type}`}>
    {embed && type === 'image' && <img src={url} alt={alt} loading="lazy" />}
    {embed && type === 'video' && <video controls playsInline preload="metadata" poster={poster} aria-label={title} src={url}>{captions && <track kind="captions" src={captions} srcLang="en" label="English" default />}<a href={url}>{title}</a></video>}
    {embed && type === 'audio' && <audio controls preload="metadata" aria-label={title} src={url}><a href={url}>{title}</a></audio>}
    {embed && ['html', 'embed'].includes(type) && <iframe title={title} src={url} sandbox="allow-scripts allow-downloads" allowFullScreen referrerPolicy="no-referrer" />}
    <figcaption><a className="portfolio-text-link" href={url} target="_blank" rel="noreferrer">{title}<span aria-hidden="true"> ↗</span></a>{caption && <p>{caption}</p>}</figcaption>
  </figure>;
}
