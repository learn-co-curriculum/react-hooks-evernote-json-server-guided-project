import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [viewNote, setViewNote] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")


  function addNoteToState(noteObj) {
    setNotes([...notes, noteObj])
  }

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(r => r.json())
    .then(notes => setNotes(notes))
  },[])

  const handleClick = (note) => {
    setViewNote(note)
  }

  function onSearch(searchString){
    setSearchTitle(searchString)
  }
  
  const filterNotes = notes.filter((note) => {
    const lowerCaseTitle = note.title.toLowerCase()
    const lowerCaseSearchTitle = searchTitle.toLowerCase()
    return lowerCaseTitle.includes(lowerCaseSearchTitle)
  })

  
  return (
    <>
      <Search onSearch={onSearch} />
      <div className="container">
          <Sidebar handleClick={handleClick} notes={filterNotes} addNoteToState={addNoteToState} />
          <Content viewNote={viewNote} handleClick={handleClick}/>
      </div>
    </>
  );
}

export default NoteContainer;


// const editedNote = {
//   title:"newTitle", body: "newBody"
// }
// function updateNote() {
//   fetch('http://localhost:3000/notes/:id', {
//   method: "PATCH",
//   headers: {
//   'Content-Type': "application/json",
//   },
//   body: JSON.stringify(editedNote),
//   })
//   .then((r) => r.json())
//   .then((noteFromServer) => setEditNote(noteFromServer))
//   }

 