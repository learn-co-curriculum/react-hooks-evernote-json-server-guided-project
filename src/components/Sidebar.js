import React, {useState} from "react";
import NoteList from "./NoteList";

function Sidebar({notes, handleClick}) {

  return (
    <div className="master-detail-element sidebar">
        <NoteList handleClick={handleClick} notes={notes}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
