import React, { useState } from 'react';
import CompetencesTable from '../../components/CompetencesTable/ComptencesTable';
import './Competences.css';

const AlexandreProfile = () => {
  let skillFamilyList = [
    "Web",
    "Programmation",
    "Base de données",
    "Système/Réseau",
    "Virtualisation",
    "Cybersécurité",
    "DevOps",
    "DPL/Webmarketing",
    "Soft Skills",
    "Langues",
    "Certifications",
    "Linux",
    "Outils"
  ];
  let skillsDictionnary = [
    // Web
    {
      "FastAPI": 'logos/fastapi.png',
      "Vue.js": 'logos/vue.png',
      "Node.js": 'logos/nodejs.png',
      "Bootstrap": 'logos/bootstrap.png',
      "Figma": 'logos/figma.png',
    },
    // Programmation
    {
      "Python": 'logos/python.png',
      "Java": 'logos/java.png',
      "C": 'logos/C.png',
      "PHP": 'logos/php.png',
    },
    // Base de Données
    {
      "MariaDB": 'logos/mariadb.png',
      "PostgreSQL": 'logos/postgresql.png',
      "MySQL": 'logos/mysql.svg'
    },
    // Système/Réseau
    {
      "Windows": 'logos/windows.png',
      "Linux": 'logos/linux.png',
      "Serveur Linux": 'logos/debian.png',
      "DNS": '',
      "DHCP": '',
      "Routage": '',
      "VLAN": '',
      "Cisco": '',
      "Switching": '',
      "VLSM/FLSM": '',
      "Supervision": '',
      "Active Directory": '',
      "Harden AD": '',
      "Hello My Dir": '',
      "WDS / MDT": '',
      "SNMP": '',
    },

    // Virtualisation
    {
      "Proxmox": 'logos/proxmox.svg',
      "Hyper-V": 'logos/hyperv.svg',
      "VMWare": '',
      "vSphere": 'logos/vmware-vsphere.svg',
      "Qemu/KVM": '',
    },
    // Cybersécurité
    {
      "OPNSense": 'logos/opnsense.svg',
      "Stormshield": 'logos/stormshield.jpg',
      "Horodatage": '',
      "Chiffrement": '',
      "Sécurité Réseaux": '',
      "Sécurité applicative": '',
      "Bonnes pratiques cyber": '',
      "Labtainers": '',

    },
    // DevOps
    {
      "Docker": 'logos/docker.png',
      "Github": 'logos/github.png',
      "Gitlab": 'logos/gitlab.png',
      "Apache": 'logos/apache.svg',
    },
    // DPL/Webmarketing
    {
      "WordPress": 'logos/wordpress.png',
      "Référencement/SEO": '',
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
    },
    // Certifications
    {
      "CSNA": '',
      "FCF Fortinet": '',
      "PIX": '',
      "Mooc de l'ANSSI": '',
    },

    // Linux
    {
      "Arch": 'logos/arch.svg',
      "Fédora": 'logos/fedora.svg',
      "Ubuntu": 'logos/ubuntu.svg',
      "Debian": 'logos/debian.svg',
      "RHEL": 'logos/redhat.svg',
      "NixOs": 'logos/nixos.svg',
      "Kali": 'logos/kali.svg',
      "Alpine": ''
    },

    // Outils
    {
      "Obsidian": '',
      "Only office": '',
      "Suite office": '',
      "VsCode": '',
      "IntelliJ": '',

    },
  ];

  let CertificationDictionnaryList = [
    "Cybersécurité",
    "Developpement",
    "Réseau"
  ];

  let CertificationDictionnary = [
    // Cybersécurité

    {
      "CSNA": '',
      "Mooc Anssi":'',
    },

    // Developpement
    {

    },

    //Réseau
    {
      "Cisco": '',
    },
  ];
  return (
    <>
    <h1 className="competences-title">Alexandre</h1>
    <h4 className="competences-bold">Résumé</h4>
    <h5>Titulaire d’un BTS SIO option SISR obtenu à l’Institution des Chartreux, je poursuis actuellement mon cursus en cycle ingénieur à CPE Lyon.</h5>
    <h5>J’y consolide une expertise technique en développement logiciel (C, Python, Java et développement web full stack),</h5>
    <h5>en scripting et automatisation, en infrastructures et réseaux, en administration systèmes ainsi qu’en cybersécurité.</h5>
    <CompetencesTable skillFamilyList={skillFamilyList} skillsDictionnary={skillsDictionnary}/>
    <h2 className='Certifications'>Mes Certifications</h2>
    <CompetencesTable skillFamilyList={CertificationDictionnaryList} skillsDictionnary={CertificationDictionnary}/>
    </>
  )
}

