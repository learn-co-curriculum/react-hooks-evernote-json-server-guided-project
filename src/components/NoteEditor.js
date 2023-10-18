import React,{useState} from "react";


function NoteEditor() {
  const [formValue, setFormValue] = useState({title: title, body: body})
  const {title, body} = formValue

  function getValue(e){
    setFormValue(
      {[e.target.value]: e.target.value}
      )
      console.log(e.target)
  }
  function handleSubmit(){
    console.log("submit")
  }
  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <input type="text" name="title" value={title} onChange={getValue}/>
      <textarea name="body" onChange={getValue} value={body}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
