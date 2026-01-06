import { useState } from 'react';
import './Navbar.css';

// Define MobileMenu component
const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
          <a href='#accueil'>Accueil</a>
          <a href='#noscompetences'>Nos Compétences</a>
          <a href='#notreparcours'>Notre parcours</a>
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
          <a href='#accueil' className='active-link'>Accueil</a>
          <a href='#noscompetences'>Nos Compétences</a>
          <a href='#notreparcours'>Notre parcours</a>
          <a href='#apropos'>A propos</a>
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