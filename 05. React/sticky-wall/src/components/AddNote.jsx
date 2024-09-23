import AddNoteForm from "./AddNoteForm";

export default function AddNote() {
  let display = false;
  const handleClick = () => {
    display = true;
  };
  return (
    <div>
      {display ? <AddNoteForm /> : display}
      <button
        onClick={handleClick}
        className=" bg-gray-200 border-red-200 h-52 w-full text-black text-center text-4xl font-bold "
      >
        +
      </button>
    </div>
  );
}
