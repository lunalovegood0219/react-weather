import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import Forcast from "./WeatherForcast"

export default function Weather(props) {
  const [temp, setTemp] = useState(props.api.temprature);
  const [unit, setUnit] = useState("°C");

  useEffect(() => {
    setTemp(props.api.temprature);
    setUnit("°C");
  }, [props.api]);

  function displayFahrenheiht(event) {
    event.preventDefault();
    let celsuis = props.api.temprature;
    let fahrenheiht = Math.round((celsuis * 9) / 5 + 32);
    setTemp(fahrenheiht);
    setUnit("°F");
  }
  function displayCelsius(event) {
    event.preventDefault();
    setTemp(props.api.temprature);
    setUnit("°C");
  }

  return (
    <div className="Weather">
      <h2 className="text-center text-capitalize">{props.api.city}</h2>
      <div className="time">
        <ul>
          <li>
            <span className="text-capitalize">{props.api.description}</span>
          </li>
        </ul>
      </div>
      <div>
        <WeatherIcon code={props.api.icon} size={44} />
        <span className="main-temp">
          {Math.round(temp)}
          {unit}
        </span>
      </div>
      <div className="describtion">
        <ul>
          <li>humidity : {Math.round(props.api.humidity)} %</li>
          <li> wind : {Math.round(props.api.wind)} km/h</li>
        </ul>
      </div>
      <div>
        <a href="/" className="btn btn-dark rounded-5" onClick={displayCelsius}>
          C°
        </a>{" "}
        <a
          href="/"
          className="btn btn-outline-dark rounded-5"
          onClick={displayFahrenheiht}
        >
          F°
        </a>
      </div>
      <hr />
      <Forcast coordinate={props.api.coordinate} />
    </div>
  );
}
