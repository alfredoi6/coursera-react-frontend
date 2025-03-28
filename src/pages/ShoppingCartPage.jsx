// src/pages/ShoppingCartPage.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>

          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="item-actions">
                    <button onClick={() => dispatch(increment(item.id))}>+</button>
                    <button onClick={() => dispatch(decrement(item.id))}>-</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-buttons">
            <button >Checkout (Coming Soon)</button>
            <button onClick={() => navigate('/products')}>Continue Shopping</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
