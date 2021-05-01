import React from "react";
import Button from "./Button";
import ProductItem from "./ProductItem";

const LoadPreferenceProduct = () => {
  const [Product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const localProduct = localStorage.getItem("prefer_product");
    if (localProduct) setProduct(localProduct);
  }, []);

  React.useEffect(() => {
    if (Product) setPreferenceOnLocalStorage(Product);
  }, [Product]);

  const setPreferenceOnLocalStorage = (productName) => {
    localStorage.setItem("prefer_product", productName);
  };

  return (
    <>
      <hr></hr>
      <details>
        <summary>
          <h3 style={{ display: "inline" }}>
            Exercícios - useEfect - Carregando produto de preferência
          </h3>
        </summary>
        <p style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>
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
          <h1>Preferência: {Product}</h1>
          <Button text='tablet' setProduct={setProduct} />
          <Button text='notebook' setProduct={setProduct} />
          <Button text='smartphone' setProduct={setProduct} />
          <ProductItem product={Product} />
        </section>
      </details>
    </>
  );
};

export default LoadPreferenceProduct;
