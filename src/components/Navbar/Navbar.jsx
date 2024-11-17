import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin, scrollToSection }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setMenu(section);
    scrollToSection(section);  // Scroll to the respective section
    setIsMenuOpen(false); // Close the menu after clicking on an item
  };

  return (
    <div className='navbar'>
      <div className="navbar-content">
        <img src={assets.logo} alt="Logo" className='logo' />
        <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li onClick={() => handleNavClick("home")} className={menu === "home" ? "active" : ""}>Home</li>
          <li onClick={() => handleNavClick("products")} className={menu === "products" ? "active" : ""}>Products</li>
          <li onClick={() => handleNavClick("about")} className={menu === "about" ? "active" : ""}>About Us</li>
          <li onClick={() => handleNavClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="Basket Icon" />
            <div className="dot"></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
