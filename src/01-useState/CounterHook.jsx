import { useCounter } from "../hooks/useCounter";

const CounterHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>CounterHook {counter}</h1>
      <hr />
      <button className="btn btn-success" onClick={() => increment(5) } >+5</button>
      <button className="btn btn-warning" onClick={reset}>Reset</button>
      <button className="btn btn-danger" onClick={() => decrement(3)}>-3</button>
    </>
  )
}

export default CounterHook;