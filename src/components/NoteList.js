import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, handleClick}) {

  const renderNotes = notes.map(({id, userId, title, body}) => 
  <NoteItem 
  handleClick={handleClick}
  key={id}
  id={id}
  userId={userId}
  title={title}
  body={body}
  />)


  return (
    <ul>
      {renderNotes}
      <NoteItem notes={notes}/>
    </ul>
  );
}

export default NoteList;
