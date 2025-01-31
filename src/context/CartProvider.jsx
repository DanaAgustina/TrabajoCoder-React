//CartProvider
import { CartContext } from './CartContext';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === item.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === item.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCart, { ...item, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getQty = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getQty, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

