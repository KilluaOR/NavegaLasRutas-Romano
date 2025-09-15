import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const { addItem } = useCart();

  const handleAdd = () => setCount((c) => c + 1);
  const handleSub = () => setCount((c) => (c > 1 ? c - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;
    addItem({
      ...product,
      quantity: count,
    });
  };

  return (
    <div className="btn-div">
      <p>{count}</p>
      <Button className="btn btn-primary" onClick={handleSub} variant="dark">
        {" "}
        -{" "}
      </Button>
      <Button className="btn btn-primary" onClick={handleAdd} variant="dark">
        {" "}
        +{" "}
      </Button>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
      <Link to="/" className="btn btn-secondary">
        Volver al catálogo
      </Link>
    </div>
  );
}
export default ItemCount;
