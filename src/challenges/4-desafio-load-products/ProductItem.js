import React from "react";

const ProductItem = ({ product }) => {
  return (
    <>
      <h3>{product.nome}</h3>
      <p>Preço: {product.preco}</p>
      <div style={{ display: "flex", maxWidth: "100vw" }}>
        {product.fotos.map(({ src, titulo }) => {
          return (
            <img
              style={{ margin: ".5rem", maxWidth: "50%", height: "auto" }}
              key={titulo}
              src={src}
              alt={titulo}
            />
          );
        })}
      </div>
    </>
  );
};
export default ProductItem;
