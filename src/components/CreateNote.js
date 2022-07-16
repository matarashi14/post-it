import React, { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "", color: "" });

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      color: "",
    });
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(value);
    setNote((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  }
  return (
    <div className="w-full">
      <form>
        <input
          className="w-full rounded-sm p-2 bg-gray-700 border-none focus:outline-none text-gray-100 mr-1 text-sm my-2"
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          rows={4}
          type="text"
          name="content"
          placeholder="take note here..."
          className="w-full rounded-sm p-4 bg-gray-700 border-none focus:outline-none text-gray-100 mr-1 text-sm h-40 my-2"
          onChange={handleChange}
          value={note.content}
        />

        <select
          name="color"
          id="color-selected"
          className="rounded-sm bg-gray-700 border-none focus:outline-none text-gray-100 mr-1 text-sm w-full my-2 p-2"
          onChange={handleChange}
        >
          <option value="">--color--</option>
          <option value="red" className="text-red-400">
            red
          </option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>

        <button
          className="text-xl text-gray-50 bg-teal-500 rounded-xl p-2 w-full my-2"
          onClick={submitNote}
        >
          post
        </button>
        {/* <MdOutlineAddCircle
          className=" text-3xl absolute bottom-0 right-0 text-teal-500 rounded-full"
          onClick={submitNote}
        /> */}
      </form>
    </div>
  );
}

export default CreateNote;
