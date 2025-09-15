import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <NavBar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />

              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />

              <Route path="/item/:id" element={<ItemDetailContainer />} />

              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
