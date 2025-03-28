import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import Header from './components/Header';
import ShoppingCartPage from './components/Cart';
import CheckoutPage from './components/Checkout'; 


function App() {
  

  return (

    <>
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={
          <>
            <ProductListingPage />
          </>
          
          } />
        <Route path="/cart" element={
          <>  
            <ShoppingCartPage />
          </>
          } />
        <Route path="/checkout" element={
          <>
            <CheckoutPage />
          </>
        } />
      </Routes>
    </>
    
  )
}

export default App
