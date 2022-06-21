import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import NoteViewer from './NoteViewer'

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [displayNote, setDisplayNote] = useState({})
  // const [editNote, setEditNote] = useState(false)
  // const [noteViewer, setNoteViewer] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')


  useEffect( () => {
    fetch("http://localhost:3000/notes")
    .then(r=>r.json())
    .then(data=>setNotes(data))
  }, [])

function handleClick(noteId) {
  const noteToDisplay = notes.find((note) => note.id === noteId) 
  //setDisplayNote((displayNote => {...displayNote, id=noteToDisplay.id, userid=noteToDisplay.userid,     title=noteToDisplay.title, body=noteToDsiplay.body}))
  setDisplayNote(noteToDisplay)
   }


const filteredNotes = notes.filter((val) => {
  return val.title.toLowerCase().includes(searchTerm.toLowerCase())
})

function handleSearch(event) {

  setSearchTerm(event.target.value)
}

function handleAddNote(newNote) {
  setNotes([...notes, newNote])
}


  return (
    <>
      <Search handleSearch = {handleSearch} searchTerm = {searchTerm}/>
      <div className="container">
        <Sidebar notes = {filteredNotes} handleClick ={handleClick}  handleAddNote = {handleAddNote}/>
        {/* <Content displayNote = {displayNote} /> */}
        <div className="master-detail-element detail">
          <NoteViewer displayNote = {displayNote} />
        </div>;
      </div>
    </>
    );
  }

export default NoteContainer;
