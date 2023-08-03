import React, { useState } from "react";
import "../components_css/SearchBar.css"

export default function SearchBar(props) {
  const { onSubmit } = props;

  const [inputTerm, setInputTerm] = useState("");

  const handleInputChange = (e) => {
    setInputTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputTerm);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input
          type="text"
          name="search"
          value={inputTerm}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
