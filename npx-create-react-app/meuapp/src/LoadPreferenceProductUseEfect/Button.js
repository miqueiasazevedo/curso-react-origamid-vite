import React from "react";

const Button = ({ text, setProduct }) => {
  const handleClick = (event) => {
    setProduct(event.target.innerText);
  };

  return (
    <button
      onClick={handleClick}
      style={{ textTransform: "capitalize", margin: ".5rem" }}>
      {text}
    </button>
  );
};

export default Button;
