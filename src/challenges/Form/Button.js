import React from "react";

function Button() {
  function handleClick(event) {
    event.preventDefault();
    alert(event.target.innerText);
  }

  return (
    <>
      <button onClick={handleClick}>Enviar</button>
    </>
  );
}

export default Button;
