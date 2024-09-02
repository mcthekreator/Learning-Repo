import Fruit from "./Fruit";

export default function FruitsArray() {
  const fruits = [
    { name: "Apple", price: 3, emoji: "🍎", soldout: false },
    { name: "Mango", price: 5, emoji: "🥭", soldout: true },
    { name: "Banana", price: 6, emoji: "🍌", soldout: false },
    { name: "Oange", price: 1, emoji: "🍊", soldout: false },
    { name: "Oange", price: 7, emoji: "🍊", soldout: false },
    { name: "Pineapple", price: 7, emoji: "🍍", soldout: true },
    { name: "Pineapple", price: 0, emoji: "🍍", soldout: true },
    { name: "Pineapple", price: 10, emoji: "🍍", soldout: true },
  ];
  return (
    <>
      <ol>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldout={fruit.soldout}
          ></Fruit>
        ))}
        <div>
          <ol>
            {fruits
              .filter((fruit) => fruit.soldout === false)
              .map((fruit) => (
                <li key={fruit.name}>
                  {fruit.emoji}
                  {fruit.name} {fruit.price}
                </li>
              ))}
          </ol>
        </div>
      </ol>
    </>
  );
}
