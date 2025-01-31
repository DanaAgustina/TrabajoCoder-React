// Navbar.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import CartWidget from './CartWidget';

const Navbar = () => {
  const location = useLocation(); 
  return (
    <nav className="navbar">
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
      {location.pathname !== '/checkout' && <CartWidget />}
      <CartWidget />
    </nav>
  );
}

export default Navbar;

