import React, { useState } from "react";
import ForecastPreview from "./ForcastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WheatherForecast row">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
        <ForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "0ba815334c7359de1226f0622b8ed758";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
