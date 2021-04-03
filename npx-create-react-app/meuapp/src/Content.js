import React from "react";
import Header from "./Header";
import Produtos from "./Produtos";

function Content() {
  const pathname = window.location.pathname
    .replace("/", "")
    .replace(".html", "");

  return <div>{pathname ? <Produtos /> : "Essa é a home do site"}</div>;
}

export default Content;
