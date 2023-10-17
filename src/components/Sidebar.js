import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
