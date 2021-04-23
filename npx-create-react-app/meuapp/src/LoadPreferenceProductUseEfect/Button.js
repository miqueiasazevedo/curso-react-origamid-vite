import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{ textTransform: "capitalize", margin: ".5rem" }}>
      {text}
    </button>
  );
};

export default Button;
