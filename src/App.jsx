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
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={
          <>
            <Header />
            <ProductListingPage />
          </>
          
          } />
        <Route path="/cart" element={
          <>  
            <Header />
            <ShoppingCartPage />
          </>
          } />
      </Routes>
    </>
    
  )
}

export default App
