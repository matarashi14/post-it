import React from "react";
import Draggable from "react-draggable";

function Note(props) {
  let noteColor = "bg-gray-100";

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
      <div className={`w-40 p-1 rounded-md ${noteColor}`}>
        <h3>Title</h3>
        <p>content</p>
      </div>
    </Draggable>
  );
}

export default Note;
