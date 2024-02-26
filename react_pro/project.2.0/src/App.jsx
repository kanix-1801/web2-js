// import React from "react";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
    console.log(counter);
  };

  return (
    <>
      <h1>hello</h1>
      <h2>count value : {counter}</h2>
      <button onClick={addValue}> {counter} + value </button>
      <button onClick={removeValue}> {counter} - value </button>
      <h2>tailwind </h2>
      <h2 className="text-3xl font-bold underline">tailwind effect</h2>
    </>
  );
}

export default App;
