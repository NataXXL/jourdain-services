function ProjectCard({ titre, description }) {
  return (
    <article
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "0.9rem",
        backgroundColor: "#ffffff",
      }}
    >
      <h3 style={{ margin: "0 0 0.4rem 0" }}>{titre}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </article>
  );
}

export default ProjectCard;
