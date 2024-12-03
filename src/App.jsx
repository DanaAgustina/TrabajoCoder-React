// App.js
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer text="Bienvenidos a nuestra Fiambrería" />
    </div>
  );
}

export default App;
