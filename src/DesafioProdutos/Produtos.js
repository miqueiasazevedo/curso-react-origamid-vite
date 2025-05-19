import React from "react";

function Produtos() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      {produtos.map(({ nome, propriedades }) => (
        <div
          key={nome}
          style={{ border: "1px solid", padding: "1rem", margin: "1rem 0" }}>
          <p>{nome}</p>
          <ul>
            {propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Produtos;
