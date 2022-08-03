import React from "react";

const ShowIncrement = React.memo(({increment}) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Increment
    </button>
  )
})

export default ShowIncrement