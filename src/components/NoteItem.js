import React from "react";

function NoteItem({note, display}) {
  let body = note.body.slice(0,30)
  function handleClick(){
    // console.log("click")
    display(note)
  }

  return (
    <li onClick={handleClick}>
      <h2>{note.title}</h2>
      <p>{body}</p>
    </li>
  );
}

export default NoteItem;
