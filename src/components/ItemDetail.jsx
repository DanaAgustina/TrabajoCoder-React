/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//ItemDetail
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';
 
function ItemDetail({ item }) {
  if (!item) {
    return <p>No se encontró información sobre el producto.</p>;
  }
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#e9ecef' }}>
        <Row className="justify-content-center">
          <Col lg={4}>
            <Card style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src={item.image} alt={item.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
              <Card.Body style={{ padding: '20px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#343a40' }}>{item.name}</Card.Title>
                <Card.Text style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.5' }}>
                  {item.description}
                </Card.Text>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                  <Card.Text style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                    <strong>Categoría:</strong> {item.category}
                  </Card.Text>
                  <Card.Text style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                    <strong>Precio:</strong> ${item.price}
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: '#f8f9fa', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <ItemCount item={item} />
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}    

export default ItemDetail;


