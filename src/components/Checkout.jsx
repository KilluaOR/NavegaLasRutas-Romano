import { useCart } from "../context/CartContext";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function CheckoutForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
  };
  return (
    <Form className="w-50" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" requiered />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Natalia Romero" requiered />
      </Form.Group>
      <Form.Group className="mb-3" controlId="checkbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Finalizar compra
      </Button>
    </Form>
  );
}

function Checkout() {
  const { cart, clearCart, getSubtotal } = useCart();
  const [thankYou, setThankYou] = useState(false);
  const subtotal = getSubtotal();
  const total = subtotal;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setThankYou(true);
    clearCart();
  };

  return (
    <div className="checkout p-4">
      <div className="checkout__items">
        {cart.length === 0 ? (
          <p className="text-white text-center py-4">Tu carrito está vacío</p>
        ) : (
          cart.map((product) => (
            <div
              key={product?.id}
              className="flex items-center justify-between p-4 border-b border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-16 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-white font-medium">{product?.name}</h3>
                  <p className="text-gray-400 text-sm">
                    Cantidad: {product?.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white">Precio del item: ${product?.price}</p>
                <p className="text-gray-400 text-sm">
                  Total: $
                  {parseInt(product?.price.replace(/[^0-9]/g, "")) *
                    product.quantity}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="checkout__totals mt-4">
        <p className="text-white">Subtotal: ${subtotal.toLocaleString()}</p>
        <p className="text-white font-bold">Total: ${total.toLocaleString()}</p>
      </div>

      {!thankYou && cart.length > 0 && (
        <div className="checkout__actions mt-4 flex gap-4">
          <button
            className="checkout__button bg-green-600 px-4 py-2 rounded text-white"
            onClick={handleCheckout}
          >
            Finalizar compra
          </button>
          <button
            className="delete__button bg-red-600 px-4 py-2 rounded text-white"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </div>
      )}

      {thankYou && (
        <p className="text-green-400 mt-4 font-semibold text-center">
          ¡Gracias por tu compra!
        </p>
      )}
    </div>
  );
}

export default Checkout;
