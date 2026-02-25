import Timeline from "../../components/Timeline/Timeline";
import "./NotreParcours.css";

function NotreParcours() {

  const events = [
    {
      id: 1,
      title: "Baccalauréat",
      date: "Janvier 2025",
      description: "Obtention de mon BAC spécialté Maths SVT."
    },
    {
      id: 2,
      title: "Institution des Chartreux",
      date: "2023 - 2024",
      description: "Formation en BTS SIO option SISR (Réseau)."
    },
    {
      id: 3,
      title: "Stage en première année de BTS",
      date: "Juin - Juillet 2024",
      description: "Stagiaire chez Advolis Orfis"
    },
    {
      id: 4,
      title: "Stage en deuxième année de BTS",
      date: "Mars - Avril 2025",
      description: "Stagiaire chez Advolis Orfis"
    },
    {
      id: 5,
      title: "Formation d'ingénieur à CPE Lyon",
      date: "2025 - 2026",
      description: "Formation d'ingnéieur en Cybersécurité"
    },
  ];

  return (
    <div className="notre-parcours">
      <Timeline events={events} />
    </div>
  );
}

export default NotreParcours;