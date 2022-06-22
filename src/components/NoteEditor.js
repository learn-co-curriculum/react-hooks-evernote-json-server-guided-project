import React, { useState} from "react";
// import { useHistory } from 'react-router-dom';

function NoteEditor({ displayNote, handleEditSubmit }) {
  const [formData, setFormData] = useState({
    title: displayNote.title,
    body: displayNote.body
  });

  // const history = useHistory();

  function handleChange(e) {
   const name = e.target.name;
   const value = e.target.value;
   const updatedForm = {...formData, [name]: value}
   setFormData(updatedForm)
  }
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/notes/${displayNote.id}`,{
      method: "PATCH",
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(
        formData
      )
    })
      .then(r=>r.json())
      .then(data=> handleEditSubmit(data))
    }

   
  
  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" value = {formData.title} onChange = {handleChange}/>
      <textarea name="body" value = {formData.body} onChange = {handleChange} /> 
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
