import React, {useState} from "react";
import NoteList from "./NoteList";
import NoteItem from "./NoteItem";

function Sidebar({notes, handleClick, setNotes, addNoteToState}) {

  function handleNewNote() {
    const newNote = {title:"newTitle", body: "newBody"}

  fetch("http://localhost:3000/notes",{
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(newNote),
  }) 
  .then((r) => r.json())
  .then((freshNote) => {
    addNoteToState(freshNote)
  })
}

  return (
    <div className="master-detail-element sidebar">
        <NoteList handleClick={handleClick} notes={notes}/>
      <button onClick={handleNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
