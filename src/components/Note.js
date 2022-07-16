import React from "react";
import Draggable from "react-draggable";
import { FaTrashAlt } from "react-icons/fa";

function Note(props) {
  let noteColor = "bg-gray-100";

  function handleClick(e) {
    props.onDelete(props.id);
  }

  switch (props.color) {
    case "red":
      noteColor = "bg-red-300";
      break;
    case "blue":
      noteColor = "bg-blue-300";
      break;
    case "yellow":
      noteColor = "bg-amber-200";
      break;
    case "green":
      noteColor = "bg-emerald-300";
      break;
    default:
      noteColor = "bg-gray-300";
  }

  return (
    <Draggable>
      <div
        className={`relative pt-1 pr-1 pl-1 pb-6 m-4 float-left rounded-md max-w-sm ${noteColor}`}
      >
        <h3>{props.title}</h3>
        <p className="whitespace-pre-wrap break-words">{props.content}</p>
        <button
          className="w-7 h-7 rounded-full p-2 flex justify-center items-center absolute bottom-0 right-2"
          onClick={handleClick}
        >
          <FaTrashAlt />
        </button>
      </div>
    </Draggable>
  );
}

export default Note;
