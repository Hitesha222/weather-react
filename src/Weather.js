import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <>
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter cityname"
                autoComplete="off"
                title="search city"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
      <h1>New York</h1>
      <ul>
        <li>Tuesday 07:00</li>
        <li>Fog</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
            alt="fog"
          />
          1°c
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
}
