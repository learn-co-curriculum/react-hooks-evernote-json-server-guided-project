import React from "react";
import { useHistory, useRouteMatch } from 'react-router-dom';

function NoteViewer({ displayNote }) {
  // console.log("noteviewer", displayNote)
  // console.log('title', title)
  // console.log('body', body)

  const editNote = useHistory();
  const match = useRouteMatch();

  function editNotes() {
    editNote.push(`${match.url}/edit`)
  };

  return (
    <>
      <h2>{displayNote.title}</h2>
      <p>{displayNote.body}</p>
      <button onClick={editNotes}>Edit</button>
    </>
  );
}

export default NoteViewer;
