import React, {useState} from "react";


function NoteEditor({title, body, id, handleEditNote, handleEditFeat, renderContent}) {

  const [onTitle, setTitle] = useState(title)
  const [onBody, setBody] = useState(body)
  function handleOnChangeTitle(e){
    setTitle(e.target.value)
  }
  function handleOnChangeBody(e){
    setBody(e.target.value)
  }

  function handleCancel(){
    handleEditFeat()
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: onBody,
        title: onTitle
      }),
    })
    .then((resp) => resp.json())
    .then((data)=>(
      handleEditNote(data), 
      renderContent(data), 
      handleEditFeat()
    ))
  }

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <input placeholder={title} type="text" name="title" value={onTitle} onChange={handleOnChangeTitle}/>
      <textarea placeholder={body} name="body" value={onBody} onChange={handleOnChangeBody} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button onClick={handleCancel} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
