// App.js
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Checkout from './components/Checkout';
import './App.css';

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
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

 //  <Route path="/checkout" element={<Checkout />} />