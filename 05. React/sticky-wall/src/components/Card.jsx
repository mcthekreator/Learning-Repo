export default function Card(props) {
  return (
    <div className="border border-red-200 h-52 w-full ">
      <h1> {props.title}</h1>
      <textarea name="" id="">
        {props.description}
      </textarea>
    </div>
  );
}
