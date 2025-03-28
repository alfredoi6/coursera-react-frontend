import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <nav>
        <Link to="/products" style={{ marginRight: '20px' }}>Products</Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  );
};

export default Header;
