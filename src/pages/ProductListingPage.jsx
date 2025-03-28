// src/pages/ProductListingPage.jsx

import React from 'react';
import products from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  const categories = ["Large Plants", "Easy Care", "Flowering"];

  return (
    <div className="product-page">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {products.filter(p => p.category === category).map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  disabled={isInCart(product.id)}
                >
                  {isInCart(product.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
