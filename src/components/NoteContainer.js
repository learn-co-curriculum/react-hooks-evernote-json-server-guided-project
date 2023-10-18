import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  //const [clickedNote, setClickedNote] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(r => r.json())
    .then(notes => setNotes(notes))
  },[])

  const handleClick = (note) => {
    console.log(note)
  }


  return (
    <>
      <Search />
      <div className="container">
          <Sidebar handleClick={handleClick} notes={notes}/>
          <Content notes={notes}/>
      </div>
    </>
  );
}

export default NoteContainer;
