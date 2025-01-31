/* eslint-disable react/prop-types */
// ItemList.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item'; 

function ItemList({ items }) {
  return (
    <Container>
      <Row className="g-4">
        {items.map((item) => (
          <Col key={item.id} md={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;

