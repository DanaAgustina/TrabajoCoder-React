// ItemList.js
import React from 'react';
import ProductItem from './ProductItem'; // Asumiendo que tienes el componente ProductItem

const ItemList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.code} product={product} />
        ))
      ) : (
        <div>No se encontraron productos en esta categoría.</div>
      )}
    </div>
  );
};

export default ItemList;
