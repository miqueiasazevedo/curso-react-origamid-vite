import React from "react";

const Introducao = () => {
  const nome = "Miquéias Azevedo";
  const ativo = false;

  function mostrarNome() {
    return "Miquéias";
  }

  const carro = {
    marca: "Ford",
    rodas: "4",
  };

  // Exercicio
  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const dados = luana;

  const totalGasto = dados.compras
    .map((compra) => +compra.preco.replace("R$", ""))
    .reduce((acc, totalCompra) => acc + totalCompra);

  // Fim Exercicio

  return (
    <>
      <section>
        <h3>Atributos HTML e condicionais dentro do JSX</h3>
        <a
          className='ativo'
          style={ativo ? { color: "green" } : { color: "red" }}
          href='https://www.google.com.br'
          title='teste'>
          {nome}
        </a>
        <p>{new Date().getFullYear()}</p>
      </section>

      <section>
        <h3>Formatos de saida como HTML</h3>
        <h4>Retorno de função</h4>
        <p>{mostrarNome()}</p>
        {/* Abaixo uma manei invalida de invocar uma função no JSX - 
        A função não está sendo executada - Erro no console */}
        <p>{mostrarNome}</p>

        <h4>Exibição de objetos</h4>
        <p>
          {carro.marca}, {carro.rodas}
        </p>
        {/* Abaixo uma maneira invalida de exibição de um objeto no JSX - 
        Um objeto não é um formato valido para exibição - Somente atibutos deste objeto
        
        <p>
          {carro}
        </p>
        
        */}
      </section>
      <hr></hr>

      <section>
        <h3>Exercicio</h3>

        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Situação:
          <span style={{ color: dados.ativa ? "green" : "red" }}>
            {dados.ativa ? " Ativo" : " Inativo"}
          </span>
        </p>
        <p>Total gasto: R$ {totalGasto}</p>
        {totalGasto > 10000 && <strong>Vocẽ está gastando muito</strong>}
      </section>
    </>
  );
};

export default Introducao;
