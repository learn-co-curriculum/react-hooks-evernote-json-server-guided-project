import React, {useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({onViewNote, handleEditNote, renderContent}) {

  const {id, title, body} = onViewNote

  const [isEditing, setIsEditting] = useState(false)

  function handleEditFeat(){
    // console.log("click")
    setIsEditting(!isEditing)
  }
  
  const getContent = () => {
    //  console.log(props)
    if (isEditing) {
      return <NoteEditor title={title} body={body} id={id} handleEditNote={handleEditNote} handleEditFeat={handleEditFeat} renderContent={renderContent}/>;
    } else if (onViewNote) {
      return <NoteViewer title={title} body={body} id={id} handleEditFeat={handleEditFeat}/>;
    } else {
      return <Instructions/>;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
