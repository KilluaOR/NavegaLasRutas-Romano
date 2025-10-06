import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getSubtotal = () => {
    const normalizePrice = (price) => {
      if (typeof price === "number") return price;
      if (typeof price === "string") {
        const numeric = Number(price.replace(/[^0-9.]/g, ""));
        return isNaN(numeric) ? 0 : numeric;
      }
      return 0;
    };
    return cart.reduce((total, item) => {
      const price = normalizePrice(item.price);
      return total + price * (item.quantity || 0);
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
