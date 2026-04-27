import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: "💻",
    titre: "Création de site web",
    description: "Sites vitrines performants et adaptés à vos objectifs.",
  },
  {
    id: 2,
    icon: "🎨",
    titre: "Identité visuelle",
    description: "Conception d'une image de marque cohérente et mémorisable.",
  },
  {
    id: 3,
    icon: "🚀",
    titre: "Optimisation SEO",
    description: "Amélioration du référencement pour attirer plus de clients.",
  },
];

function Services() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2>Services</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            titre={service.titre}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
