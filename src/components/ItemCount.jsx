//ItemCount
import React, { useState } from 'react';

const ItemCount = ({ product }) => {
  const [quantity, setQuantity] = useState(1); 

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1); 
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); 
    }
  };

  const handleAddToCart = () => {
    console.log(`Producto: ${product.product_name}, Cantidad: ${quantity}`);
  };

  return (
    <div className="item-count">
      <div className="quantity-controls">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;
