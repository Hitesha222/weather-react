import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setready] = useState(false);
  const [temp, setTemp] = useState(null);

  function handleResponce(responce) {
    setTemp(responce.data.main.temp);
    setready(true);
  }

  if (ready) {
    return (
      <>
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  autoFocus="on"
                  placeholder="Enter cityname"
                  autoComplete="off"
                  title="search city"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
        <h1>London</h1>
        <ul>
          <li>Tuesday 07:00</li>
          <li>Fog</li>
        </ul>
        <div className="row ">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
              alt="fog"
            />
            <span className="Temp"> {Math.round(temp)}</span>
            <span className="unit">°c</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 88%</li>
              <li>Wind: 12 km/h</li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    const apiKey = "0ba815334c7359de1226f0622b8ed758";
    let city = "London";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponce);
    return "Loading...";
  }
}
