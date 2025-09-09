import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
