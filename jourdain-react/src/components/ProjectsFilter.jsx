import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    titre: "Portfolio photographe",
    description: "Site vitrine moderne pour un studio photo.",
    category: "web",
  },
  {
    id: 2,
    titre: "Landing page SaaS",
    description: "Page de conversion pour une application B2B.",
    category: "web",
  },
  {
    id: 3,
    titre: "Refonte site restaurant",
    description: "Mise en valeur du menu et réservation en ligne.",
    category: "web",
  },
  {
    id: 4,
    titre: "Logo atelier floral",
    description: "Identité visuelle douce et premium.",
    category: "branding",
  },
  {
    id: 5,
    titre: "Charte graphique startup",
    description: "Palette, typographie et univers de marque complet.",
    category: "branding",
  },
  {
    id: 6,
    titre: "Pack réseaux sociaux",
    description: "Templates visuels cohérents pour Instagram et LinkedIn.",
    category: "branding",
  },
];

function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  
  const btnStyle = (filter) => ({
    padding: "0.4rem 0.9rem",
    borderRadius: "999px",
    border: "1px solid #4f46e5",
    backgroundColor: activeFilter === filter ? "#4f46e5" : "transparent",
    color: activeFilter === filter ? "#ffffff" : "#4f46e5",
    cursor: "pointer",
  });

  return (
    <section>
      <h2>Projets</h2>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button
          type="button"
          style={btnStyle("all")}
          onClick={() => setActiveFilter("all")}
        >
          Tous
        </button>
        <button
          type="button"
          style={btnStyle("web")}
          onClick={() => setActiveFilter("web")}
        >
          Web
        </button>
        <button
          type="button"
          style={btnStyle("branding")}
          onClick={() => setActiveFilter("branding")}
        >
          Branding
        </button>
      </div>

      <div style={{ display: "grid", gap: "0.8rem" }}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            titre={project.titre}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsFilter;
