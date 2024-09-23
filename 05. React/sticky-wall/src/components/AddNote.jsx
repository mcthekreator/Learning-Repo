import AddNoteForm from "./AddNoteForm";

export default function AddNote() {
  const handleClick = () => {
    alert("Form added");
  };
  return (
    <div>
      <AddNoteForm />
      <button
        onClick={handleClick}
        className=" bg-gray-200 border-red-200 h-52 w-full text-black text-center text-4xl font-bold "
      >
        +
      </button>
    </div>
  );
}
