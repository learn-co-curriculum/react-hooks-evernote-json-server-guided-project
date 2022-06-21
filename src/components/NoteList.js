import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, handleClick }) {

  const eachNote = notes.map(note => {
    return (
   <NoteItem key={note.id} id = {note.id} title={note.title} body = {note.body} handleClick = {handleClick}/>
    )
  })
  
  return (
    <ul>
      {eachNote}
    </ul>
  );
}

export default NoteList;
