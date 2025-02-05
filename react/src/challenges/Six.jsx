import React, { useState } from "react";

// Slutför följande komponent.
// Tanken är att den ska skriva ut för och efternamn som t.ex.
// "Hi, my name is: Oscar Nilsson" i p-taggen.
//
// Det saknas några delar för att den ska göra det.
// Identifiera de sakerna som saknas och fixa komponenten!

function Six() {
  // Ändra inte statet nedan
  const [input, setInput] = useState({});

  function handleInput(inputName, value) {
    // Rör inte funktionen nedan
    setInput((input) => ({ ...input, [inputName]: value }));
  }

  return (
    <div>
      <p data-testid="six-text">
        Hi, my name is: {input.firstName} {input.lastName}
      </p>
      <input
        placeholder="First Name"
        onChange={(e) => {
          handleInput("firstName", e.target.value);
        }}
        type="text"
        name="firstName"
        data-testid="six-firstName"
      />
      <br />
      <input
        placeholder="Last Name"
        onChange={(e) => {
          handleInput("lastName", e.target.value);
        }}
        type="text"
        name="lastName"
        data-testid="six-lastName"
      />
    </div>
  );
}

export default Six;
