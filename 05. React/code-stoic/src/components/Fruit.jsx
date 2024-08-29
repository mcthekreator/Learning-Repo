export default function Fruit({ name, price, emoji }) {
  return (
    <div>
      <>
        {/* {props.name} {props.emoji} : ${props.price} */}
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
