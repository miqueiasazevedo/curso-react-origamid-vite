import React from "react";
import Button from "./Button";
import ProductItem from "./ProductItem";

const Products = () => {
  const [Product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function fetchProduct(event) {
    const nomeProduct = event.target.innerText;

    setLoading(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nomeProduct}`
    );

    const json = await response.json();

    setProduct(json);

    setLoading(false);
  }

  return (
    <>
      <hr></hr>
      <details>
        <summary>
          <h3 style={{ display: "inline" }}>
            Exercícios - Visualização de produtos com useState
          </h3>
        </summary>
        <p>
          {" "}
          Os links abaixo puxam dados de um produto em formato JSON <br/>
          - https://ranekapi.origamid.dev/json/api/produto/tablet <br/>
          - https://ranekapi.origamid.dev/json/api/produto/smartphone <br/>
          - https://ranekapi.origamid.dev/json/api/produto/notebook <br/>
          
          Crie uma
          interface com 3 botões, um para cada produto. Ao clicar no botão faça
          um fetch a api e mostre os dados do produto na tela. Mostre apenas um
          produto por vez Mostre a mensagem carregando... enquanto o fetch é
          realizado
        </p>
        <section>
          <Button text='tablet' fetchProduct={fetchProduct} />
          <Button text='notebook' fetchProduct={fetchProduct} />
          <Button text='smartphone' fetchProduct={fetchProduct} />
          {loading && <p>Carregando...</p>}
          {!loading && Product && <ProductItem product={Product} />}
        </section>
      </details>
    </>
  );
};

export default Products;
