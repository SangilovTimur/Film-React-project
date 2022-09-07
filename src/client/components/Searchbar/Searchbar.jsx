import React, { useEffect, useState } from "react";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState([]);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="file-field input-field">
          <button className="btn">Search</button>
          <div class="file-path-wrapper">
            <input
              className="file-path_validate"
              type="text"
              value={query}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}
