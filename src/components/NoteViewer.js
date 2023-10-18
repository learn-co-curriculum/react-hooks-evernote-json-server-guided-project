import React from "react";

function NoteViewer({note}) {
 
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
