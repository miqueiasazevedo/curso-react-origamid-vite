import React from "react";
import Button from "./Button";
import ProductItem from "./ProductItem";

const LoadPreferenceProduct = () => {
  const [Product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  let productName;

  React.useEffect(() => {
    productName = localStorage.getItem("Prefer product");

    if (productName) {
      fetchProduct(productName);
    }
  }, []);

  const handleClick = (event) => {
    productName = event.target.innerText;

    fetchProduct(productName);
    setPreferenceOnLocalStorage(productName);
  };

  const setPreferenceOnLocalStorage = (productName) => {
    localStorage.setItem("Prefer product", productName);
  };

  async function fetchProduct(productName) {
    setLoading(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productName}`
    );

    const json = await response.json();

    setProduct(json);

    setLoading(false);
  }

  return (
    <>
      <hr></hr>
      <details open>
        <summary>
          <h3 style={{ display: "inline" }}>
            Exercícios - useEfect - Carregando produto de preferência
          </h3>
        </summary>
        <p>
          {" "}
          Quando o usuário clicar em um dos botões, faça um fetch do produto
          clicado utilizando a api abaixo <br />
          - https://ranekapi.origamid.dev/json/api/produto/notebook <br />
          - https://ranekapi.origamid.dev/json/api/produto/smartphone <br />
          Mostre o nome e preço na tela (separe essa informação em um componente
          Produto.js) <br />
          Defina o produto clicado como uma preferência do usuário no
          localStorage <br />
          Quando o usuário entrar no site, se existe um produto no localStorage,
          faça o fetch do mesmo <br />
        </p>
        <section>
          <Button text='tablet' handleClick={handleClick} />
          <Button text='notebook' handleClick={handleClick} />
          <Button text='smartphone' handleClick={handleClick} />
          {loading && <p>Carregando...</p>}
          {!loading && Product && <ProductItem product={Product} />}
        </section>
      </details>
    </>
  );
};

export default LoadPreferenceProduct;
