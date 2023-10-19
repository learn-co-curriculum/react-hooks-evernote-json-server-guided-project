import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notesArr, setNotes] = useState([])

  function addNoteToSt(newNote){
    setNotes((n)=>{
      return ([...n, newNote])
    })
  }

  const [searchValue, setSearchValue] = useState("")

  const defaultNote = {
    title:"Add Title",
    body:"Add Note",
    userId: 1
  }

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

  const [selectedNote, setSelectedNotes] = useState(false)
  function renderContent(noteObj){
    setSelectedNotes(noteObj)
  }

  const [edit, setEdit] = useState(null)
  function updateNote(name, value){
    setEdit({...edit, [name]:value })
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
        <Content selectedNote={selectedNote} handleEditNote={handleEditNote} updateNote={updateNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
