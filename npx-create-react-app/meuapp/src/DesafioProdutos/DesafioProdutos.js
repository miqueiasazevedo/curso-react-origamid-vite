import React from "react";
import Content from "./Content";
import Header from "./Header";

function DesafioProdutos() {
  return (
    <div>
      <hr></hr>
      <details>
        <summary>
          <h3 style={{ display: "inline" }}>Exercícios - Desafio produtos</h3>
        </summary>
        <p>
          {" "}
          Replique a interface como a apresentada na aula <br />
          Utilize a array abaixo para mostrar os produtos
          <br />
          Quebre em componentes o que precisar ser reutilizado <br />
          Dica: const pathname = window.location; (puxa o caminho do URL)
        </p>
        <Header />
        <Content />
      </details>
    </div>
  );
}

export default DesafioProdutos;
