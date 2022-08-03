import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {

  const { counter, increment, decrement, reset } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Counter  <Small counter={counter} /> </h1>
      <hr />
      <button className="btn btn-primary" onClick={ () => increment() } >+1</button>
      <button className="btn btn-danger" onClick={ () => setShow(!show) } >Show/Hide {JSON.stringify(show)} </button>
    </>
  )
}

export default Memorize;