const ValentinProfile = () => {
  let skillFamilyList = [
    "Web",
    "Programmation",
    "Base de données",
    "Système/Réseau",
    "Virtualisation",
    "Cybersécurité",
    "DevOps",
    "DPL/Webmarketing",
    "Soft Skills",
    "Langues",
    "Certifications",
    "Linux"
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
      "DHCP": '',
      "Routage": '',
    },

    // Virtualisation
    {
      "VMWare": '',
      "vSphere": '',
      "Qemu/KVM": '',
    },
    // Cybersécurité
    {
      "OPNSense": 'logos/opnsense.svg',
      "WAF": 'logos/logo-safeline.png',
      "Horodatage": '',
      "Chiffrement": '',
      "Sécurité Réseaux": '',
      "Sécurité applicative": '',
      "Bonnes pratiques cyber": '',
      "Labtainers": ''
    },
    // DevOps
    {
      "Docker": 'logos/docker.png',
      "Github": 'logos/github.png',
      "Gitlab": 'logos/gitlab.png',
      "Apache": ''
    },
    // DPL/Webmarketing
    {
      "WordPress": 'logos/wordpress.png',
      "Référencement/SEO": '',
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
    //Certifications
    {
      "PIX": '',
      "Mooc de l'ANSSI": '',
    },


    // Linux
    {
      "Arch": '',
      "Fédora": '',
      "Ubuntu": '',
      "Debian": '',
      "RHEL": '',
      "Kali": '',
      "Alpine": ''
    },
  ];
  let CertificationDictionnaryList = [
    "Cybersécurité",
    "Developpement",
    "Réseau"
  ];

  let CertificationDictionnary = [
    // Cybersécurité

    {
      "Mooc Anssi":'',
    },

    // Developpement
    {

    },

    //Réseau
    {
      "Cisco": '',
    },
  ];

  return (
    <>
        <h1 className="competences-title">Valentin</h1>
        <h4 className="competences-bold">Résumé</h4>
        <h5>Durant ma formation, j'ai pu acquérir des bonnes connaissances en développement, notamment en développement web.</h5>
        <h5>J'ai pu aussi approfondir mes connaissances en infrastructure logicielle, avec des outils comme Docker, Apache, Nginx, CasaOS, Qemu/KVM etc...</h5>
        <h5>Par ailleurs, j'utilise Linux quotidiennement, en tant que système d'exploitation principal.</h5>
        <h4 className="competences-bold">Intitulés de postes idéaux</h4>
        <h5>Développeur web</h5>
        <h5>Développeur logiciel</h5>
        <h5>Concepteur développeur</h5>
        <h5>Ingénieur Cybersécurité</h5>
        <h5>Ingénieur DevOps</h5>
        <h5>Administrateur Systèmes</h5>
        <h4 className="competences-bold">Tableau de compétences</h4>
        <CompetencesTable skillFamilyList={skillFamilyList} skillsDictionnary={skillsDictionnary}/>
        <h2 className='Certifications'>Mes Certifications</h2>
        <CompetencesTable skillFamilyList={CertificationDictionnaryList} skillsDictionnary={CertificationDictionnary}/>
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
