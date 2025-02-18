/* eslint-disable no-unused-vars */
//CartWidget
  import React, { useState } from 'react';
  import { CartContext } from '../context/CartContext';
  import { useContext } from 'react';
  import Cart from './Cart'; 

  function CartWidget() {
    const { getQty } = useContext(CartContext);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
      setIsCartVisible(!isCartVisible);
    };

    return (
      <div className="cart-widget-container">
        <div className="cart-widget" onClick={toggleCartVisibility}>
          <span role="img" aria-label="cart">🛒</span>
          <span className="notification-bubble">{getQty()}</span>
        </div>
        {isCartVisible && <div className="cartOverlay" onClick={toggleCartVisibility}></div>}
        {isCartVisible && (<div className="cartPopup">
            <button className="close-cart-btn" onClick={toggleCartVisibility}>Cerrar</button>
            <h2>Carrito de Compras</h2>
            <Cart />
          </div>
        )}
      </div>
    );
  }

  export default CartWidget;

