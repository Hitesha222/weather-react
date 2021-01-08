import React, { useState } from "react";
import FormateDate from "./FormateDate";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  // const [ready, setready] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponce(responce) {
    console.log(responce.data);
    setWeatherData({
      ready: true,
      temperature: responce.data.main.temp,
      wind: responce.data.wind.speed,
      Humidity: responce.data.main.humidity,
      city: responce.data.name,
      date: new Date(responce.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/fog.png",
      description: responce.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormateDate date={weatherData.date} />
          </li>
          <li className="text-capitalie">{weatherData.description}</li>
        </ul>
        <div className="row ">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="Temp"> {Math.round(weatherData.temperature)}</span>
            <span className="unit">°c</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.Humidity} </li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    const apiKey = "0ba815334c7359de1226f0622b8ed758";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponce);
    return "Loading...";
  }
}
