import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notesArr, renderContent}) {
  // console.log(notesArr)
  const note = notesArr.map((noteObj)=>(
    <NoteItem 
    key={noteObj.id} 
    note={noteObj} 
    renderContent={renderContent}
    />
   ))
  return (
    <ul>
      {/* Render list of notes here... */}
      {note}
    </ul>
  );
}

export default NoteList;
