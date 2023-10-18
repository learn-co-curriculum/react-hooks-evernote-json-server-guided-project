import React from "react";

function NoteViewer({title, body}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
