export default function Fruit({ name, price, emoji }) {
  return (
    <div>
      <>
        {/* { {name} {emoji}  ${price} } */}
        {price > 5 ? (
          <li>
            {emoji}
            {name} {price}
          </li>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

// peacokck
// peace makers

// // inclusive for all, benevolte
// mavavevi behaviour : self motivated
// post grassivce
