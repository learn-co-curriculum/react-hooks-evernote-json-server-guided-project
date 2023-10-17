import React from "react";

function NoteItem({title, body}) {


  return (
    <li>
      <h2>{title}</h2>
      <p className ="truncate">{body}</p>
    </li>
  );
}

export default NoteItem;
