export default function TodoItem(props) {
  return (
    <ul>
      <li> {props.index}{props.item}</li>
    </ul>
  );
}
