import { Link } from 'react-router-dom';
import albums from '../content/other-things.json';

export default function OtherThingsPage() {
  return (
    <section>
      <h2>Other Things</h2>
      <ul className="card-list">
        {albums.map((album) => (
          <li key={album.slug} className="card">
            <h3>{album.title}</h3>
            <p className="meta">{album.date || 'No date'}</p>
            {album.cover ? <p className="meta">Cover: {album.cover}</p> : null}
            <Link to={`/other-things/${album.slug}`}>View album</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
