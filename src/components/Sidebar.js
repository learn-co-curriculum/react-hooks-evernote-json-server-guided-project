import React from "react";
import NoteList from "./NoteList";

function Sidebar() {
  return (
    <div className="master-detail-element sidebar">
      <NoteList />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
