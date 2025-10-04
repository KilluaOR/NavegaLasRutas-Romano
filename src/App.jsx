import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CheckoutForm } from "./components/Checkout";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/category/:category" element={<ItemListContainer />} />

            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />

            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
