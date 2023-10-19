import React from "react";
import NoteEditor from "./NoteEditor";

function NoteViewer({selectedNote, enableEditing}) {
 
  function handleClick(){
    enableEditing()
  }
  return (
    <>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button onClick={handleClick}>Edit</button>
    </>
  );
}

export default NoteViewer;
