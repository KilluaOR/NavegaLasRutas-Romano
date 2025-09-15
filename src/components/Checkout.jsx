import { useCart } from "./CartContext";
import { useState } from "react";

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
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-gray-400 text-sm">
                    Cantidad: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white">{item.price}</p>
                <p className="text-gray-400 text-sm">
                  Total: $
                  {parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity}
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
