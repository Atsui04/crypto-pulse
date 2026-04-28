const Search = ({ searchQuery, onSearch }) => {
  return (
    <div className="search-container">
      <label htmlFor="coin-search" className="visually-hidden">
        Search cryptocurrency
      </label>
      <input
        id="coin-search"
        name="searchQuery"
        className="search"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearch(e)}
        spellCheck="false"
      />
    </div>
  );
};

export default Search;
