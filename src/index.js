import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>🌤 WEATHER</h1>
        <Weather />
      </div>
      <footer>
        <a href="https://github.com/Hitesha222/weather-react" target="_blank">
          Open source code
        </a>{" "}
        by Hitesha
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
