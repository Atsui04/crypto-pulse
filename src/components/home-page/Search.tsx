import { ChangeEvent } from "react";

interface SearchProps {
  searchQuery: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchQuery, onSearch }: SearchProps) => {
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
        onChange={onSearch}
        spellCheck="false"
      />
    </div>
  );
};

export default Search;
