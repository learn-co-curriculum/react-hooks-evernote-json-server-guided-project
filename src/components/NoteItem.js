import React from "react";

function NoteItem({note, renderContent}) {
  let body = note.body.slice(0,30)

  function handleClick(){
    renderContent(note)
  }

  return (
    <li onClick={handleClick}>
      <h2>{note.title}</h2>
      <p>{body}</p>
    </li>
  );
}

export default NoteItem;
