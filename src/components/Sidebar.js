import React from "react";
import NoteList from "./NoteList";

function Sidebar({notesArr, renderContent, handlePost}) {
  //  console.log(notesArr)
  function handleCreateNote(e){
    handlePost(e)
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList notesArr={notesArr} renderContent={renderContent}/>
      <button onClick={handleCreateNote}>New</button>
    </div>
  );
}

export default Sidebar;
