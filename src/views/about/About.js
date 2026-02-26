import React from 'react';
import './About.css';

function About() {

  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
  }

  const valeurs = [
    {
      title: "Exigence",
      desc: "Nous sommes exgigents et sérieux dans notre travail. Nous avons à coeur des remplir correctement nos missions"
    },
    {
      title: "Culture Linux & Open Source",
      desc: "Nous utilisons quotidiennement Linux ainsi que des logiciels open-sources (Draw.io, Krita, OnlyOffice...), et pratiquons une veille constante sur les technologies open-sources"
    },
    {
      title: "Apprentissage",
      desc: "Nous sommes deux passionnés d'informatique et nous nous intéressons à tous les domaines. Nous aimons développer constamment de nouvelles compétences"
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
          <br/>
          <h4>Alexandre</h4>
          <p>
            Je m'appelle Alexandre, j'ai {getAge("July 5, 2005 07:00:00")} ans et je suis Lyonnais. Je me suis pris de passion pour l'informatique lors de ma dernière année de lycée.
            <br/>
            Je suis travailleur, assidu et sérieux. Sur mon temps personnel, j'aime découvrir de nouvelles technologies et les utiliser.
            <br/>
            En dehors de l'informatique, je suis un grand passionné de robotique, d'astronomie, de sport (football et sports de combat) ainsi que de musique.
          </p>
          <h4>Valentin</h4>
          <p>
            Je m'appelle Valentin, j'ai {getAge("November 24, 2005 07:00:00")} ans et je suis lyonnais.
            J'ai découvert l'informatique en classe de Seconde et suis devenu un passioné.
            <br/>
            Je suis quelqu'un de très attentif aux autres, à l'écoute des besoins de chacun.
            <br/>
            En dehors de l'informatique, j'aime la littérature, la philosophie, l'astronomie, le football et la musique.
            <br/>
            Je suis également élève au Conservatoire de Lyon en Chant Lyrique.
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
              automatisation, intérêts pour les frameworks peu connus
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
              et programmation défensive.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;