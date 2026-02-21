import React from 'react';
import './Accueil.css';

// Composant réutilisable pour les cartes (Compétents, Motivés, Travailleurs)
const FeatureCard = ({ title, content, reverse }) => (
  <div className={`accueil-feature-card ${reverse ? 'reverse' : ''}`}>
    <div className="accueil-text-content">
      <h2>{title}</h2>
      {content.map((line, index) => (
          <p key={index}>{line}</p>
      ))}
    </div>
    <div className="accueil-placeholder-square">photo convaincante</div>
  </div>
);

function Accueil() {
  return (
    <>
      
      <div className="accueil-container">
      <section className="accueil-profile-section">
        <h1 className="accueil-main-title">
          DONNEZ NOUS UN STAGE OU UNE ALTERNANCE SIVOUPLÉ
        </h1>

        <div className="accueil-inline-center">
          <div className="accueil-profile-item">
            <img src="valentin.jpg" alt="Photo Valentin Ryckaert" style={{height: 320}}/>
            <h3>Valentin Ryckaert</h3>
          </div>        
          <div className="accueil-profile-item">
            <div className="accueil-placeholder-square">Alexandre</div>
            <h3>Alexandre Faubladier--Anette</h3>
          </div>
        </div>
        <br/><br/>

        {/* Texte central */}
        <div className="accueil-inline-center accueil-feature-card">
          <img src="cpe-lyon.jpg" alt="CPE Lyon" style={{width: 400}}/>
          <div className="accueil-central-info-box">
            <h3>A l'école CPE LYON</h3>
            <h3>A la recherche d'un stage du X</h3>
            <h3>au Y et d'une alternance...</h3>
          </div>
          <img src="logo-chartreux.png" alt="Chartreux" style={{width: 400}}/>
        </div>
      </section>
        
        {/* Carte 1 : Image à droite (standard) */}
        <FeatureCard 
          title="Nous sommes compétents !!" 
          content={["coucou"]} 
        />

        {/* Carte 2 : Image à gauche (reverse) */}
        <FeatureCard 
          title="Nous sommes motivés !!" 
          content={["coucou"]} 
          reverse={true}
        />

        {/* Carte 3 : Image à droite (standard) */}
        <FeatureCard 
          title="Nous sommes travailleurs !!" 
          content={["coucou"]} 
        />

      <section className="accueil-cta-section">
        <p className="accueil-cta-intro">Alors n'attendez pas :</p>
        <h2 className="accueil-cta-title">EMBAUCHEZ-NOUS SIVOUPLÉ</h2>
      </section>
      </div>
      
    </>
  );
}

export default Accueil;