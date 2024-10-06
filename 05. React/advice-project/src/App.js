import "./App.css";


function App() {
  const state = { advice: ""};

  const fetchAdvice = () =>{
    fetch("https://api.adviceslip.com/advice")
     .then((response) => response.json())
     .then((data) => setState({ advice: data.slip.advice }));

  }

  return <div className="App">
    <h1>App</h1>
  </div>;
}

export default App;
