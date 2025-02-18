/* eslint-disable no-unused-vars */
// ItemDetailCointainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItem } from '../firebase/db';
function ItemDetailContainer () {
  const { itemId } = useParams(); 
  const [item, setItem] = useState();

  useEffect(() => {
      getItem(itemId)
      .then(res=> setItem(res))
  }, [itemId]);


  return item ? <ItemDetail item={item} /> : <p>Cargando detalles...</p>;
}
export default ItemDetailContainer;


