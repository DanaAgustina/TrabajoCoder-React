# La Delicia - Fiambreria

**La Delicia** es una aplicación de comercio electrónico desarrollada con **React.js**, diseñada para ofrecer una experiencia fluida y moderna a los usuarios. En esta aplicación, los usuarios pueden explorar productos de fiambreria, filtrarlos por categoría, agregarlos a un carrito y finalizar su compra a través de un proceso de checkout intuitivo.

----------

## Funcionalidades

-   **Visualización de productos:** Los usuarios pueden ver un listado completo de productos disponibles en el Ecommerce.
-   **Filtrado por categoría:** Es posible navegar entre diferentes categorías de productos como quesos, snacks, bebidas, pan  y embutidos .
-   **Agregar al carrito:** Cada producto cuenta con la opción de ser agregado al carrito para su posterior compra.
-   **Vista del carrito:** Los usuarios pueden revisar los productos seleccionados, modificar cantidades o eliminarlos del carrito.
-   **Checkout:** Un proceso final para que los usuarios ingresen su información y finalicen la compra.

----------

## Tecnologías y dependencias utilizadas

El proyecto se desarrolló utilizando las siguientes tecnologías y librerías:

1.  **React.js**: Framework de JavaScript para la creación de interfaces de usuario interactivas.  
    Sitio oficial: [React.js](https://reactjs.org/)
    
2.  **Firebase**: Plataforma para el backend, que incluye autenticación, base de datos y almacenamiento en la nube.  
    Sitio oficial: [Firebase](https://firebase.google.com/)
    
3.  **React Router**: Librería para la navegación y manejo de rutas en aplicaciones React.  
    Sitio oficial: [React Router](https://reactrouter.com/)
    
4.  **React Bootstrap**: Framework de diseño que combina la funcionalidad de Bootstrap con componentes React.  
    Sitio oficial: [React Bootstrap](https://react-bootstrap.github.io/)
    
5.  **Otras dependencias:**
    
    -   Dependencias adicionales pueden ser revisadas en el archivo `package.json` del proyecto.

----------

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

-   **`src/components`**: Contiene todos los componentes React, como `Navbar`, `Cart`, `ItemListContainer`, `Checkout`, entre otros.
-   **`src/context`**: Maneja la lógica del carrito utilizando el contexto de React (`CartContext`, `CartProvider`).
-   **`src/firebase`**: Archivo para la configuración e integración con Firebase.
-   **`src/App.js`**: Archivo principal que contiene la configuración de rutas.

----------

## Características técnicas

-   **Diseño responsive**: Adaptado a diferentes dispositivos, asegurando una experiencia de usuario óptima.
-   **Estado global**: Utiliza el contexto de React para gestionar el estado del carrito de manera eficiente.
-   **Base de datos en tiempo real**: Firebase se utiliza para almacenar la información de los pedidos y productos.
-   **Enrutamiento dinámico**: React Router permite una navegación fluida entre las diferentes secciones del sitio.

----------

    
