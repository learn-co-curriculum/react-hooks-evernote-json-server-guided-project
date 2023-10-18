import React from "react";
import NoteList from "./NoteList";

function Sidebar({notesArr, renderContent}) {
  //  console.log(notesArr)
  function form(){
    fetch("")
    .then(resp=>resp.json())
    .then()
  }
  return (
    <div className="master-detail-element sidebar">
      <NoteList notesArr={notesArr} renderContent={renderContent}/>
      <button onClick={form}>New</button>
    </div>
  );
}

export default Sidebar;
