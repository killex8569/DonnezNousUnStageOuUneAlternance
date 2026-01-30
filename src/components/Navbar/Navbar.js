import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

// Define MobileMenu component
const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
          <a href='#accueil'>Accueil</a>
          <a href='#noscompetences'>Nos compétences</a>
          <a href='#notreparcours'>Notre Parcours</a>
          <a href='#apropos'>A propos</a>
    </div>
  );
};

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className='topnav'>

        {/* Desktop Menu, which only appears on large screens */}
        <div className='menu'>
          <Link to="/">Accueil</Link>
          <Link to="/competences">Nos compétences</Link>
          <Link to="/parcours">Notre parcours</Link>
          <Link to="/apropos">A propos</Link>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
}

export default Navbar;