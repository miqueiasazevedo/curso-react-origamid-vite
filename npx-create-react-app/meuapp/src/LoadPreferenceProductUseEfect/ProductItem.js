import React from "react";

const ProductItem = ({ product }) => {
  return (
    <>
      <h3>{product.nome}</h3>
      <p>Preço: {product.preco}</p>
    </>
  );
};
export default ProductItem;
