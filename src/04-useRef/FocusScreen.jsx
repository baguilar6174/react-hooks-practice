import { useRef } from "react";

const FocusScreen = () => {

  const inputRef = useRef();
  const onFocus = () => inputRef.current.select();

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Your name"
      />
      <button className="btn btn-warning mt-2" onClick={onFocus} >Focus input</button>
    </>
  )
}

export default FocusScreen;