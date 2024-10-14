import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <h1>welcome </h1>
      <Greeting name="Sara" />
      <Welcome name="ahmed" />
    </div>
  );
}

export default App;
