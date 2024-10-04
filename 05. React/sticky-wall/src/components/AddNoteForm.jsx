import { useState } from "react";

export default function AddNoteForm() {
  let [title, setTitle] = useState();

const addToForm =()=>{


}

  return (
    <form action="" onSubmit={addToForm}>
      <input value={title} type="text" placeholder="Title" />
      <textarea name="" id="" placeholder="Description"></textarea>
      <button>Add</button>
    </form>
  );
}
