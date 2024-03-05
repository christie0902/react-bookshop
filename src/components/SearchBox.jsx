import React from "react";
import { useState } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <label htmlFor="search" style={{ fontSize: 20 }}>
        Search
      </label>
      <input
        type="text"
        name="search"
        onInput={handleInput}
        value={searchTerm}
      />
    </>
  );
};

export default SearchBox;
