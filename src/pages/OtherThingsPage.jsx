import { Link } from 'react-router-dom';
import albums from '../content/other-things.json';
import { formatDateLabel } from '../utils/formatDate';

export default function OtherThingsPage() {
  return (
    <section>
      <h2>Other Things</h2>
      <ul className="card-list">
        {albums.map((album) => {
          const dateLabel = formatDateLabel(album.date);

          return (
            <li key={album.slug} className="card">
              {album.cover ? <img className="card-cover-image" src={album.cover} alt={`${album.title} cover`} /> : null}
              <h3>{album.title}</h3>
              {dateLabel !== 'No date' ? <p className="meta">{dateLabel}</p> : null}
              <Link to={`/other-things/${album.slug}`}>View album</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
