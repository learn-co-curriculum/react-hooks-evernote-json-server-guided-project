import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import { Route, Switch} from "react-router-dom";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({ displayNote, handleEditSubmit }) {

  return (
    <div className="master-detail-element detail">
      <Switch>
        <Route exact path="/">
          <Instructions />
        </Route>
        <Route path="/:id/edit">
          <NoteEditor displayNote = {displayNote} handleEditSubmit={handleEditSubmit}/>
        </Route>
        <Route path="/:id">
          <NoteViewer displayNote={displayNote} />
        </Route>
      </Switch>
      {/* {getContent()} */}
    </div>
  );
}

export default Content;
