// Cart.js
import { useContext } from 'react';  
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import CartList from "./CartList";  
//import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, getTotal } = useContext(CartContext); 
 // const navigate = useNavigate();

  if (cart.length === 0) {
    return <h2>No hay productos en el carrito...</h2>;
  }

  const total = getTotal(); 

  const handleCheckout = () => {
    navigate("/checkout");
  };
return (
    <div>
      <CartList items={cart} />
      <p>Total: ${total.toFixed(2)}</p>
      <Button onClick={handleCheckout} variant="primary">
        Finalizar Compra
      </Button>
    </div>
  );

}

export default Cart;






