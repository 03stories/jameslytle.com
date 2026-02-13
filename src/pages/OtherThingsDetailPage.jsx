import { Link, useParams } from 'react-router-dom';
import albums from '../content/other-things.json';
import { formatDateLabel } from '../utils/formatDate';

export default function OtherThingsDetailPage() {
  const { slug } = useParams();
  const album = albums.find((entry) => entry.slug === slug);

  if (!album) {
    return (
      <section>
        <h2>Album not found</h2>
        <Link to="/other-things">Back to albums</Link>
      </section>
    );
  }

  return (
    <article>
      <h2>{album.title}</h2>
      <p className="meta">{formatDateLabel(album.date)}</p>
      {Array.isArray(album.images) && album.images.length ? (
        <div className="card-list">
          {album.images.map((image) => (
            <figure key={image} className="card">
              <img src={image} alt={`${album.title} media`} style={{ maxWidth: '100%' }} />
            </figure>
          ))}
        </div>
      ) : null}
      <div className="prose" dangerouslySetInnerHTML={{ __html: album.html }} />
      <p>
        <Link to="/other-things">Back to albums</Link>
      </p>
    </article>
  );
}
