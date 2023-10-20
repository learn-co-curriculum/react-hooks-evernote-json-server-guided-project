import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  
  const [notesArr, setNotes] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/notes')
    .then(resp=>resp.json())
    .then(data => setNotes(data))
  },[])
  
  const defaultNote = {
    title:"Add Title",
    body:"Add Note",
    userId: 1
  }
  
  function addNoteToSt(newNote){
    setNotes((n)=>{
      return ([...n, newNote])
    })
  }

  function handlePost(){
    fetch('http://localhost:3000/notes',{
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(defaultNote)
    })
    .then(resp=>resp.json())
    .then(data=>addNoteToSt(data))
  }
  
  const [searchValue, setSearchValue] = useState("")
  
  function onSearch(searValue){
    setSearchValue(searValue)
  }
  
  const filterNotes = notesArr.filter((noteObj)=>{
    const lowerCasedTitle = noteObj.title.toLowerCase();
    const lowerCaseSearchTerm = searchValue.toLowerCase();
    return lowerCasedTitle.includes(lowerCaseSearchTerm);
  })
  

  const [onViewNote, setNoteView] = useState(false)
  function renderContent(obj){
    setNoteView(obj)
  }

  const handleEditNote = noteobj => {
    setNotes(notesArr.map((note)=>
    note.id === noteobj.id ? noteobj : note
    ))
  }

  return (
    <>
      <Search onSearch={onSearch}/>
      <div className="container">
        <Sidebar notesArr={filterNotes} handlePost={handlePost} renderContent={renderContent} />
        <Content onViewNote={onViewNote} handleEditNote={handleEditNote} renderContent={renderContent}/>
      </div>
    </>
  );
}

export default NoteContainer;
