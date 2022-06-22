import React from "react";

function NoteViewer({ displayNote }) {
  // console.log("noteviewer", displayNote)
  // console.log('title', title)
  // console.log('body', body)

  return (
    <>
      <h2>{displayNote.title}</h2>
      <p>{displayNote.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
