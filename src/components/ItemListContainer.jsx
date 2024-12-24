// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 

const ItemListContainer = ({ text }) => {
  const { categoria } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 

    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${categoria || 'cheese'}&search_simple=1&action=process&json=true`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false); // Finaliza la carga
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [categoria]); 

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div>
      {}
      <div className="welcome-section">
        <img src="https://anycheese.com/articles/wp-content/uploads/2024/07/french-cheese-caviar-pairings-1-683x1024.webp" alt="Picada" /> {/* Imagen de picada */}
      </div>

      {}
      <h2>{text}</h2>

      {}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.code} className="product-item">
              <img src={product.image_url} alt={product.product_name} />
              <h3>{product.product_name}</h3>
              <p>{product.brands || 'Unknown brand'}</p>
              <Link to={`/detalle/${product.code}`}>Ver detalle</Link>
            </div>
          ))
        ) : (
          <div>No se encontraron productos en esta categoria.</div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
