import React from "react";

function Input({ pergunta, options, id, onChange, value, active }) {
  if (active === false) return null;
  return (
    <div>
      <fieldset>
        <p>{pergunta}</p>
        {options.map((option, index) => (
          <label key={index}>
            <input
              id={id}
              type='radio'
              name={id}
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </div>
  );
}

export default Input;
