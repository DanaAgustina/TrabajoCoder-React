//ItemCount
import React, { useState } from 'react';

const ItemCount = ({ product }) => {
  const [quantity, setQuantity] = useState(1); // Valor inicial de la cantidad

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Incrementar la cantidad
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); // Disminuir la cantidad, con mínimo 1
    }
  };

  const handleAddToCart = () => {
    console.log(`Producto: ${product.product_name}, Cantidad: ${quantity}`);
    // Aquí podrías agregar la lógica para agregar el producto al carrito
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
