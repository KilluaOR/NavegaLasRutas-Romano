import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartContainer() {
  const { cart, removeItem, clearCart, getSubtotal } = useCart();
  const subtotal = getSubtotal();

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <h3>Tu carrito está vacío</h3>
          <p>Agrega algunos productos para continuar con tu compra.</p>
          <Link to="/" className="btn">
            Seguir comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <ul className="cart-items">
          {cart.map((item) => {
            const price = Number(item.price);
            const total = price * item.quantity;
            return (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  )}
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                </div>
                <div className="cart-item-price">
                  <p className="price">Precio: ${price.toLocaleString()}</p>
                  <p className="total">Total: ${total.toLocaleString()}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="cart-summary">
          <p className="cart-subtotal">
            Subtotal: ${subtotal.toLocaleString()}
          </p>
          <div className="cart-actions">
            <button className="cart-btn cart-btn-clear" onClick={clearCart}>
              Vaciar carrito
            </button>
            <Link to="/checkout" className="cart-btn cart-btn-checkout">
              Ir a pagar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
