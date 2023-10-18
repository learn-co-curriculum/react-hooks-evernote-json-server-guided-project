import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notesArr, setNotes] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [display, onDisplay] = useState(null)
  const [editNote, setEditNote] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:3000/notes')
    .then(resp=>resp.json())
    .then(data => setNotes(data))
  },[])

  function onSearch(searValue){
    setSearchValue(searValue)
  }
  
  const filterNotes = notesArr.filter((noteObj)=>{
    const lowerCasedTitle = noteObj.title.toLowerCase();
    const lowerCaseSearchTerm = searchValue.toLowerCase();
    return lowerCasedTitle.includes(lowerCaseSearchTerm);
  })
  
  function renderContent(noteObj){
    onDisplay(noteObj)
    setEditNote(editNote)
  }

  // function editNote(){
    
  // }
   
  
  return (
    <>
      <Search onSearch={onSearch}/>
      <div className="container">
        <Sidebar notesArr={filterNotes} renderContent={renderContent} />
        <Content display={display} />
      </div>
    </>
  );
}

export default NoteContainer;
