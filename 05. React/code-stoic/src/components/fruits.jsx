export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];
  return (
    <>
      {fruits.map((fruit) => (
        <h3 key={fruit}>{fruit}</h3>
      ))}
    </>
  );
}