/* eslint-disable no-unused-vars */
// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';

function App ()  {
  return (
    <CartProvider>
       <BrowserRouter>
        <Navbar />   
        <Routes>
          <Route path="/" element={<ItemListContainer text="Bienvenidos a nuestra Fiambrería" />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;