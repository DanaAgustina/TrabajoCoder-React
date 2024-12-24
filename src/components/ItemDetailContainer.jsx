// ItemDetailCointainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ItemCount from './ItemCount'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 

    
    const fetchProduct = () => {
      return new Promise((resolve, reject) => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${itemId}.json`)
          .then(response => response.json())
          .then(data => resolve(data.product))
          .catch(error => reject('Error fetching product detail:', error));
      });
    };

    fetchProduct()
      .then((data) => {
        setProduct(data || {});
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [itemId]); 

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h2>{product.product_name}</h2>
          <img src={product.image_url} alt={product.product_name} />
          <p>{product.brands}</p>
          <p>{product.ingredients_text || 'Ingredients not available'}</p>
          <p>{product.nutriments ? `Calories: ${product.nutriments['energy-kcal']} kcal` : 'Nutritional information not available'}</p>

          {}
          <ItemCount product={product} />
        </>
      ) : (
        <div>Producto no encontrado.</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
