import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

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
    const parsePrice = (priceString) =>
      parseInt(priceString.replace(/[^0-9]/g, ""));
    return cart.reduce(
      (total, item) => total + parsePrice(item.precio) * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
