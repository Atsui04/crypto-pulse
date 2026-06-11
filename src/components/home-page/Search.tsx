import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

interface SearchProps {
  searchQuery: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchQuery, onSearch }: SearchProps) => {
  const { t } = useTranslation();

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
        placeholder={t("search.placeholder")}
      />
    </div>
  );
};

export default Search;
