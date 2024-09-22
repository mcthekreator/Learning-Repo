import "./App.css";
import AddNote from "./components/addNote";
import Card from "./components/card";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#FAFAFA] h-screen">
      <Header />
      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <AddNote/>
      </div>
    </div>
  );
}

export default App;
