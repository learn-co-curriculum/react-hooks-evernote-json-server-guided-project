import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(r => r.json())
    .then(notes => setNotes(notes))
  },[])

  console.log(notes)

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
