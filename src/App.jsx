import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar text={"Tabaquería Rodriguez"} bg="rgba(182, 18, 174, 0.63)" />
      <ItemListContainer x="Bienvenido a Tabaquería Rodriguez" />
    </>
  );
}

export default App;
