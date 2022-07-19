import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
 
  


  const closeMobileMenu = () => setClick(false);

  


  
  return (
    
    <>
      <nav className='navbar'>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
                <Link to='/'
                 className='nav-links' 
                 onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
             
              <li>
                <Link
                 to='/About'
                 className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                </li>

                <li>
                <Link
                 to='/Jeu'
                 className='nav-links'
                  onClick={closeMobileMenu}
                >
                  The Game
                </Link>
                </li>
          </ul>
          
      </nav>
    </>
  );
}

export default Navbar; 