import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar text={"Tabaquería Rodriguez"} bg="rgba(157, 36, 151, 0.83)" />
      <ItemListContainer x="Bienvenido a Tabaquería Rodriguez" />
    </>
  );
}

export default App;
