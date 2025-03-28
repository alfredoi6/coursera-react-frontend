import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="brand-link">
          <h1 className="brand">Orange County Plant Emporium</h1>
        </Link>
        <nav>
          <Link to="/products">Shop</Link>
          <Link to="/cart">Cart 🛒 {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
