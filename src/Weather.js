import React, { useState } from "react";

import "./styles.css";

export default function SearchEngine() {
  let [city, setCity] = useState(" ");
  let [text, setText] = useState("");

  function search(event) {
    event.preventDefault();
    setText(`It is 19°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="searchForm" onSubmit={search}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Enter City.."
          onChange={updateCity}
        />
        <button value="submit">Search</button>
      </form>
      <h2>{text}</h2>
    </div>
  );
}
