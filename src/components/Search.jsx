import React from "react";
import SearchSvg from "./SearchSvg";

const Search = ({ callSeatSearch, sInput, setSearchValue, theme }) => {
  return (
    <div className={!theme ? "mainSearch" : "mainSearch-dark"}>
      <SearchSvg />
      <input
        className={!theme ? "search" : "search-dark"}
        placeholder="Search GitHub username…"
        type="text"
        value={!sInput ? "" : sInput}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
      ></input>
      <button className="buttonsearch" onClick={() => callSeatSearch(sInput)}>
        Search
      </button>
    </div>
  );
};

export default Search;
