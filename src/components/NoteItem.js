import React from "react";

function NoteItem({title, body, handleClick}) {


  return (
    <li onClick={handleClick}>
      <h2>{title}</h2>
      <p className ="truncate">{body}</p>
    </li>
  );
}

export default NoteItem;
