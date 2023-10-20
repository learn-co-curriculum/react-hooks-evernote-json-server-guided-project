import React from "react";

function Search({onSearch}) {
  
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
}

export default Search;
