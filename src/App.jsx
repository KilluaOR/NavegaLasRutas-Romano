import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar text={"Tabaquería Rodriguez"} bg="rgb(65, 86, 248)" />
      <ItemListContainer x="Bienvenido a Tabaquería Rodriguez" />
    </>
  );
}

export default App;
