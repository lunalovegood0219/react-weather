import React, { useState } from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [temp, setTemp] = useState(props.api.temprature);
 

  function displayFahrenheiht(event) {
    event.preventDefault();
    let celsuis = props.api.temprature;
    let fahrenheiht = Math.round((celsuis * 9) / 5 + 32);
    setTemp(fahrenheiht);
    
  }
  function displayCelsius(event) {
    event.preventDefault();
    setTemp(props.api.temprature);
    
  }

  return (
    <div className="Weather">
      <h2 className="text-center text-capitalize">{props.city}</h2>
      <div className="time">
        <ul className="text-center">
          <li>
            <span className="text-capitalize">{props.api.description}</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <WeatherIcon code={props.api.icon} />
        <span className="main-temp">{Math.round(temp)}°C</span>
      </div>
      <div className="describtion">
        <ul className="text-center">
          <li>humidity : {Math.round(props.api.humidity)} %</li>
          <li> wind : {Math.round(props.api.wind)} km/h</li>
        </ul>
      </div>
      <div className="text-center">
        <a
          href="/"
          onClick={displayCelsius}
        >
          C°
        </a>{" "}
        <a
          href="/"
          onClick={displayFahrenheiht}
        >
          F°
        </a>
      </div>
    </div>
  );
}
