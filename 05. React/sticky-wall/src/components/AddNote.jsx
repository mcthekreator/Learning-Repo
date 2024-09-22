export default function AddNote() {
  const handleClick = () => {
    alert("Form added");
  };
  return (
    <button onClick={handleClick} className="border bg-transparent border-red-200 h-52 w-full ">
      Add Note
    </button>
  );
}
