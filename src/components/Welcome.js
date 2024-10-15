import { useState } from "react";
function Welcome(props) {
  let [counter, setCounter] = useState(0);
  return (
    <div className="Welcome">
      <h2>welcome {props.name}</h2>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter++);
        }}
      >
        add
      </button>
    </div>
  );
}

export default Welcome;
