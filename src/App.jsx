// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />  {}
      <Routes>
        <Route path="/" element={<ItemListContainer text="Bienvenidos a nuestra Fiambrería" />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} /> {}
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
