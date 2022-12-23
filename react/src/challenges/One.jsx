import React from "react";
import { useState } from "react";

// Gör så att "times" börjar på 0 och ökar med 1 varje gång du trycker på den.

const One = () => {
  const [times, setTimes] = useState(0);
  // Ta inte bort data-testid
  return (
    <div>
      <p data-testid="one-text">Has been clicked {times} times.</p>
      <button onClick={() => setTimes(times + 1)} data-testid="one-button">
        Click me
      </button>
    </div>
  );
};

export default One;
