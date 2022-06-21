import React, { useState } from "react";

function Search({ handleSearch, searchTerm }) {

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" onChange = {(e) => handleSearch(e)} 
        value = {searchTerm}/>
    </div>
  );
}

export default Search;
