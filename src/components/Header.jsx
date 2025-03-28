import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="brand-link">
          <h1 className="brand">Orange County Plant Emporium</h1>
        </Link>
        <nav>
          <Link to="/products">Shop</Link>
          <Link to="/cart">Cart 🛒</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
