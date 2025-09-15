import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(count + 1);
  const handleSub = () => setCount(count - 1);
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
      <button className="btn btn-primary">Agregar al Carrito</button>
      <Link to="/" className="btn btn-secondary">
        Volver al catálogo
      </Link>
    </div>
  );
}
export default Counter;
