import React, {useState} from "react";

function NoteEditor({viewNote, handleEditor}) {

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleBodyChange(e) {
    setBody(e.target.value)
  }

  return (
    <form className="note-editor">
      <input type="text" name="title" value={viewNote.title} onChange={handleTitleChange}/>
      <textarea name="body" value={viewNote.body} onChange={handleBodyChange}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save"/>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
