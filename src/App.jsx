import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/" element={<CartWidget />} />
          <NavBar text={"Tabaquería Rodriguez"} bg="rgba(157, 36, 151, 0.83)" />
          <ItemListContainer x="Bienvenido a Tabaquería Rodriguez" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
