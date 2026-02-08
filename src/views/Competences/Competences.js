import React, { useState } from 'react';
import CompetencesTable from '../../components/CompetencesTable/ComptencesTable';
import './Competences.css';

const AlexandreProfile = () => {
  return (
    <h1 className="competences-title">Alexandre</h1>
  )
}

const ValentinProfile = () => {
  let skillFamilyList = [
    "Web",
    "Programmation",
    "Base de données",
    "Système/Réseau",
    "Cybersécurité",
    "DevOps",
    "DPL/Webmarketing",
    "Soft Skills",
    "Langues",
  ];
  
  let skillsDictionnary = [
    // Web
    {
      "Svelte": 'logos/svelte.svg',
      "FastAPI": 'logos/fastapi.png',
      "Deno": 'logos/deno.png',
      "Vue.js": 'logos/vue.png',
      "Node.js": 'logos/nodejs.png',
      "Express": 'logos/nodejs.png',
      "Angular": 'logos/angular.png',
      "Django": 'logos/django.png',
      "Bootstrap": 'logos/bootstrap.png',
      "Figma": 'logos/figma.png',
      "SASS": 'logos/sass.png',
    },
    // Programmation
    {
      "Python": 'logos/python.png',
      "Ruby": 'logos/ruby.png',
      "Java": 'logos/java.png',
      "C#": 'logos/c_sharp.png',
      "C": 'logos/C.png',
      "PHP": 'logos/php.png',
      "TypeScript": 'logos/typescript.png',
      "Go": 'logos/go.png',
    },
    // Base de Données
    {
      "MariaDB": 'logos/mariadb.png',
      "PostgreSQL": 'logos/postgresql.png',
      "OracleDB": 'logos/oracledb.png',
      "MongoDB": 'logos/mongodb.png',
      "Firestore": 'logos/firestore.png',
    },
    // Système/Réseau
    {
      "Windows": 'logos/windows.png',
      "Linux": 'logos/linux.png',
      "Serveur Linux": 'logos/debian.png',
      "DNS": '',
      "Routage": '',
    },
    // Cybersécurité
    {
      "Pare-feux": '',
      "Horodatage": '',
      "Chiffrement": '',
      "SafeLine (WAF)": 'logos/logo-safeline.png',
      "Sécurité Réseaux": ''
    },
    // DevOps
    {
      "Docker": 'logos/docker.png',
      "Github": 'logos/github.png',
      "Gitlab": 'logos/gitlab.png'
    },
    // DPL/Webmarketing
    {
      "WordPress": 'logos/wordpress.png',
      "Référencement": '',
      "E-mailing": '',
    },
    // Soft Skills
    {
      "Autoapprenissage": '',
      "Travail en équipe": '',
      "Conduite de projet": '',
    },
    // Langues
    {
      "Anglais": '',
      "Allemand": '',
    },
  ];

  return (
    <>
        <h1 className="competences-title">Valentin</h1>
        <CompetencesTable skillFamilyList={skillFamilyList} skillsDictionnary={skillsDictionnary}/>
    </>
  )
}

const Competences = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="competences-container">  
      {/* Switch */}
      <div className="competences-switch-container">
        <label className={!isActive ? 'competences-label competences-active-label' : 'competences-label'}>Valentin</label>
        <div className={`competences-switch ${isActive ? 'active' : ''}`} onClick={toggleSwitch}>
          <div className="competences-switch-toggle"></div>
        </div>
        <label className={isActive ? 'competences-label competences-active-label' : 'competences-label'}>Alexandre</label>
      </div>

      {/* Titres */}
      <div className="competences-title-container">
        {!isActive ? <ValentinProfile/> : null}
        {isActive ? <AlexandreProfile/> : null}
      </div>
    </div>
  );
};

export default Competences;
