import React from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const global = React.useContext(GlobalContext);

  if (global.Products === null) return null;
  console.log(global);
  return (
    <>
      <hr></hr>
      <details>
        <summary>
          <h3 style={{ display: "inline" }}>
            Exercícios - useContext - Distribuindo os dados dos produtos através
            do estado compartilhado pelo contexto.
          </h3>
        </summary>
        <p>
          {" "}
          Utilize o GlobalContext do exemplo anterior para puxar os dados da API
          abaixo: <br />
          https://ranekapi.origamid.dev/json/api/produto/ <br />
          Assim que o usuário acessar o app coloque os dados da API no contexto
          global, dando acesso aos dados da mesma defina uma função chamada
          limparDados que é responsável por zerar os dados de produto e exponha
          essa função no contexto global
        </p>
        <section>
          <ul>
            {global.Products.map((product) => {
              return (
                <li key={product.id}>
                  <h3>{product.nome}</h3>
                  <p>Preço: {product.preco}</p>
                </li>
              );
            })}
          </ul>
          <button onClick={global.clearProducts}>Limpar produtos</button>
        </section>
      </details>
    </>
  );
};

export default Product;
