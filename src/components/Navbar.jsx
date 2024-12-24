// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import CardWidget from './CardWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      {}
      <div className="brandname">
        <Link to="/" style={{ textDecoration: 'none', color: '#00bcd4' }}>
          Fiambrería La Delicia
        </Link>
      </div>
      <ul className="categories">
        <li><Link to="/categoria/quesos">Quesos</Link></li>
        <li><Link to="/categoria/embutidos">Embutidos</Link></li>
        <li><Link to="/categoria/snacks">Snacks</Link></li>
        <li><Link to="/categoria/pan">Pan</Link></li>
        <li><Link to="/categoria/bebidas">Bebidas</Link></li>
      </ul>
      <CardWidget />
    </nav>
  );
}

export default Navbar;
