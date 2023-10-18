import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [viewNote, setViewNote] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")
  const [addNote, setAddNote] = useState([])
  
  function addNoteToState(noteObj) {
    setNotes([...notes, noteObj])
  }

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(r => r.json())
    .then(notes => setNotes(notes))
  },[])

  const handleClick = (note) => {
    console.log(note)
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
          <Sidebar handleClick={handleClick} notes={filterNotes} setNotes={setNotes} addNoteToState={addNoteToState}/>
          <Content viewNote={viewNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
