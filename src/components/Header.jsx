import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="brand">
            <Link to="/">Orange County Plant Emporium</Link>
        </h1>
        <nav>
          <Link to="/products">Shop</Link>
          <Link to="/cart">Cart 🛒</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
