import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  // const [ready, setready] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  let Search = () => {
    const apiKey = "0ba815334c7359de1226f0622b8ed758";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponce);
  };

  let handleSubmit = (evet) => {
    evet.preventDefault();
    //search for a city
    Search();
  };

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  autoFocus="on"
                  placeholder="Enter cityname"
                  autoComplete="off"
                  title="search city"
                  onChange={handleCity}
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
        <WeatherInfo data={weatherData} />
      </>
    );
  } else {
    Search();
    return "Loading...";
  }
}
