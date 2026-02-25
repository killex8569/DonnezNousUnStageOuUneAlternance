import React from 'react';
import './About.css';

function About() {

  const valeurs = [
    {
      title: "Exigence technique",
      desc: "Nous privilégions des architectures propres, maintenables et sécurisées. La qualité du code et l'optimisation sont des priorités."
    },
    {
      title: "Culture Linux & Open Source",
      desc: "Utilisation quotidienne de Linux, contribution et veille constante sur les technologies open-source."
    },
    {
      title: "Approche Infrastructure",
      desc: "Maîtrise des environnements systèmes, réseaux et virtualisation avec une vision orientée production."
    }
  ];

  const visionPoints = [
    "Construire des systèmes robustes et évolutifs",
    "Automatiser pour gagner en fiabilité",
    "Intégrer la cybersécurité dès la conception",
    "Déployer des infrastructures reproductibles",
  ];

  return (
    <div className="about-container">

      {/* HERO */}
      <section className="about-section about-hero">
        <h1 className="about-hero-title">À propos</h1>
        <h3 className="about-hero-subtitle">
          Deux profils complémentaires orientés ingénierie logicielle,
          infrastructure et cybersécurité.
        </h3>
      </section>

      {/* SECTION 1 - QUI SOMMES NOUS */}
      <section className="about-section">
        <div className="about-card">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Étudiants ingénieurs à CPE Lyon, nous développons des compétences
            solides en développement logiciel, systèmes, réseaux et sécurité.
            Nous travaillons régulièrement sur des projets communs
            afin de consolider nos compétences techniques.
          </p>
        </div>
      </section>

      {/* SECTION 2 - VALEURS */}
      <section className="about-section about-values">
        <h2>Nos valeurs</h2>
        <div className="about-values-grid">
          {valeurs.map((valeur, idx) => (
            <div key={idx} className="about-value-card">
              <h4>{valeur.title}</h4>
              <p>{valeur.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 - VISION */}
      <section className="about-section about-vision">
        <div className="about-card">
          <h2>Notre vision</h2>
          <ul className="about-list">
            {visionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4 - STACK */}
      <section className="about-section about-stack">
        <h2>Notre approche technologique</h2>
        <div className="about-stack-content">
          <div className="about-stack-box">
            <h4>Développement</h4>
            <p>
              Applications web full-stack, APIs REST, scripting et
              automatisation.
            </p>
          </div>
          <div className="about-stack-box">
            <h4>Infrastructure</h4>
            <p>
              Virtualisation, conteneurisation, administration Linux,
              réseaux et supervision.
            </p>
          </div>
          <div className="about-stack-box">
            <h4>Sécurité</h4>
            <p>
              Sécurité réseau, bonnes pratiques, segmentation, contrôle d'accès
              et durcissement des systèmes.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;