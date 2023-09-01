import React from "react";
import "./Weather.css"
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";
export default function Weather(props) {
    
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
        <span className="main-temp">{Math.round(props.api.temprature)}°C</span>
      </div>
      <div className="describtion">
        <ul className="text-center">
          <li>humidity : {Math.round(props.api.humidity)} %</li>
          <li> wind : {Math.round(props.api.wind)} km/h</li>
        </ul>
      </div>
      <div className="text-center">
        <a href="/">C°</a>
        {" "}
        <a href="/">F°</a>
      </div>
    </div>
  );
}
