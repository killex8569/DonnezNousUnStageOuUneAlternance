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
      title: "MVP",
      date: "Mars 2025",
      description: "Première version en production."
    },
    {
      id: 3,
      title: "Version 2.0",
      date: "Juin 2025",
      description: "DAMn"
    },
    {
      id: 4,
      title: "Test",
      date: "Juin 2025",
      description: "test"
    },
    {
      id: 5,
    },
  ];

  return (
    <div className="notre-parcours">
      <Timeline events={events} />
    </div>
  );
}

export default NotreParcours;