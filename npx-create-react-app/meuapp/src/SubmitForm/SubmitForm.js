import React from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Número",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const SubmitForm = () => {
  const [form, setForm] = React.useState({});
  const [response, setResponse] = React.useState(null);
  const [load, setLoad] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoad(true);

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        }
        setResponse(response);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <>
      <hr></hr>
      <details open>
        <summary>
          <h3 style={{ display: "inline" }}>Exercícios - Submit Form</h3>
        </summary>
        <p>
          {" "}
          Faça um fetch (POST) para a API abaixo <br />
          Para a criação ser aceita é necessário enviar dodos de: <br />
          nome, email, senha, cep, rua, numero, bairro, cidade e estado <br />
          Essa é a função utilizado para realizar o POST <br />
          'https://ranekapi.origamid.dev/json/api/usuario' <br />
          Mostre uma mensagem na tela, caso a resposta da API seja positiva
          <br />
        </p>
        <section>
          <form onSubmit={handleSubmit}>
            {formFields.map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} onChange={handleChange} />
              </div>
            ))}

            {response && response.ok && <p>Usuário criado com sucesso</p>}

            <button>Enviar{load && "..."}</button>
          </form>
        </section>
      </details>
    </>
  );
};

export default SubmitForm;
