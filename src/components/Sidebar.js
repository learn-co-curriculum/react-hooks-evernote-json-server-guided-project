import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, handleClick }) {

  return (
    <div className="master-detail-element sidebar">
      <NoteList notes = {notes} handleClick = {handleClick}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
