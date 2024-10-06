import "./App.css";
import axios from "axios";

function App() {
  const state = { advice: "" };

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchAdvice();

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
