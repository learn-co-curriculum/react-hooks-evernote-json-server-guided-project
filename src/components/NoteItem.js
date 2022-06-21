import React from "react";

function NoteItem({ title, body, id, handleClick }) {
  return (
    <li onClick = {() => handleClick(id)}>
      <h2>{title}</h2>
      <p>{body.slice(0, 19)}...</p>
    </li>
  );
}

export default NoteItem;
