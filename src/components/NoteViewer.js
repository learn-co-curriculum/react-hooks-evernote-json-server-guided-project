import React from "react";
import NoteEditor from "./NoteEditor";

function NoteViewer({body, title, handleEditFeat, id}) {

 
  function handleEditClick(){
    handleEditFeat()
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleEditClick}>Edit</button>
    </>
  );
}

export default NoteViewer;
