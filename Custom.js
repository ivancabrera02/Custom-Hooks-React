import React, { useState } from "react";

export default function App () {
  const [ counter, setCounter ] = useState(0);
  
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
}

// Esto es un ejemplo del Hook useState pero tiene un problema, que no es escalable. Para ello usaremos un Custom Hook.

//Creamos el Hook y actualizamos el archivo.

const useCounter = () => {
  const [ counter, setCounter ] = useState(0);
  
  const increase = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
  
  return (
    counter,
    increase,
    decrement,
    reset
  );
}

const { counter, increase, decrement, reset } = useCounter()

<>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
</>
