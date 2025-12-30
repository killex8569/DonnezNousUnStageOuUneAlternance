import React from 'react';
import './Accueil.css';

// Composant réutilisable pour les cartes (Compétents, Motivés, Travailleurs)
const FeatureCard = ({ title, content, reverse }) => (
  <div className={`feature-card ${reverse ? 'reverse' : ''}`}>
    <div className="text-content">
      <h3>{title}</h3>
      <div className="dashed-text-content">
        {content.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
    <div className="image-content">
      <div className="placeholder-square large"></div>
    </div>
  </div>
);

// Composant Appel à l'action
const CTASection = () => (
  <section className="cta-section">
    <p className="cta-intro">Alors n'attendez pas :</p>
    <h2 className="cta-title">EMBAUCHEZ-NOUS SIVOUPLÉ</h2>
  </section>
);

// Composant Pied de page
const Footer = () => (
  <footer className="footer"></footer>
);

function Accueil() {
  // Données pour les cartes
  const dummyLines = ["------", "--------------", "----------------------", "-------------", "------", "----------------"];

  return (
    <div className="App">
      
      <div className="container">
      <section className="profile-section">
        <h1 className="main-title">
          DONNEZ NOUS UN STAGE OU UNE ALTERNANCE SIVOUPLÉ
        </h1>

        <div className="profiles-container">
          {/* Profil Gauche */}
          <div className="profile-item">
          <div className="placeholder-square"></div>
            <div className="dashed-text">
              <p>----</p>
              <p>---</p>
              <p>------</p>
              <p>-----------</p>
            </div>
          </div>

          {/* Profil Droite */}
          <div className="profile-item">
            <div className="placeholder-square"></div>
            <div className="dashed-text">
              <p>----</p>
              <p>---</p>
              <p>------</p>
              <p>-----------</p>
            </div>
          </div>
        </div>

        {/* Texte central */}
        <div className="central-info-box">
          <p>A l'école CPE LYON</p>
          <p>A la recherche d'un stage du X</p>
          <p>au Y et d'une alternance...</p>
        </div>
      </section>
        
        {/* Carte 1 : Image à droite (standard) */}
        <FeatureCard 
          title="Nous sommes compétents !!" 
          content={dummyLines} 
        />

        {/* Carte 2 : Image à gauche (reverse) */}
        <FeatureCard 
          title="Nous sommes motivés !!" 
          content={dummyLines} 
          reverse={true}
        />

        {/* Carte 3 : Image à droite (standard) */}
        <FeatureCard 
          title="Nous sommes travailleurs !!" 
          content={dummyLines} 
        />

        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;