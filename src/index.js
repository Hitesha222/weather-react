import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>🌤 WEATHER</h1>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
