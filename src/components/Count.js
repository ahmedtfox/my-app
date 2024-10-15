import { useState, useEffect } from "react";

function Count() {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(2);
  useEffect(() => {
    console.log("count");
  }, [doubleCounter]);

  return (
    <>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        add
      </button>
      <h2>{doubleCounter}</h2>
      <button
        onClick={() => {
          setDoubleCounter(doubleCounter + 1);
        }}
      >
        add
      </button>
    </>
  );
}

export default Count;
