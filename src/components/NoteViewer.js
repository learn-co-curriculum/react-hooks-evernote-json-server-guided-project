import React from "react";

function NoteViewer({display}) {
  // console.log(display)
  function handleEdit(){
    console.log("click")
  }
  return (
    <>
      <h2>{display.title}</h2>
      <p>{display.body}</p>
      <button onClick={handleEdit}>Edit</button>
    </>
  );
}

export default NoteViewer;
