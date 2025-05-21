import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form() {
  return (
    <>
      <hr></hr>
      <details>
        <summary>
          <h3 style={{ display: "inline" }}>
            Eventos e Composição de componentes{" "}
          </h3>
        </summary>
        <form>
          <p>
            <label htmlFor='nome'>Nome</label>
            <Input />
          </p>
          <p>
            <label htmlFor='sobrenome'>Sobrenome</label>
            <Input />
          </p>
          <Button />
        </form>
      </details>
    </>
  );
}

export default Form;
