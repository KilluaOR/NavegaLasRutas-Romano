import CartWidget from "./CartWidget";

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
        top: "10px",
        left: "10px",
        right: "10px",
        borderRadius: "10px",
        backgroundColor: bg,
        color: "white",
      }}
    >
      <h1 style={{ padding: "15px", fontSize: "20px", fontStyle: "italic" }}>
        {text}
      </h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          marginTop: "5px",
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
