import React from "react";


function NoteEditor({selectedNote, handleEditNote, updateNote}) {


  function getValue(e){
    updateNote((cVal)=>{ 
      return {
        ...cVal,
        [e.target.name]: e.target.value
      }
    })
  }
  


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/notes/${selectedNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedNote),
    })
    .then((resp) => resp.json())
    .then(handleEditNote);
  }

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <input placeholder={selectedNote.title} type="text" name="title" value={selectedNote.title} onChange={getValue}/>
      <textarea placeholder={selectedNote.body} name="body" value={selectedNote.body} onChange={getValue}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
