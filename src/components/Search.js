import { useState } from "react";

function Search({ onSearch, searchQuery }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSearch} className="prompt" value={searchQuery} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
