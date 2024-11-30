import AddNoteForm from "./AddNoteForm";
import { useState } from "react";

export default function AddNote() {
  let [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(true);
  };
  return (
    <div>
      {display ? <AddNoteForm /> : false}
      <button
        onClick={handleClick}
        className=" bg-gray-200 border-red-200 h-52 w-full text-black text-center text-4xl font-bold "
      >
        +
      </button>
    </div>
  );
}
