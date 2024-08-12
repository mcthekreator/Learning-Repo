import Hello from "./components/Hello";

function App() {
  const mymessage = "I am a frontend developer"
  return (
    <>
      <Hello name="Derrick" message={mymessage}/>
    </>
  );
}

export default App;
 