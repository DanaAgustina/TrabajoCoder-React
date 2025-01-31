/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//Item
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

function Item({ item }) {
  return (
    <Card className="product-card" style={{ minHeight: '400px', border: '2px solid #ddd', borderRadius: '12px', backgroundColor: '#f8f9fa' }}>
      <Card.Img variant="top" src={item.image} alt={item.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
      <Card.Body style={{ padding: '20px' }}>
        <Card.Title style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#343a40' }}>{item.name}</Card.Title>
        <Card.Text style={{ fontSize: '1rem', color: '#6c757d', marginBottom: '10px' }}>
          <strong>Categoría:</strong> {item.category}
        </Card.Text>
        <Card.Text style={{ fontSize: '1.1rem', fontWeight: '600', color: '#495057' }}>
          {item.name}
        </Card.Text>
        <Card.Text style={{ fontSize: '0.95rem', color: '#6c757d', lineHeight: '1.5' }}>
          {item.description}
        </Card.Text>
        <Card.Text style={{ fontWeight: '600', fontSize: '1.1rem', color: '#28a745' }}>
          <strong>Precio:</strong> ${item.price}
        </Card.Text>
        <Button variant="success" as={Link} to={`/item/${item.id}`} style={{ width: '100%' }}>
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;

