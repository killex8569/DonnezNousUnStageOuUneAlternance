import Timeline from "../../components/Timeline/Timeline";
import {Switch, LeftContent, RightContent} from '../../components/Switch/Switch'
import "./NotreParcours.css";

function NotreParcours() {

  const AlexandreEvents = [
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
  ]

  const ValentinEvents = [
    {
      id: 1,
      title: "Master Ingénieur en Cybersécurité à CPE Lyon",
      date: "En ce moment",
      description: "Perfectionnement en cybersécurité, approfondissement des compétences en réseaux et développement, cours et travaux théoriques et pratiques, projets"
    },
    {
      id: 2,
      title: "Stage en développement web (2nd année de BTS) : Institut de Biologie et Chimie des Protéines",
      date: "mars - avril 2025",
      description: "stage de 8 semaines - développement d'une application web intégrant des services bioinformatiques : FastAPI (Python), Svelte (Javascript), MariaDB (SQL), Environnement Linux"
    },
    {
      id: 3,
      title: "Stage en développement web (1ère année de BTS) : Xev",
      date: "Juin - Juillet 2024",
      description: "stage de 6 semaines - travail sur différents projets agiles : Strapi, Angular, Shopify, Scripting en Python, ERP (Java, CSV)"
    },
    {
      id: 4,
      title: "BTS informatique (SIO) spécialité développement à l'Institution des Chartreux",
      date: "septembre 2023 - juin 2025",
      description: "Apprentissage des concepts fondamentaux de l'informatique, cours et travaux pratiques en salle informatique (Réseaux, Développement, Cybersécurité...), spécialité développement : Orienté Objet, développement web/logiciel/mobile, bases de données"
    },
    {
      id: 5,
      title: "Baccalauréat en Mathématiques et Informatique (NSI)",
      date: "juin 2023",
      description: "mention Très Bien"
    },
  ]

  return (
    <Switch leftTitle={"Alexandre"} rightTitle={"Valentin"}>
      <LeftContent>
      <div className="notre-parcours">
        <Timeline events={AlexandreEvents} />
      </div>
      </LeftContent>
      <RightContent>
        <div className="notre-parcours">
          <Timeline events={ValentinEvents} />
        </div>
      </RightContent>
    </Switch>
  );
}

export default NotreParcours;