// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos React Router
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'; // Lista de productos por categoría
import ItemDetailContainer from './components/ItemDetailContainer'; // Detalle del producto
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Navbar fuera de las rutas para que siempre esté visible */}
      <Routes>
        <Route path="/" element={<ItemListContainer text="Bienvenidos a nuestra Fiambrería" />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} /> {/* Ruta para categorías dinámicas */}
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} /> {/* Ruta para detalle del producto */}
      </Routes>
    </Router>
  );
}

export default App;
