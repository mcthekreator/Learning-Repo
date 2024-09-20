export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  const countries = [
    { name: "Ghana", population: 22342, region: "Africa" },
    { name: "Nigeria", population: 200000, region: "Africa" },
    { name: "United Kingdom", population: 67000, region: "Europe" },
    { name: "China", population: 1441000, region: "Asia" },
  ];
  return (
    <>
      {fruits.map((fruit) => (
        <h3 key={fruit}>{fruit}</h3>
      ))}

      <h2>
        {countries
          .filter((item) => item.region.toLowerCase() === "africa")
          .map((item) => (
            <li key={item.name}>
              {item.name}: {item.population}
            </li>
          ))}
      </h2>
    </>
  );
}
