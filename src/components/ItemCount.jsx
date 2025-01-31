 /* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//ItemCount
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';

function ItemCount ({ item }) {
  const {addToCart} = useContext (CartContext)
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleAddToCart = () => {
   addToCart({...item, quantity: count });
   setCount(0);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{border: 'double 2px black', padding: '10px', display: 'inline-block', fontSize: '1.2rem', margin: 0}}>{count}</p><Button 
    style={{backgroundColor: 'white', color: '#003366', border: '1px solid #003366', fontSize: '1.2rem', padding: '8px 15px', marginLeft: '10px'}} onClick={handleDecrement}className="ms-2">-</Button>
    <Button style={{backgroundColor: 'white', color: '#003366', border: '1px solid #003366', fontSize: '1.2rem', padding: '8px 15px', marginLeft: '10px'}} onClick={handleIncrement}
    className="ms-2">+</Button>
    <Button style={{backgroundColor: 'white', color: '#003366', border: '1px solid #003366', fontSize: '1.2rem', padding: '8px 15px',  marginLeft: '10px'}} onClick={handleAddToCart}
    className="ms-2">Añadir al carrito</Button>
  </div>
  );
};

export default ItemCount;

