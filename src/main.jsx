import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./css/navbar.css";
import "./css/cartwidget.css";
import "./css/cart.css";
import "./css/checkout.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
