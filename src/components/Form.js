import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const func1 = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={(event) => {
          func1(event);
        }}
      />
      <label>Password</label>
      <input type="password" />
      <button type="submit">submit</button>
    </form>
  );
}
export default Form;
