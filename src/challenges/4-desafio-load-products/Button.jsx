import React from "react";

const Button = ({ text, fetchProduct }) => {
  return (
    <button
      onClick={fetchProduct}
      style={{ textTransform: "capitalize", margin: ".5rem" }}>
      {text}
    </button>
  );
};

export default Button;
