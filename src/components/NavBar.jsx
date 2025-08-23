import CartWidget from "./CartWidget";
function NavBar({ text, bg }) {
  return (
    <>
      <p style={{ backgroundColor: bg }}>{text}</p>;
      <ul>
        <li text={"Tabaco para armar"} />
        <li text={"Accesorios"} />
        <li text={"Tabaco para pipa"} />
      </ul>
      <CartWidget></CartWidget>
    </>
  );
}

export default NavBar;
