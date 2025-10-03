import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartContainer() {
  const { cart, removeItem, clearCart, getSubtotal } = useCart();
  const subtotal = getSubtotal();

  if (!cart || cart.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-white">Tu carrito está vacío</p>
        <Link to="/" className="text-blue-400 underline">
          Seguir comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <ul className="space-y-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b border-gray-700 pb-3"
          >
            <div className="flex items-center gap-3">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-16 object-cover rounded"
                />
              )}
              <div>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-gray-400 text-sm">
                  Cantidad: {item.quantity}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">Precio: ${item.price}</p>
              <p className="text-gray-400 text-sm">
                Total: $
                {parseInt(String(item.price).replace(/[^0-9]/g, "")) *
                  item.quantity}
              </p>
              <button
                className="mt-2 bg-red-600 px-3 py-1 rounded text-white"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-white">Subtotal: ${subtotal.toLocaleString()}</p>
        <div className="flex gap-3">
          <button
            className="bg-red-700 px-4 py-2 rounded text-white"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="bg-green-600 px-4 py-2 rounded text-white"
          >
            Ir a pagar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
