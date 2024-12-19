export default function Card({title, description}) {
  return (
    <div className="border border-red-200 h-52 w-full ">
      <h1> {title}</h1>
      <textarea name="" id="">
        {description}
      </textarea>
    </div>
  );
}
