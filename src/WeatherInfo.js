import React from "react";
import FormateDate from "./FormateDate";

export default function WeatherInfo(props) {
  return (
    <>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormateDate date={props.data.date} />
        </li>
        <li className="text-capitalie">{props.data.description}</li>
      </ul>
      <div className="row ">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="Temp"> {Math.round(props.data.temperature)}</span>
          <span className="unit">°c</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.Humidity} </li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </>
  );
}
