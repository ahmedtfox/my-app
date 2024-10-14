import React from "react";
import Button from "./Button";
class Greeting extends React.Component {
  state = {
    name: "ahmed",
    age: 28,
  };
  render() {
    return (
      <>
        <h1> Hellooooo {this.state.name}</h1>
        <h3> {this.state.age}</h3>
        <button
          onClick={() => {
            console.log(this.state.name);
            this.setState({
              name: "kkkk",
            });
          }}
        >
          change
        </button>
        <Button />
      </>
    );
  }

  componentDidMount() {
    this.setState({
      age: 29,
    });
  }
}

export default Greeting;
