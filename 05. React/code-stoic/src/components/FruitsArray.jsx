import Fruit from "./Fruit";

export default function FruitsArray() {
  const fruits = [
    { name: "Apple", price: 3, emoji: "🍎", soldout: false },
    { name: "Mango", price: 4, emoji: "🥭" ,  soldout: true },
    { name: "Banana", price: 6, emoji: "🍌",  soldout: false  },
    { name: "Oange", price: 2, emoji: "🍊" ,  soldout: false },
    { name: "Pineapple", price: 8, emoji: "🍍" ,  soldout: true},
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
      </ol>
    </>
  );
}
