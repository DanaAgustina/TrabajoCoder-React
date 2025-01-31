/* eslint-disable react/prop-types */
//CartList
import { ListGroup } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";  

function CartList({ items, removeFromCart }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item key={item.id} className="cart-item"> {}
          <div className="cart-item-info">
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
            <p>Total Producto: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <button
            className="remove-item-btn"
            onClick={() => removeFromCart(item.id)}  
          >
            <FaTrashAlt />
          </button>
        </ListGroup.Item>
      ))}
      <ListGroup.Item>
        <strong>Total: ${total.toFixed(2)}</strong>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CartList;







