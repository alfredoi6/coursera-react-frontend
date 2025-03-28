import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProductListPage from './components/ProductList';
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
            <ProductListPage />
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
