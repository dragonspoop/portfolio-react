export default function ProjectCard({
  title,
  description,
  tags,
  repo,
  demo,
  pic,
}) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <img
        src={pic}
        alt=''
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: "12px",
        }}
      />
      <p>{description}</p>
      <div
        style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}
      >
        {tags.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {demo && (
          <a className="btn" href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {repo && (
          <a className="btn" href={repo} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
