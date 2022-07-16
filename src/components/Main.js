import React, { useState } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";

function Main() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(newNote) {
    setNotes((p) => {
      return [...p, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((p) => {
      return p.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="h-screen p-4 flex">
      <div className="inputNote w-1/4 border-2 border-gray-900 rounded-lg p-6 bg-gray-800 h-4/5">
        <CreateNote onAdd={addNote} />
      </div>
      <div className="notes w-3/4">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            color={note.color}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
