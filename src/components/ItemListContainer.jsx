// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener la categoría desde la URL
import { Link } from 'react-router-dom'; // Para crear enlaces dinámicos

const ItemListContainer = ({ text }) => {
  const { categoria } = useParams(); // Obtiene la categoría de la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Inicia la carga de productos

    // Realizamos la consulta a la API según la categoría
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
  }, [categoria]); // Re-renderiza cuando cambie la categoría

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div>
      {/* Sección de bienvenida con la imagen de picada */}
      <div className="welcome-section">
        <img src="https://anycheese.com/articles/wp-content/uploads/2024/07/french-cheese-caviar-pairings-1-683x1024.webp" alt="Picada" /> {/* Imagen de picada */}
      </div>

      {/* Texto de bienvenida pasado como prop */}
      <h2>{text}</h2>

      {/* Lista de productos */}
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
