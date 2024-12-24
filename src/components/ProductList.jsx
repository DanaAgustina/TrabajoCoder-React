import React, { useState, useEffect } from 'react';
import './App.css';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  
  // Cargar productos desde la API según la categoría seleccionada
  useEffect(() => {
    fetch(`https://api.sampleapis.com/futurama/products?category=${category}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
