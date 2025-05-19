import React from "react";

function Header() {
  const pathname = window.location.pathname
    .replace("/", "")
    .replace(".html", "");
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: ".5rem",
            background: "#0f0f0f",
          }}>
          <li style={{ margin: "0 1rem" }}>
            <a style={{ color: "#fff", textDecoration: "none" }} href='/'>
              Home
            </a>
          </li>
          <li>
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href='produtos.html'>
              Produtos
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <h3 style={{ textTransform: "capitalize", color: "green" }}>
          {pathname ? pathname : "Home"}
        </h3>
      </div>
    </div>
  );
}

export default Header;
