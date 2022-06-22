import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, handleClick, handleAddNote }) {

  function addNote() {
    const newNote = {title: 'draft title', body: 'draft body'}
    fetch('http://localhost:3000/notes', {
    method: 'POST', 
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify(
      newNote
    )
  }
  )
    .then(r=>r.json())
    .then(data=>  handleAddNote(data))
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList notes = {notes} handleClick = {handleClick}/>
      <button onClick = {addNote}>New</button>
    </div>
  );
  }

export default Sidebar;
