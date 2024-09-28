import "./App.css";
import AddNote from "./components/addNote";
import Card from "./components/card";
import Header from "./components/Header";

function App() {
 let MyNumbers  = [1, 2, 3, 4, 5]
  return (
    <div className="bg-[#FAFAFA] h-screen">
      <Header />
      <div className="grid grid-cols-4 gap-4">
        {MyNumbers.map(()=>{
          <Card/>
        })}
        <AddNote/>
      </div>
    </div>
  );
}

export default App;
