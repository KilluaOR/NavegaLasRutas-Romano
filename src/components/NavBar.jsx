function CartWidget() {
  return <p style={{ marginRight: "30px" }}>🛒3</p>;
}

function NavBar({ text, bg }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        listStyle: "none",
        padding: 0,
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        borderRadius: "10px",
        backgroundColor: bg,
        color: "white",
      }}
    >
      <h1 style={{ padding: "15px", fontSize: "15px" }}>{text}</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li style={{ margin: "10px 15px" }}>Tabaco para armar</li>
        <li style={{ margin: "10px 15px" }}>Tabaco para pipa</li>
        <li style={{ margin: "10px 15px" }}>Accesorios</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
