function ServiceCard({ icon, titre, description }) {
  return (
    <article
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{icon}</div>
      <h3 style={{ margin: "0 0 0.5rem 0" }}>{titre}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </article>
  );
}

export default ServiceCard;
