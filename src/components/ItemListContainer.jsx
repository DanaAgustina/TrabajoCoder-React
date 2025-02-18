/* eslint-disable no-unused-vars */
// ItemListContainer.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { CartContext } from '../context/CartContext';
import { getProducts, getProductsByCategory } from '../firebase/db';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams(); 
  const { cart } = useContext(CartContext)

  useEffect(() => {
    if (categoryId){
      getProductsByCategory(categoryId)
        .then(res=> setItems(res))
    }else{
      getProducts()
        .then(res => setItems(res))
    }
  }, [categoryId]);
  

  return <ItemList items={items} />;
}

export default ItemListContainer;



