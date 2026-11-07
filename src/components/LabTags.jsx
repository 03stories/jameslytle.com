export default function LabTags({ tags }) {
  if (!tags?.length) return null;

  return <div className="lab-topics">
    {tags.map(tag => <span className="lab-badge" key={tag}>{tag}</span>)}
  </div>;
}
