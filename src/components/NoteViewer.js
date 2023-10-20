import React, {useState} from "react";

function NoteViewer({note, handleEdit}) {


  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={handleEdit}>Edit</button>
    </>
  );
}

export default NoteViewer;

