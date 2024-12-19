import "./App.css";
import axios from "axios";
import { useState } from 'react';

function App() {
  const state = { advice: "" };
  const [adviceList, setAdviceList] = useState([]);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdviceList([...adviceList, response.data.slip.advice]);
        console.log(adviceList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchAdvice();

  return (
    <div className="App">
      {adviceList.map((advice) =>(
        <h1>{advice}</h1>
      ))}
    </div>
  );
}

export default App;
