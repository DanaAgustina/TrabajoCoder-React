// ItemDetailCointainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el itemId desde la URL
import ItemCount from './ItemCount'; // Asegúrate de tener el componente ItemCount

const ItemDetailContainer = () => {
  const { itemId } = useParams(); // Obtiene el ID del producto desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Inicia la carga del producto

    // Promise para obtener el detalle del producto
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
        setLoading(false); // Finaliza la carga
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [itemId]); // Re-renderiza cuando cambie el itemId

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

          {/* Componente ItemCount para manejar la cantidad */}
          <ItemCount product={product} />
        </>
      ) : (
        <div>Producto no encontrado.</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
