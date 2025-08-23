function CartWidget() {
  return <p>🛒3</p>;
}

function NavBar({ text, bg }) {
  return (
    <nav style={{ backgroundColor: bg, padding: "20px", color: "white" }}>
      <h1>{text}</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>Tabaco para armar</li>
        <li style={{ margin: "10px 0" }}>Tabaco para pipa</li>
        <li style={{ margin: "10px 0" }}>Accesorios</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
