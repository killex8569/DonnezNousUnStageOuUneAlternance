import React from 'react';
import './Accueil.css';

// Composant réutilisable pour les cartes (Compétents, Motivés, Travailleurs)
const FeatureCard = ({ title, content, reverse }) => (
  <div className={`feature-card ${reverse ? 'reverse' : ''}`}>
    <div className="text-content">
      <h2>{title}</h2>
      {content.map((line, index) => (
          <p key={index}>{line}</p>
      ))}
    </div>
    <div className="placeholder-square">photo convaincante</div>
  </div>
);

function Accueil() {
  return (
    <div className="App">
      
      <div className="container">
      <section className="profile-section">
        <h1 className="main-title">
          DONNEZ NOUS UN STAGE OU UNE ALTERNANCE SIVOUPLÉ
        </h1>

        <div className="inline-center">
          <div className="profile-item">
            <div className="placeholder-square">Valentin</div>
            <h2>Valentin Ryckaert</h2>
          </div>        
          <div className="profile-item">
            <div className="placeholder-square">Alexandre</div>
            <h2>Alexandre Faubladier--Anette</h2>
          </div>
        </div>
        <br/><br/>

        {/* Texte central */}
        <div className="inline-center feature-card">
          <div className="placeholder-square">Logo CPE Lyon</div>
          <div className="central-info-box">
            <h3>A l'école CPE LYON</h3>
            <h3>A la recherche d'un stage du X</h3>
            <h3>au Y et d'une alternance...</h3>
          </div>
          <div className="placeholder-square">Logo Chartreux</div>
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

      <section className="cta-section">
        <p className="cta-intro">Alors n'attendez pas :</p>
        <h2 className="cta-title">EMBAUCHEZ-NOUS SIVOUPLÉ</h2>
      </section>
      </div>
      
    </div>
  );
}

export default Accueil;