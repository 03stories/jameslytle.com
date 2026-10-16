const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function MaterialIcon({ name }) {
  return (
    <span
      className="material-icon"
      aria-hidden="true"
      style={{ '--material-icon': `url("${asset(`icons/material/${name}.svg`)}")` }}
    />
  );
}
