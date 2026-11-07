import { Link } from 'react-router-dom';

export default function LabTags({ tags, linkToArchive = false }) {
  if (!tags?.length) return null;

  return <div className="lab-topics">
    {tags.map(tag => linkToArchive
      ? <Link className="lab-badge" key={tag} to={`/other-things?${new URLSearchParams({ tag })}`}>{tag}</Link>
      : <span className="lab-badge" key={tag}>{tag}</span>)}
  </div>;
}
