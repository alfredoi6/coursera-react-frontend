import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProductListPage from './components/ProductList';
import Header from './components/header';
import ShoppingCartPage from './components/Cart';
import CheckoutPage from './components/Checkout'; 


function App() {
  

  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={
          <>
            <Header />
            <ProductListPage />
          </>
          
          } />
        <Route path="/cart" element={
          <>  
            <Header />
            <ShoppingCartPage />
          </>
          } />
        <Route path="/checkout" element={
          <>
            <Header />
            <CheckoutPage />
          </>
        } />
      </Routes>


    
  )
}

export default App
