import { useCart } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { createOrder } from "../firebase/db";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function CheckoutForm() {
  const { getSubtotal, cart, clearCart } = useCart();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const order = {
      buyer: { email, name },
      total: getSubtotal(),
      products: cart,
      date: serverTimestamp(),
    };
    const ok = await createOrder(order);
    if (ok) {
      navigate("/");
      clearCart();
    }
  };

  if (!cart.length) {
    return <div>No hay productos en el carrito</div>;
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <Form className="w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Natalia Romero" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Finalizar compra
        </Button>
      </Form>
    </div>
  );
}

export default CheckoutForm;
