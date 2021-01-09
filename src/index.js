import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="London" />
      </div>
      <footer>
        <a
          href="https://github.com/Hitesha222/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        by Hitesha Chauhan
        {/* <small>https://suspicious-tesla-f5158f.netlify.app/</small> */}
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
