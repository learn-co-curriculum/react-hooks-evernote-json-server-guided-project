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

function filterNotes(){
  
}

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes = {notes} handleClick ={handleClick}/>
        {/* <Content displayNote = {displayNote} /> */}
        <div className="master-detail-element detail">
          <NoteViewer displayNote = {displayNote} />
        </div>;
      </div>
    </>
    );
  }

export default NoteContainer;
