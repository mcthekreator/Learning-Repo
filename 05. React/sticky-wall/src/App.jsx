import "./App.css";
import AddNote from "./components/addNote";
import Card from "./components/card";
import Header from "./components/Header";

function App() {
  let MyNumbers = [
    { title: "Work", description: "jdfhgksfdsfgjhgwvlorem" },
    { title: "Lunch", description: "lormarsfvmsd" }
  ];
  
  return (
    <div className="bg-[#FAFAFA] h-screen">
      <Header />
      <div className="grid grid-cols-4 gap-4">
        {MyNumbers.map((num) => {
           <Card title={num.title} description={num.description} />;
        })}
        <AddNote />
      </div>
    </div>
  );
}

export default App;
