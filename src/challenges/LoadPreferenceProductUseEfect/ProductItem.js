import React from "react";

const ProductItem = ({ product }) => {
  const [dadosProduct, setdadosProduct] = React.useState(null);

  React.useEffect(() => {
    if (product) fetchProduct(product);
  }, [product]);

  async function fetchProduct(productName) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productName}`
    );

    const json = await response.json();

    setdadosProduct(json);
  }

  if (dadosProduct === null) return null;
  return (
    <>
      <h3>{dadosProduct.nome}</h3>
      <p>Preço: R${dadosProduct.preco}</p>
    </>
  );
};
export default ProductItem;
