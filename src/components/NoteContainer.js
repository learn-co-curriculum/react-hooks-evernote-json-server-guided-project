import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
// import NoteViewer from './NoteViewer'
import { useRouteMatch, useHistory, Redirect } from "react-router-dom";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [displayNote, setDisplayNote] = useState({});
  // const [editNote, setEditNote] = useState(false)
  // const [noteViewer, setNoteViewer] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then((data) => setNotes(data));
  }, []);

  const history = useHistory();

  function handleClick(noteId) {
    const noteToDisplay = notes.find((note) => note.id === noteId);
    setDisplayNote(noteToDisplay);
    history.push(`/${noteId}`);
  }

  const filteredNotes = notes.filter((val) => {
    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleAddNote(newNote) {
    setNotes([...notes, newNote]);
  }

 function handleEditSubmit(editedNote) {
  const editedNotes = notes.map(note => {
    if (note.id === editedNote.id) {
      return editedNote
    } else {
      return note
    }
  })
  setNotes(editedNotes)
  history.push(`/${displayNote.id}`)
  };

  return (
    <>
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <div className="container">
        <Sidebar
          notes={filteredNotes}
          handleClick={handleClick}
          handleAddNote={handleAddNote}
        />
        <Content displayNote={displayNote} handleEditSubmit={handleEditSubmit}/>
      </div>
    </>
  );
}

export default NoteContainer;
