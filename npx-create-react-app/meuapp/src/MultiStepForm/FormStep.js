import React from "react";
import Input from "./Input";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function FormStep() {
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((result, { id }) => {
      return { ...result, [id]: "" };
    }, {})
  );

  const [step, setStep] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  const [answeredQuestion, setAnsweredQuestion] = React.useState(false);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });

    setAnsweredQuestion(true);
  }

  function handleNext() {
    let notLastQuestion = step < perguntas.length - 1;

    if (notLastQuestion && answeredQuestion) {
      setStep(step + 1);
      setAnsweredQuestion(false);
    } else if (step === perguntas.length - 1) {
      setStep(step + 1);
      finalResult();
    }
  }

  function handlePrevious() {
    if (step > 0) {
      setStep(step - 1);

      /* TODO Verificar como validar se a resposta está marcada ao navegar para a pergunta anterior;
      Se sim, permitir a navegação para a próxima pergunta normalmente; */
      setAnsweredQuestion(Object.values(respostas)[step] !== "");
      console.log(`Passo ${step} ${answeredQuestion}`);
    }
  }

  function finalResult() {
    const correctAnswers = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(
      `Vocẽ acertou ${correctAnswers.length} de ${perguntas.length}`
    );
  }

  return (
    <>
      <hr></hr>
      <details open>
        <summary>
          <h3 style={{ display: "inline" }}>
            Exercícios - Form - Formulário multi steps com verificação de
            acertos;
          </h3>
        </summary>
        <p> </p>
        <section>
          <form onSubmit={(e) => e.preventDefault()}>
            {perguntas.map((pergunta, index) => (
              <Input
                key={pergunta.id}
                value={respostas[pergunta.id]}
                onChange={handleChange}
                active={step === index}
                {...pergunta}
              />
            ))}
            {step > 0 && (
              <button onClick={handlePrevious} style={{ marginRight: "1rem" }}>
                Anterior
              </button>
            )}
            {step < perguntas.length ? (
              <button onClick={handleNext}>Próxima</button>
            ) : (
              <p style={{ display: "block" }}>{resultado}</p>
            )}
          </form>
        </section>
      </details>
    </>
  );
}

export default FormStep;
