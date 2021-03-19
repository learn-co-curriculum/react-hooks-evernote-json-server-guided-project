import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
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
