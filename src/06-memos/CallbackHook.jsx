import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {

  const increment = useCallback(
    () => {
      setCounter((value) => value+1);
    },
    [],
  )
  
  const [counter, setCounter] = useState(10);

  return (
    <>
      <h1>useCallback Hook  <small>{counter}</small> </h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  )
}

export default CallbackHook