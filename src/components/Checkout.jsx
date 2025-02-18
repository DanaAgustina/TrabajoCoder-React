/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { newOrder } from '../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
function Checkout() {
    const {cart, getTotalPrice} = useContext(CartContext);
    console.log('Renderizando Checkout');
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target 
        const [name, email, phone] = form   
        const order= {
            comprador: {nombre: name.value, email: email.value,telefono: phone.value},
            items: cart,
            fecha: serverTimestamp(),
            total: getTotalPrice(),
        }
        newOrder(order)
    }
  return (
    <div>
        {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
        ) : (
        <Form className='main-content' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
                <Form.Text className="text-muted">
                    Nunca compartiremos tu correo con nadie más.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Confirmar Compra
            </Button>
        </Form>
         )}
    </div> 
  );
}
export default Checkout;