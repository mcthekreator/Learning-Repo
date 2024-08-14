import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Rob",
    message: "Hi there",
    seatNumbers: [1, 4, 7],
  };
  return (
    <>
      <Hello name="Derrick" message="Hi ther" person={person} />
    </>
  );
}

export default App;
