import { useState } from "react";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQChange = ({ target: { value } }) => {
    setSearchQuery(value)
  }

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  return (
    <div className="ui search">
      <div onClick={handleSearch} className="ui icon input">
        <input onChange={handleSearchQChange} className="prompt" value={searchQuery} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
