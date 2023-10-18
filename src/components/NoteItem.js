import React from "react";

function NoteItem({title, body, handleClick}) {

  const note = {title, body}

  return (
    <li onClick={()=>{handleClick(note)}}>
      <h2>{title}</h2>
      <p className ="truncate">{body}</p>
    </li>
  );
}

export default NoteItem;
