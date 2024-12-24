// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image_url} alt={product.product_name} />
      <h3>{product.product_name}</h3>
      <p>{product.brands || 'Unknown brand'}</p>
      <Link to={`/detalle/${product.code}`}>Ver detalle</Link>
    </div>
  );
};

export default ProductItem;
