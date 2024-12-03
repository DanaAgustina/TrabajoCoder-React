// Navbar.js
import React from 'react';
import CardWidget from './CardWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brandname">Fiambrería La Delicia</div>
      <ul className="categories">
        <li><a href="#">Quesos</a></li>
        <li><a href="#">Embutidos</a></li>
        <li><a href="#">Fiambres</a></li>
      </ul>
      < CardWidget />
    </nav>
  );
}

export default Navbar;
